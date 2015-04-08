Router.route('app/company', function () {

    this.render('app_company', {
        data: function () {
            return App.Collection.Company.findOne();
        }
    });

}, {
    name: 'app.company',
    header: {title: 'company', icon: 'briefcase'}
});