/**
 * Layout
 */
Template.mainLayout.helpers({
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

Template.mainLayout.events({
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
