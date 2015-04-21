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
            validate: function(value, errorFunction) {
                var fullName = s.trim(value);

                if (!fullName) {
                    errorFunction("Please write your full name");
                    return false;
                } else {
                    return true;
                }
            },
            saveToProfile: true
        }
    ]
});

