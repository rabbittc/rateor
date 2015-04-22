/**
 * Create new custom  alertify
 */
createCustomAlert("branch");

/**
 * Index
 */
Template.app_branch.events({
    'click .insert': function (e, t) {
        alertify.customBranch(renderTemplate(Template.app_branchInsert))
            .set({
                title: fa("plus", "Branch")
            })
            .maximize();
    },
    'click .update': function (e, t) {
        var data = App.Collection.Branch.findOne(this._id);

        alertify.customBranch(renderTemplate(Template.app_branchUpdate, data))
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

                    App.Collection.Branch.remove(id, function (error) {
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
        alertify.alert(renderTemplate(Template.app_branchShow, this))
            .set({
                title: fa("eye", "Branch")
            });
    }
});

/**
 * Hook
 */
AutoForm.hooks({
    app_branchInsert: {
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(App.Collection.Branch, '_id', 3);
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
    app_branchUpdate: {
        onSuccess: function (formType, result) {
            alertify.customBranch().close();
            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    }
});
