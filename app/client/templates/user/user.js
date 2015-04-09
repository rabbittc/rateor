/**
 * List
 */
Template.app_user.events({
    'click .insert': function (e, t) {
        ModalTemplate.show('app_userInsert');
    },
    'click .update': function (e, t) {
        var id = this._id;
        var data = Meteor.users.findOne(id);

        data.password = 'the same';
        data.confirmPassword = 'the same';

        if (typeof data.emails !== 'undefined') {
            data.email = data.emails[0].address;
        }

        var roles = [];
        var getGroup = Roles.getGroupsForUser(id);
        _.each(getGroup, function (group) {
            var getRole = Roles.getRolesForUser(id, group);
            _.each(getRole, function (role) {
                roles.push(group + ':' + role);
            });
        });

        data.role = roles;

        ModalTemplate.show('app_userUpdate', data);
    },
    'click .remove': function (e, t) {
        var id = this._id;
        bootbox.confirm("Are you sure to delete [" + this.username + "]?", function (result) {
            if (result) {
                Meteor.call('userRemove', id, function (error, result) {
                    if (error) {
                        toastr.error(error.message, 'Error');
                    } else {
                        toastr.success(App.Message.success, 'Success');
                    }
                });
            }
        });
    },
    'click .show': function (e, t) {

        // Check email
        if (typeof this.emails !== 'undefined') {
            this.emails = this.emails[0].address;
        } else {
            this.emails = "";
        }

        // Check branch
        if (_.isObject(this.profile.branch)) {
            this.profile.branch = JSON.stringify(this.profile.branch);
        } else {
            this.profile.branch = "";
        }

        // Check roles
        if (_.isObject(this.roles)) {
            this.roles = JSON.stringify(this.roles);
        } else {
            this.roles = "";
        }

        //this.roles = Roles.getGroupsForUser(this._id).join(' | ');

        bootbox.dialog({
            message: renderTemplate(Template.app_userShow, this),
            title: "User info"
        });
    }
});

/**
 * Hook
 */
AutoForm.hooks({
    app_userInsert: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            this.event.preventDefault();

            Meteor.call('userInsert', insertDoc, function (error, result) {
                if (error) {
                    toastr.error(error.message, 'Error');
                }
            });

            this.done();
        },
        onSuccess: function (formType, error) {
            //$('#app_userInsertModal').modal('hide');
            toastr.success(App.Message.success, 'Success');
        },
        onError: function (formType, error) {
            toastr.error(error.message, 'Error');
        }
    },
    app_userUpdate: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            this.event.preventDefault();

            Meteor.call('userUpdate', currentDoc._id, insertDoc, function (error, result) {
                if (error) {
                    toastr.error(error.message, 'Error');
                }
            });

            this.done();
        },
        onSuccess: function (formType, error) {
            $('#app_userUpdateModal').modal('hide');
            toastr.success(App.Message.success, 'Success');
        },
        onError: function (formType, error) {
            toastr.error(error.message, 'Error');
        }
    }
});
