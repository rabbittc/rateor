Router.route('app/branch', function () {

    this.render('app_branch');

}, {
    name: 'app.branch',
    title: 'branch',
    parent: 'app.home',
    pageHeader: {title: 'branch', sub: '', icon: 'sitemap'},
    waitOn: function () {
        return Meteor.subscribe('app_branch');
    }
});
