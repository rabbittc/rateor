Cpanel.TabularTable.Exchange = new Tabular.Table({
    name: "cpanelExchangeList",
    collection: Cpanel.Collection.Exchange,
    columns: [
        {data: "dateTime", title: "Date"},
        {
            data: "base",
            title: "Base Currency",
            render: function (val, type, doc) {
                var currency = Cpanel.Collection.Currency.findOne({_id: val});
                return currency._id;
            }
        },
        {
            data: "rates",
            title: "Rates",
            render: function (val, type, doc) {
                return JSON.stringify(val);
            }
        },
        {
            title: '<i class="fa fa-bars"></i>',
            tmpl: Meteor.isClient && Template.cpanel_exchangeAction
        }
    ],
    order: [['0', 'desc']],
    columnDefs: [
        {"width": "12px", "targets": 3}
    ]
});