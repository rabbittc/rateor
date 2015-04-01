var hooksObject = {
    // Called when any submit operation succeeds
    onSuccess: function (formType, result) {
        Notifications.success('Success', 'Your transaction is successfully.');
    },

    // Called when any submit operation fails
    onError: function (formType, error) {
        Notifications.error('Error', error.message);
    }
};

//AutoForm.addHooks(null, hooksObject);