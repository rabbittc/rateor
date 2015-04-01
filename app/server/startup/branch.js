Meteor.startup(function () {
    if (App.Collection.Branch.find().count() == 0) {
        App.Collection.Branch.insert(
            {
                _id: '001',
                khName: 'បាត់ដំបង',
                khShortName: 'បប',
                enName: 'Battambang',
                enShortName: 'BTB',
                khAddress: 'បាត់ដំបង',
                enAddress: 'Battambang',
                telephone: '053 50 66 777',
                email: ''
            }
        );
    }
});