Router.route('cpanel/company', function () {

    this.render('cpanel_company', {
        data: function () {
            return Cpanel.Collection.Company.findOne();
        }
    });

}, {
    name: 'cpanel.company',
    header: {title: 'company', icon: 'briefcase'},
    title: "Company"
});