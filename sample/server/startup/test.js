Meteor.startup(function () {
    if (Sample.Collection.Test.find().count() == 0) {
        Sample.Collection.Test.insert(
            {
                _id: '001',
                name: 'Rabbit',
                gender: 'M',
                address: 'Battambang',
                telephone: '053 50 66 777',
                email: ''
            }
        );
    }
});