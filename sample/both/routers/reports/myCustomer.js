Router.route('sample/myCustomerReport', function () {
    this.render('sample_myCustomerReport');
}, {
    name: 'sample.myCustomerReport',
    header: {title: 'my customer', sub: '', icon: 'file-text-o'},
    title: "My Customer"
});

Router.route('sample/myCustomerReportGen', function () {
    // Config layout
    this.layout('reportLayout', {
        // Page size: a4, a5, mini | Orientation: portrait, landscape
        data: {
            pageSize: 'a4',
            orientation: 'portrait'
        }
    });

    // Render template
    var q = this.params.query;
    this.render('sample_myCustomerReportGen', {
        data: function () {
            return q;
        }
    });
});
