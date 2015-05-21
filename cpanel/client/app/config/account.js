/**
 * Config UI
 */
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
            validate: function (value, errorFunction) {
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

/**
 * Events on login/out
 */
Accounts.onLogin(function () {
    Session.setPersistent('currentUserId', Meteor.userId());
    Events.track({
        type: 'Login'
    });
});

accountsUIBootstrap3.logoutCallback = function (error) {
    if (!error) {
        Events.track({
            type: 'Logout',
            userId: Session.get('currentUserId')
        });
        Session.clear();
    }
};
