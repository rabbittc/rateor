Template.layout.helpers({
    appName: function () {
        var group = Session.get('currentModule');
        if (Meteor.userId() && typeof group !== 'undefined' && typeof Session.get('currentBranch') !== 'undefined') {
            var groupWord = s.words(group, ':');
            return Module[groupWord[0]].name;
        }
        return 'Rabbit Project';
    },
    notFound: function () {
        return Session.get('notFound');
    },
    pageHeader: function () {
        var pageHeader = Router.current().route.options.pageHeader;

        return {
            title: s.humanize(pageHeader.title),
            sub: s.humanize(pageHeader.sub),
            icon: pageHeader.icon
        };
    }
});

Template.layoutHeader.onRendered(function () {
    Meteor.setInterval(serverClock, 1000);
});

/*
 Clock function
 */
function serverClock() {
    Meteor.call('clock', function (error, result) {
        $('#clock').html('<i class="fa fa-calendar-o"></i> ' + moment(result, 'YYYY-MM-DD H:mm:ss').format('ddd D, MMM YYYY H:mm:ss'));
    });
}

