Meteor.startup(function () {
    if (Cpanel.Collection.Currency.find().count() == 0) {
        Cpanel.Collection.Currency.insert(
            {
                _id: '1',
                name: 'Khmer Riel',
                symbol: 'KHR'
            }
        );
        Cpanel.Collection.Currency.insert(
            {
                _id: '2',
                name: 'US Dollar',
                symbol: 'USD'
            }
        );
    }
});