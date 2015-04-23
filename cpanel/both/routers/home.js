Router.route('cpanel/home', function () {

    this.render('cpanel_home');

}, {
    name: 'cpanel.home',
    header: {title: 'home', sub: '', icon: 'home'},
    title: "Home"
});
