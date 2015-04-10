/**
 * List
 */
App.List = {
    currency: function (selector) {
        var selector = _.isUndefined(selector) ? {} : selector;
        var list = [{label: "(Select One)", value: ""}];

        App.Collection.Currency.find(selector)
            .forEach(function (obj) {
                list.push({label: obj.symbol, value: obj._id})
            });

        return list;
    },
    role: function (selectOne) {
        var list = [];
        if (!_.isEqual(selectOne, false)) {
            list.push({label: "(Select One)", value: ""});
        }

        _.each(Module, function (val, key) {
            var options = [];
            _.each(Module[key].roles, function (roleVal) {
                if (!(key == 'App' && roleVal == 'super')) {
                    options.push({label: roleVal, value: key + ':' + roleVal});
                }
            });

            list.push({optgroup: key, options: options});
        });

        return list;
    },
    roleForUser: function (userId) {
        var userId = _.isUndefined(userId) ? Meteor.userId() : userId;
        var list = [{label: "(Select One)", value: ""}];

        Roles.getGroupsForUser(userId)
            .forEach(function (group) {
                var label = Module[group].name;
                list.push({label: label, value: group});
            });

        return list;
    },
    branch: function (selectOne) {
        var list = [];
        if (!_.isEqual(selectOne, false)) {
            list.push({label: "(Select One)", value: ""});
        }

        App.Collection.Branch.find()
            .forEach(function (obj) {
                list.push({label: obj.enName, value: obj._id});
            });

        return list;
    },
    branchForUser: function (userId) {
        var userId = _.isUndefined(userId) ? Meteor.userId() : userId;
        var list = [{label: "(Select One)", value: ""}];

        Meteor.users.findOne(userId).profile.branch
            .forEach(function (branch) {
                var label = App.Collection.Branch.findOne(branch).enName;
                list.push({label: label, value: branch});
            });

        return list;
    }
};
