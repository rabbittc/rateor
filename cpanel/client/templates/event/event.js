Template.cpanel_eventReport.onRendered(function () {
    var name = $('[name="date"]');
    DateTimePicker.dateRange(name);
});

Template.cpanel_eventReportGen.helpers({
    title: function () {
        var self = this;

        return {
            company: function () {
                return Cpanel.Collection.Company.findOne();
            },
            reportName: 'Event Report',
            date: self.date
        };
    },
    header: function () {
        var self = this;
        var getUser = Meteor.users.findOne(self.user);

        return [
            {col1: 'User: ' + getUser.username, col2: 'Module: ' + self.module},
            {col1: 'Type: ' + self.type, col2: 'Branch: ' + self.branch}
        ];
    },
    content: function () {
        var self = this;
        var date = s.words(self.date, ' To ');
        var fDate = moment(date[0], 'YYYY-MM-DD').toDate();
        var tDate = moment(date[1], 'YYYY-MM-DD').add(1, 'days').toDate();

        var selector = {};
        selector.userId = self.user;
        selector.createdAt = {$gte: fDate, $lt: tDate};
        if (!_.isEmpty(self.type)) {
            selector.type = new RegExp(self.type);
        }
        if (!_.isEmpty(self.module)) {
            selector.module = new RegExp(self.module);
        }
        if (!_.isEmpty(self.branch)) {
            selector.branch = new RegExp(self.branch);
        }

        var content = [];
        Events.find(selector)
            .forEach(function (obj) {
                content.push({
                    date: moment(obj.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a"),
                    type: obj.type,
                    description: s.humanize(obj.description),
                    module: obj.module,
                    branch: obj.branch
                });
            });

        if (content.length > 0) {
            return content;
        } else {
            return false;
        }
    }
});