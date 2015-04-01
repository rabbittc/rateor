Router.route('app/exchange', function () {

    this.render('app_exchange');

}, {
    name: 'app.exchange',
    title: 'exchange',
    parent: 'app.home',
    pageHeader: {title: 'exchange', icon: 'exchange'},
    waitOn: function () {
        return Meteor.subscribe('app_exchange');
    }
});
