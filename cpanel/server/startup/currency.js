Meteor.startup(function () {
    if (Cpanel.Collection.Currency.find().count() == 0) {
        var doc = [
            {_id: '1', code: 'KHR', name: 'Cambodian Riel', symbol: 'R'},
            {_id: '2', code: 'USD', name: 'United States Dollar', symbol: '$'},
            {_id: '5', code: 'THB', name: 'Thai Baht', symbol: 'B'}
        ];

        _.each(doc, function (obj) {
            Cpanel.Collection.Currency.insert(obj);
        });
    }
});