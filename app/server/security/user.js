Meteor.methods({
    userInsert: function (doc) {
        check(doc, Object);
        if (!Roles.userIsInRole(this.userId, ['super', 'admin'], 'App')) {
            throw new Meteor.Error("403", "Access denied");
        }

        // Add account
        var id = Accounts.createUser({
            username: doc.username,
            email: doc.email,
            password: doc.password,
            profile: doc.profile
        });

        // Add roles
        _.each(doc.role, function (element) {
            var roleWords = s.words(element, ':');

            Roles.addUsersToRoles(id,
                roleWords[1],
                roleWords[0]);
        });

        return id;
    },
    userUpdate: function (id, doc) {
        check(id, String);
        check(doc, Object);

        if (!Roles.userIsInRole(this.userId, ['super', 'admin'], 'App')) {
            throw new Meteor.Error("403", "Access denied");
        }

        // Update account
        Meteor.users.update(id, {
            $set: {
                username: doc.username,
                emails: [
                    {
                        address: doc.email,
                        verified: false
                    }
                ],
                profile: doc.profile,
                roles: {}
            }
        });

        // Update password
        if (doc.password != 'the same') {
            Accounts.setPassword(id, doc.password);
        }

        // Update roles
        _.each(doc.role, function (element) {
            var roleWords = s.words(element, ':');

            Roles.addUsersToRoles(id,
                roleWords[1],
                roleWords[0]);
        });

        return true;
    },
    userRemove: function (id) {
        check(id, String);

        if (!Roles.userIsInRole(this.userId, ['super', 'admin'], 'App')) {
            throw new Meteor.Error("403", "Access denied");
        }

        // Check no super
        var user = Meteor.users.findOne(id);
        if (user.username == 'super') {
            throw new Meteor.Error("403", "Access denied");
        }

        Meteor.users.remove(id);
        return id;
    }
});