Router.route('app/home', function () {

    this.render('app_home');

}, {
    name: 'app.home',
    title: 'home',
    pageHeader: {title: 'home', sub: '', icon: 'home'}
});
