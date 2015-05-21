/**
 * Layout
 */
Template.layout.helpers({
    appName: function () {
        var module = Session.get('currentModule');
        var branch = Session.get('currentBranch');
        if (Meteor.userId() && !_.isUndefined(module) && !_.isUndefined(branch)) {
            var moduleWord = s.words(module, ':');
            return Module[moduleWord[0]].name;
        }
        return 'Rabbit Project';
    },
    notFound: function () {
        return Session.get('notFound');
    },
    header: function () {
        var header = {
            title: null,
            sub: null,
            icon: null
        };
        var getHeader = Router.current().route.options.header;
        if (_.isUndefined(getHeader)) {
            return header;
        }
        header.title = s.humanize(getHeader.title);
        header.sub = s.humanize(getHeader.sub);
        header.icon = getHeader.icon;
        return header;
    }
});

Template.layout.events({
    'click .navbar-brand': function () {
        var module = Session.get('currentModule');
        if (!_.isUndefined(module)) {
            var info = Module[module];
            alertify.alert(info.summary)
                .set({
                    title: info.name + ' ' + info.version
                });
        }
    }
});

/**
 * Layout header
 */
Template.layoutHeader.onRendered(function () {
    Meteor.setInterval(serverClock, 1000);
});

/* Clock function */
function serverClock() {
    Meteor.call('currentDate', function (error, result) {
        $('#clock').html('<i class="fa fa-calendar"></i> ' + moment(result, 'YYYY-MM-DD H:mm:ss').format('ddd D, MMM YYYY H:mm:ss'));
    });
}

