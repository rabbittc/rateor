Meteor.startup(function () {
    if (Cpanel.Collection.Setting.find().count() == 0) {
        Cpanel.Collection.Setting.insert(
            {
                baseCurrency: 'USD'
            }
        )
    }
});