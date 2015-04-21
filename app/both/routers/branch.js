Router.route('app/branch', function () {

    this.render('app_branch');

}, {
    name: 'app.branch',
    header: {title: 'branch', sub: '', icon: 'sitemap'},
    title: "Branch",
    waitOn: function () {
        return Meteor.subscribe('appBranch');
    }
});
