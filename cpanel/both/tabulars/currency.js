Cpanel.TabularTable.Currency = new Tabular.Table({
    name: "cpanelCurrencyList",
    collection: Cpanel.Collection.Currency,
    columns: [
        {data: "_id", title: "ID"},
        {data: "name", title: "Name"},
        {data: "symbol", title: "Symbol"},
        {
            title: '<i class="fa fa-bars"></i>',
            tmpl: Meteor.isClient && Template.cpanel_currencyAction
        }
    ]
});