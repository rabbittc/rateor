Router.route('app/company', function () {

    this.render('app_company', {
        data: function () {
            return App.Collection.Company.findOne();
        }
    });

}, {
    name: 'app.company',
    title: 'company',
    parent: 'app.home',
    pageHeader: {title: 'company', icon: 'briefcase'}
});