Meteor.startup(function () {
    if (App.Collection.Currency.find().count() == 0) {
        App.Collection.Currency.insert(
            {
                _id: '1',
                name: 'Khmer Riel',
                symbol: 'KHR'
            }
        );
        App.Collection.Currency.insert(
            {
                _id: '2',
                name: 'US Dollar',
                symbol: 'USD'
            }
        )
    }
});