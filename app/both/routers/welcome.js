Router.route('/', function () {

    this.render('app_welcome');

}, {
    name: 'app.welcome',
    header: {title: 'welcome', sub: '', icon: 'dashboard'}
});
