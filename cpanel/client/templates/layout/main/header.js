/**
 * Helper
 */
Template.headerLayout.helpers({
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

        var getBranch = Cpanel.Collection.Branch.findOne({_id: branch});
        var title = branch + ' : ' + getBranch.enShortName;
        return {show: true, title: title};
    }
});

/**
 * Server clock
 */
Template.headerLayout.onRendered(function () {
    Meteor.setInterval(serverClock, 1000);
});

/* Clock function */
function serverClock() {
    Meteor.call('currentDate', function (error, result) {
        $('#clock').html('<i class="fa fa-calendar"></i> ' + moment(result, 'YYYY-MM-DD H:mm:ss').format('ddd D, MMM YYYY H:mm:ss'));
    });
}
