Router.route('cpanel/eventReport', function () {
    this.render('cpanel_eventReport');
}, {
    name: 'capnel.eventReport',
    header: {title: 'Event Report', sub: '', icon: 'file-text-o'},
    title: "Event Report"
});

Router.route('cpanel/eventReportGen', function () {
    // Config layout
    this.layout('reportLayout', {
        // Page size: a4, a5, mini | Orientation: portrait, landscape
        data: {
            pageSize: 'a4',
            orientation: 'portrait'
        }
    });

    // Generate
    var q = this.params.query;
    this.render('cpanel_eventReportGen', {
        data: function () {
            return q;
        }
    });
});
