/**
 * Hook
 */
AutoForm.hooks({
    app_company: {
        onSuccess: function (formType, result) {
            toastr.success(App.Message.success, 'Success');
        },
        onError: function (formType, error) {
            toastr.error(error.message, 'Error');
        }
    }
});
