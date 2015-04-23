Meteor.startup(function () {
    if (Cpanel.Collection.Branch.find().count() == 0) {
        Cpanel.Collection.Branch.insert(
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