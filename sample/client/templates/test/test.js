/*
 Index
 */
Template.sample_test.events({
    'click .insert': function (e, t) {
        ModalTemplate.show('sample_testInsert');
    },
    'click .update': function (e, t) {
        var data = Sample.Collection.Test.findOne(this._id);

        ModalTemplate.show('sample_testUpdate', data);
    },
    'click .remove': function (e, t) {
        var id = this._id;
        bootbox.confirm("Are you sure to delete [" + id + "]?", function (result) {
            if (result) {
                // Relation exist
                //var relation = relationExist(
                //    [
                //        {collection: Sample.Collection.Book, selector: {testId: this._id}}
                //    ]
                //);

                //if (!relation) {
                    Sample.Collection.Test.remove(id, function (error) {
                        if (error) {
                            toastr.error(error.message, 'Error');
                        } else {
                            toastr.success(App.Message.success, 'Success');
                        }

                    });
                //}
            }
        });
    },
    'click .show': function (e, t) {
        bootbox.dialog({
            message: renderTemplate(Template.sample_testShow, this),
            title: "Test Info"
        });
    }
});

/**
 * Hook
 */
AutoForm.hooks({
    sample_testInsert: {
        before: {
            insert: function (doc) {
                doc._id = IDGenertor.gen(Sample.Collection.Test, '_id', 3);
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
    sample_testUpdate: {
        onSuccess: function (formType, result) {
            $('#sample_testUpdateModal').modal('hide');
            toastr.success(App.Message.success, 'Success');
        },
        onError: function (formType, error) {
            toastr.error(error.message, 'Error');
        }
    }
});
