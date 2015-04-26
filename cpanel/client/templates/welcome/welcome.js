/**
 * Welcome
 */
Template.cpanel_welcome.helpers({
    role: function () {
        var role = Roles.getGroupsForUser(Meteor.userId());
        if (role.length > 0) {
            return true;
        }

        return false;
    }
});

/**
 * Hook
 */
AutoForm.hooks({
    cpanel_welcomeConfig: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            this.event.preventDefault();

            Session.setAuth('currentModule', insertDoc.module);
            Session.setAuth('currentBranch', insertDoc.branch);
            Router.go(s.decapitalize(insertDoc.module) + '.home');

            this.done();
        }
    }
});
