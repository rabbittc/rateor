/**
 * List
 */
App.List = {
    currency: function () {
        var list = [];
        var currency = App.Collection.Currency.find();
        currency.forEach(function (obj) {
            list.push({label: obj.symbol, value: obj.symbol})
        });
        return list;
    },
    role: function () {
        var list = _.map(Module, function (val, key) {
            var options = [];
            _.each(Module[key].roles, function (roleVal) {
                if (!(key == 'App' && roleVal == 'super')) {
                    options.push({label: roleVal, value: key + ':' + roleVal});
                }
            });

            return {optgroup: key, options: options};
        });

        return list;
    },
    roleForUser: function (userId) {
        var userId = typeof userId === 'undefined' ? Meteor.userId() : userId;

        var list = Roles.getGroupsForUser(userId)
            .map(function (group) {
                var label = Module[group].name;
                return {label: label, value: group};
            });
        return list;
    },
    branch: function () {
        var list = App.Collection.Branch.find()
            .map(function (obj) {
                return {label: obj.enName, value: obj._id};
            });
        return list;
    },
    branchForUser: function (userId) {
        var userId = typeof userId === 'undefined' ? Meteor.userId() : userId;

        var list = Meteor.users.findOne(userId).profile.branch
            .map(function (branch) {
                var label = App.Collection.Branch.findOne(branch).enName;
                return {label: label, value: branch};
            });

        return list;
    }
};
