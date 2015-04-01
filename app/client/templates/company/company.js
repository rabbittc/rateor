/**
 * List
 */
Template.app_company.events({
    'click .update': function (e, t) {
        var data = App.Collection.Company.findOne();

        ModalTemplate.show('app_companyUpdate', data);
    }
});

/**
 * Hook
 */
AutoForm.hooks({
    app_companyUpdate: {
        onSuccess: function (formType, result) {
            $('#app_companyUpdateModal').modal('hide');
            toastr.success(App.Message.success, 'Success');
        },
        onError: function (formType, error) {
            toastr.error(error.message, 'Error');
        }
    }
});
