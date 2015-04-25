Meteor.startup(function () {
    if (Cpanel.Collection.Setting.find().count() == 0) {
        Cpanel.Collection.Setting.insert(
            {
                company: {
                    khName: 'មជ្ឈមណ្ឌលបណ្តុះបណ្តាល រ៉ាប៊ីត',
                    khShortName: 'មបរ',
                    enName: 'Rabbit Training Center',
                    enShortName: 'RTC',
                    khAddress: 'បាត់ដំបង',
                    enAddress: 'Battambang',
                    telephone: '053 50 66 777',
                    email: '',
                    website: ''
                },
                baseCurrency: 'USD'
            }
        )
    }
});