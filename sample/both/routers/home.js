Router.route('sample/home', function() {
    this.render('sample_home');
}, {
    name: 'sample.home',
    header: {
        title: 'home',
        sub: '',
        icon: 'home'
    },
    title: "Home"
});