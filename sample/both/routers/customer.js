Router.route('sample/customer', function () {

    this.render('sample_customer');

}, {
    name: 'sample.customer',
    header: {title: 'customer', sub: '', icon: 'user-plus'},
    waitOn: function () {
        return Meteor.subscribe('sampleCustomer');
    }
});