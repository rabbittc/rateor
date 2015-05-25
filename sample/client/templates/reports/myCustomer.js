Template.sample_myCustomerReport.onRendered(function () {
    var name = $('[name="date"]');
    DateTimePicker.dateRange(name);
});

Template.sample_myCustomerReportGen.onCreated(function () {
});

Template.sample_myCustomerReportGen.helpers({
    title: function () {
        var self = this;

        return {
            company: function () {
                return Cpanel.Collection.Company.findOne();
            },
            branch: function () {
                return Cpanel.Collection.Branch.findOne();
            },
            reportName: 'My Customer Report',
            date: self.date
        };
    },
    header: function () {
        var self = this;

        return [
            {col1: 'Staff: Rabbit', col2: 'Customer: ' + self.name, col3: 'Filter: ....'},
            {col1: 'Gender: ', col2: 'Filter: ...........'}
        ];
    },
    content: function () {
        var self = this;

        var selector = {};

        if (!_.isEmpty(self.name)) {
            selector.name = {$regex: self.name};
        }

        var content = Sample.Collection.Customer.find(selector);

        if (content.count() > 0) {
            return content;
        } else {
            return false;
        }
    }
});