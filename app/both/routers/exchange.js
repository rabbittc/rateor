Router.route('app/exchange', function () {

    this.render('app_exchange');

}, {
    name: 'app.exchange',
    header: {title: 'exchange', icon: 'exchange'},
    title: "Exchange",
    waitOn: function () {
        return Meteor.subscribe('appExchange');
    }
});
