Router.route('sample/myCustomerReport', function () {

    //var role = Roles.userIsInRole(Meteor.userId(), ['reporter'], 'Sample');
    //
    //if (role) {
    this.render('sample_myCustomerReport');
    //} else {
    //    this.redirect('sample.home');
    //    toastr.error('Access denied [403]', 'Error');
    //}

}, {
    name: 'sample.myCustomerReport',
    header: {title: 'my customer', sub: '', icon: 'file-text-o'},
    title: "My Customer"
});

Router.route('sample/myCustomerReportGen', function () {

    var q = this.params.query;

    // Config layout
    this.layout('layoutReport', {
        // Page setup: Size: a4, a5, mini | Orientation: portrait, landscape
        // Sign footer: boolean (default is false)
        data: {
            pageSetup: {
                size: 'a4',
                orientation: 'portrait'
            },
            sign: true
        }
    });

    // Generate
    this.render('sample_myCustomerReportGen', {
        data: function () {

            var selector = {name: {$regex: q.name}};
            //if (q.name !== null) {
            //    selector["name"] = {$text: q.name};
            //}
            //
            return {
                title: function () {
                    return {
                        company: function () {
                            return Cpanel.Collection.Setting.findOne().company;
                        },
                        branch: function () {
                            return Cpanel.Collection.Branch.findOne();
                        },
                        reportName: 'My Customer Report',
                        date: q.date
                    };
                },
                header: function () {
                    return [
                        {col1: 'Staff: Rabbit', col2: 'Customer: like ' + q.name, col3: 'Filter: ....'},
                        {col1: 'Gender: ...', col2: 'Filter: ...........'}
                    ];
                },
                content: function () {
                    return Sample.Collection.Customer.find(selector);
                },
                footer: 'footer'
            }
        }

    });

});
