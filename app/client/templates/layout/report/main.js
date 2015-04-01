Template.layoutReport.helpers({
    company: function () {
        return App.Collection.Company.findOne();
    }
});
