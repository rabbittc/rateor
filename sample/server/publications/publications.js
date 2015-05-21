/**
 * Customer
 */
Meteor.publish('sample_customer', function () {
    if (this.userId) {
        return Sample.Collection.Customer.find();
    }
});

/**
 * Address
 */
Meteor.publish('sample_address', function () {
    if (this.userId) {
        return Sample.Collection.Address.find();
    }
});
