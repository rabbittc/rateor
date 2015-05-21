Template.layoutHeader.helpers({
    navbar: function () {
        var module = Session.get('currentModule');
        var branch = Session.get('currentBranch');
        if (!Meteor.userId() || _.isUndefined(module) || _.isUndefined(branch)) {
            return {show: false};
        }

        return {show: true, template: s.decapitalize(module) + '_navbar'};
    },
    currentBranch: function () {
        var module = Session.get('currentModule');
        var branch = Session.get('currentBranch');
        if (_.isUndefined(module) || _.isUndefined(branch)) {
            return {show: false};
        }

        var titleBranch = Cpanel.Collection.Branch.findOne(branch);
        var title = branch + ' : ' + titleBranch.enShortName;
        return {show: true, title: title};
    }
});
