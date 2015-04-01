/**
 * Index
 */
Template.app_branch.events({
    'click .insert': function (e, t) {
        ModalTemplate.show('app_branchInsert');
    },
    'click .update': function (e, t) {
        var data = App.Collection.Branch.findOne(this._id);

        ModalTemplate.show('app_branchUpdate', data);
    },
    'click .remove': function (e, t) {
        var id = this._id;
        bootbox.confirm("Are you sure to delete [" + id + "]?", function (result) {
            if (result) {
                App.Collection.Branch.remove(id, function (error) {
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
        bootbox.dialog({
            message: renderTemplate(Template.app_branchShow, this),
            title: "Branch Info"
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
                doc._id = IDGenertor.gen(App.Collection.Branch, '_id', 3);
                return doc;
            }
        },
        onSuccess: function (formType, result) {
            //$('#app_branchInsertModal').modal('hide');
            toastr.success(App.Message.success, 'Success');
        },
        onError: function (formType, error) {
            toastr.error(error.message, 'Error');
        }
    },
    app_branchUpdate: {
        onSuccess: function (formType, result) {
            $('#app_branchUpdateModal').modal('hide');
            toastr.success(App.Message.success, 'Success');
        },
        onError: function (formType, error) {
            toastr.error(error.message, 'Error');
        }
    }
});
