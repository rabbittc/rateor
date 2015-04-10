/**
 * Create new custom  alertify
 */
createCustomAlert("company");

/**
 * Index
 */
Template.app_company.events({
    'click .update': function (e, t) {
        var data = App.Collection.Company.findOne();

        alertify.customCompany(renderTemplate(Template.app_companyUpdate, data))
            .set({
                title: fa.pencil("Company")
            })
            .maximize();
    }
});

/**
 * Hook
 */
AutoForm.hooks({
    app_companyUpdate: {
        onSuccess: function (formType, result) {
            alertify.customCompany().close();
            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    }
});
