/**
 * Welcome
 */
Template.app_welcome.helpers({
    role: function () {
        var role = Roles.getGroupsForUser(Meteor.userId());
        if (role.length > 0) {
            return true;
        }

        return false;
    }
});

/**
 * Config
 */
Template.app_welcomeConfig.helpers({});

/**
 * Hook
 */
AutoForm.hooks({
    app_welcomeConfig: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            this.event.preventDefault();

            Session.setAuth('currentModule', insertDoc.module);
            Session.setAuth('currentBranch', insertDoc.branch);
            Router.go(s.decapitalize(insertDoc.module) + '.home');

            this.done();
        }
    }
});
