Router.route('cpanel/exchange', function () {

    this.render('cpanel_exchange');

}, {
    name: 'cpanel.exchange',
    header: {title: 'exchange', icon: 'exchange'},
    title: "Exchange",
    waitOn: function () {
        return Meteor.subscribe('cpanelExchange');
    }
});
