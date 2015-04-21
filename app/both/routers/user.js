Router.route('app/user', function () {

    this.render('app_user');

}, {
    name: 'app.user',
    header: {title: 'user', sub: '', icon: 'users'},
    title: "User",
    waitOn: function () {
        return Meteor.subscribe('appUser');
    }
});
