Router.route('app/user', function () {

    this.render('app_user');

}, {
    name: 'app.user',
    header: {title: 'user', sub: '', icon: 'users'},
    waitOn: function () {
        return Meteor.subscribe('appUser');
    }
});
