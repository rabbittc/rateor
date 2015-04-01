Meteor.methods({
    clock: function () {
        return moment().format('YYYY-MM-DD H:mm:ss');
    }
});