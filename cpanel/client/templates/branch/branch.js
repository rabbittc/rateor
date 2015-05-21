/**
 * Index
 */
Template.cpanel_branch.onRendered(function () {
    // Create new  alertify
    createNewAlertify("branch");
});

Template.cpanel_branch.events({
    'click .insert': function (e, t) {
        alertify.branch(fa("plus", "Branch"), renderTemplate(Template.cpanel_branchInsert))
            .maximize();
    },
    'click .update': function (e, t) {
        var data = Cpanel.Collection.Branch.findOne(this._id);
        alertify.branch(fa("pencil", "Branch"), renderTemplate(Template.cpanel_branchUpdate, data))
            .maximize();
    },
    'click .remove': function (e, t) {
        var id = this._id;

        alertify.confirm(
            fa("remove", "Branch"),
            "Are you sure to delete [" + id + "]?",
            function () {
                Cpanel.Collection.Branch.remove(id, function (error) {
                    if (error) {
                        alertify.error(error.message);
                    } else {
                        alertify.success("Success");
                    }
                });
            },
            null);
    },
    'click .show': function (e, t) {
        alertify.alert(fa("eye", "Branch"), renderTemplate(Template.cpanel_branchShow, this));
    }
});

/**
 * Hook
 */
AutoForm.hooks({
    cpanel_branchInsert: {
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(Cpanel.Collection.Branch, 3);
                return doc;
            }
        },
        onSuccess: function (formType, result) {
            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    },
    cpanel_branchUpdate: {
        onSuccess: function (formType, result) {
            alertify.branch().close();
            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    }
});
