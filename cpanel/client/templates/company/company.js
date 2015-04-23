/**
 * Index
 */
Template.cpanel_company.onRendered(function () {
    // Create new  alertify
    createNewAlertify("company");
});

Template.cpanel_company.events({
    'click .update': function (e, t) {
        var data = Cpanel.Collection.Company.findOne();

        alertify.company(renderTemplate(Template.cpanel_companyUpdate, data))
            .set({
                title: fa("pencil", "Company")
            })
            .maximize();
    }
});

/**
 * Hook
 */
AutoForm.hooks({
    cpanel_companyUpdate: {
        onSuccess: function (formType, result) {
            alertify.company().close();
            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    }
});
