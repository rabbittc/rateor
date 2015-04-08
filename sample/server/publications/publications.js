/**
 * Customer
 */
Meteor.publish('sampleCustomer', function () {
    if (this.userId) {
        return Sample.Collection.Customer.find();
    }
});

/**
 * Address
 */
Meteor.publish('sampleAddress', function () {
    if (this.userId) {
        return Sample.Collection.Address.find();
    }
});
