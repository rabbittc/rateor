Router.route('/', function () {

    this.render('cpanel_welcome');

}, {
    name: 'cpanel.welcome',
    header: {title: 'welcome', sub: '', icon: 'dashboard'},
    title: "Welcome"
});
