Template.layoutHeader.helpers({
    navbar: function () {
        var module = Session.get('currentModule');
        if (Meteor.userId() && typeof module !== 'undefined' && typeof Session.get('currentBranch') !== 'undefined') {
            return {show: true, template: s.decapitalize(module) + '_navbar'};
        }
        return {show: false};
    },
    currentBranch: function () {
        var module = Session.get('currentModule');
        var branch = Session.get('currentBranch');
        var groupBranch = '';
        if (typeof module !== 'undefined' && typeof branch !== 'undefined') {
            var title = branch + ' : ' + Cpanel.Collection.Branch.findOne(branch).enShortName;
            return {show: true, title: title};
        }
        return {show: false};
    }
});
