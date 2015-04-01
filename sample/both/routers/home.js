Router.route('sample/home', function () {

    this.render('sample_home');

}, {
    name: 'sample.home',
    title: 'home',
    pageHeader: {title: 'home', sub: '', icon: 'home'}
});
