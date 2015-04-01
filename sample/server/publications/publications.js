/*
 Test
 */
Meteor.publish('sample_test', function () {
    if (this.userId) {
        return Sample.Collection.Test.find();
    }
});
