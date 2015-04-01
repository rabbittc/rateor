Router.route('sample/my_report_name/rpt', function () {

    //var role = Roles.userIsInRole(Meteor.userId(), ['reporter'], 'Sample');
    //
    //if (role) {
        this.render('sample_myReportName_rpt');
    //} else {
    //    this.redirect('sample.home');
    //    toastr.error('Access denied [403]', 'Error');
    //}

}, {
    name: 'sample.myReportName.rpt',
    title: 'my report name',
    parent: 'sample.home',
    pageHeader: {title: 'my report name', sub: '', icon: 'file-text-o'}
});

Router.route('sample/my_report_name/gen', function () {

    var q = this.params.query;

    // Config layout
    this.layout('layoutReport', {
        // Page setup: Size: a4, a5 | Orientation: portrait, landscape
        // Report title: office, report name and date
        data: {
            pageSetup: {
                size: 'a4',
                orientation: 'portrait'
            },
            reportTitle: {
                branchOffice: 'Battambang',
                reportName: 'My Report Name',
                date: q.date
            }
        }
    });

    // Header
    this.render('sample_myReportName_rptHeader', {
        to: 'layoutReportHeader',
        data: function () {
            return [
                {col1: 'Staff: Rabbit', col2: 'Date of Birth: 2015-02-01', col3: 'Filter: ....'},
                {col1: 'Gender: Male', col2: 'Filter: ...........'}
            ]
        }
    });

    // Content
    this.render('sample_myReportName_rptContent', {
        data: function () {
            var selector = {};
            //if (q.name !== null) {
            //    selector.name = {$text: q.name};
            //}
            return Sample.Collection.Test.find(selector);
        }
    });

    // Footer
    this.render('sample_myReportName_rptFooter', {
        to: 'layoutReportFooter',
        data: function () {
            return 'footer'
        }
    });

});
