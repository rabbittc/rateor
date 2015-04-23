/**
 * Index
 */
Template.cpanel_branch.onRendered(function () {
    // Create new  alertify
    createNewAlertify("branch");
});

Template.cpanel_branch.events({
    'click .insert': function (e, t) {
        alertify.branch(renderTemplate(Template.cpanel_branchInsert))
            .set({
                title: fa("plus", "Branch")
            })
            .maximize();
    },
    'click .update': function (e, t) {
        var data = Cpanel.Collection.Branch.findOne(this._id);

        alertify.branch(renderTemplate(Template.cpanel_branchUpdate, data))
            .set({
                title: fa("pencil", "Branch")
            })
            .maximize();
    },
    'click .remove': function (e, t) {
        var id = this._id;

        alertify.confirm("Are you sure to delete [" + id + "]?")
            .set({
                onok: function (closeEvent) {

                    Cpanel.Collection.Branch.remove(id, function (error) {
                        if (error) {
                            alertify.error(error.message);
                        } else {
                            alertify.success("Success");
                        }
                    });
                },
                title: fa("remove", "Branch")
            });
    },
    'click .show': function (e, t) {
        alertify.alert(renderTemplate(Template.cpanel_branchShow, this))
            .set({
                title: fa("eye", "Branch")
            });
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
