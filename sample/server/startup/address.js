Meteor.startup(function () {
    if (Sample.Collection.Address.find().count() == 0) {
        Sample.Collection.Address.insert(
            {
                _id: '001',
                name: 'Battambang'
            }
        );
        Sample.Collection.Address.insert(
            {
                _id: '002',
                name: 'Siem Reap'
            }
        );
    }
});