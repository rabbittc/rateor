Router.route('cpanel/user', function () {

    this.render('cpanel_user');

}, {
    name: 'cpanel.user',
    header: {title: 'user', sub: '', icon: 'users'},
    title: "User",
    waitOn: function () {
        return Meteor.subscribe('cpanel_user');
    }
});
