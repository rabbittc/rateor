/**
 * Create new custom  alertify
 */
createCustomAlert("user");

/**
 * Index
 */
Template.app_user.events({
    'click .insert': function (e, t) {
        alertify.customUser(renderTemplate(Template.app_userInsert))
            .set({
                title: fa("plus", "User")
            })
            .maximize();
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

        alertify.customUser(renderTemplate(Template.app_userUpdate, data))
            .set({
                title: fa("pencil", "User")
            })
            .maximize();
    },
    'click .remove': function (e, t) {
        var id = this._id;

        alertify.confirm("Are you sure to delete [" + this.username + "]?")
            .set({
                onok: function (closeEvent) {

                    Meteor.call('userRemove', id, function (error, result) {
                        if (error) {
                            alertify.error(error.message);
                        } else {
                            alertify.success("Success");
                        }
                    });
                },
                title: fa("remove", "Customer")
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

        alertify.alert(renderTemplate(Template.app_userShow, this))
            .set({
                title: fa("eye", "User")
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
                    alertify.error(error.message);
                }
            });

            this.done();
        },
        onSuccess: function (formType, error) {
            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    },
    app_userUpdate: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            this.event.preventDefault();

            Meteor.call('userUpdate', currentDoc._id, insertDoc, function (error, result) {
                if (error) {
                    alertify.error(error.message);
                }
            });

            this.done();
        },
        onSuccess: function (formType, error) {
            alertify.customUser().close();
            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    }
});
