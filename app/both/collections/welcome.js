/**
 * Schema
 */
App.Schema.WelcomeConfig = new SimpleSchema({
    module: {
        type: String,
        label: 'Module',
        autoform: {
            type: "select2",
            options: function () {
                return App.List.roleForUser();
            }
        }
    },
    branch: {
        type: String,
        label: 'Branch',
        autoform: {
            type: "select2",
            options: function () {
                return App.List.branchForUser();
            }
        }
    }
});
