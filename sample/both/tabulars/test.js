Sample.TabularTable.Test = new Tabular.Table({
    name: "sample_TestList",
    collection: Sample.Collection.Test,
    columns: [
        {data: "_id", title: "ID"},
        {data: "name", title: "Name"},
        {data: "gender", title: "Gender"},
        {data: "address", title: "Address"},
        {data: "telephone", title: "Telephone"},
        {data: "email", title: "Email"},
        {
            title: '<i class="fa fa-bars"></i>',
            tmpl: Meteor.isClient && Template.sample_testAction
        }
    ],
    order: [['0', 'desc']],
    columnDefs: [
        {"width": "12px", "targets": 6}
    ]
});