App.TabularTable.Exchange = new Tabular.Table({
    name: "appExchangeList",
    collection: App.Collection.Exchange,
    columns: [
        {data: "exDate", title: "Date"},
        {
            data: "from",
            title: "From Currency",
            render: function (val, type, doc) {
                return App.Collection.Currency.findOne({_id: val}).symbol;
            }
        },
        {
            data: "to",
            title: "To Currency",
            render: function (val, type, doc) {
                return App.Collection.Currency.findOne({_id: val}).symbol;
            }
        },
        {data: "amount", title: "Amount"},
        {
            title: '<i class="fa fa-bars"></i>',
            tmpl: Meteor.isClient && Template.app_exchangeAction
        }
    ],
    order: [['0', 'desc']],
    columnDefs: [
        {"width": "12px", "targets": 4}
    ]
});