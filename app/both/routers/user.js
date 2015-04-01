Router.route('app/user', function () {

    this.render('app_user');

}, {
    name: 'app.user',
    title: 'user',
    parent: 'app.home',
    pageHeader: {title: 'user', sub: '', icon: 'users'},
    waitOn: function () {
        return Meteor.subscribe('app_user');
    }
});
