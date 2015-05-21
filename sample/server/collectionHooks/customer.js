/**
 * Customer
 */
Sample.Collection.Customer.before.insert(function (userId, doc) {
    Events.trackInsert({
        description: doc
    });
});

Sample.Collection.Customer.before.update(function (userId, doc, fieldNames, modifier, options) {
    Events.trackUpdate({
        description: modifier
    });
});

Sample.Collection.Customer.before.remove(function (userId, doc) {
    Events.trackRemove({
        description: doc
    });
});