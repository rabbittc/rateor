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

Template.cpanel_welcomeConfig.helpers({
    value: function () {
        var data = {
            module: Session.get('currentModule'),
            branch: Session.get('currentBranch')
        };
        return data;
    }
});

/**
 * Hook
 */
AutoForm.hooks({
    cpanel_welcomeConfig: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            this.event.preventDefault();

            // Set current session
            Session.setAuth('currentModule', insertDoc.module);
            Session.setAuth('currentBranch', insertDoc.branch);

            Router.go(s.decapitalize(insertDoc.module) + '.home');
            this.done();
        }
    }
});
