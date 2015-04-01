Accounts.config({
    //forbidClientAccountCreation: true
});
Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL",

    //Custome
    requestPermissions: {},
    extraSignupFields: [
        {
            fieldName: 'fullName',
            fieldLabel: 'Full name',
            inputType: 'text',
            visible: true,
            saveToProfile: true
        }
    ]
});

