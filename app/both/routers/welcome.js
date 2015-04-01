Router.route('/', function () {

    this.render('app_welcome');

}, {
    name: 'app.welcome',
    title: 'welcome',
    pageHeader: {title: 'welcome', sub: '', icon: 'dashboard'}
});
