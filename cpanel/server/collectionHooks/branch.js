/**
 * Customer
 */
Cpanel.Collection.Branch.after.insert(function (userId, doc) {
    Events.trackInsert({
        description: doc
    });
});

Cpanel.Collection.Branch.after.update(function (userId, doc, fieldNames, modifier, options) {
    Events.trackUpdate({
        description: modifier
    });
});

Cpanel.Collection.Branch.after.remove(function (userId, doc) {
    Events.trackRemove({
        description: doc
    });
});