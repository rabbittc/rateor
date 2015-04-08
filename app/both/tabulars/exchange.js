App.TabularTable.Exchange = new Tabular.Table({
    name: "appExchangeList",
    collection: App.Collection.Exchange,
    columns: [
        {data: "exDateTime", title: "Exchange Date"},
        {data: "from", title: "From Currency"},
        {data: "to", title: "To Currency"},
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