Meteor.startup(function () {
    if (Cpanel.Collection.Currency.find().count() == 0) {
        var doc = [
            {_id: 'KHR', name: 'Cambodian Riel', symbol: '?'},
            {_id: 'USD', name: 'United States Dollar', symbol: '$'},
            {_id: 'THB', name: 'Thai Baht', symbol: 'B'}
        ];

        doc.forEach(function (obj) {
            Cpanel.Collection.Currency.insert(obj);
        });
    }
});