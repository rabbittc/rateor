Router.route('cpanel/branch', function () {

    this.render('cpanel_branch');

}, {
    name: 'cpanel.branch',
    header: {title: 'branch', sub: '', icon: 'sitemap'},
    title: "Branch",
    waitOn: function () {
        return Meteor.subscribe('cpanelBranch');
    }
});
