Router.route('sample/test', function () {

    this.render('sample_test');

}, {
    name: 'sample.test',
    title: 'test',
    parent: 'sample.home',
    pageHeader: {title: 'test', sub: '', icon: 'home'},
    waitOn: function () {
        return Meteor.subscribe('sample_test');
    }
});