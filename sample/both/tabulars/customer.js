Sample.TabularTable.Customer = new Tabular.Table({
    name: "sampleCustomerList",
    collection: Sample.Collection.Customer,
    columns: [
        {data: "_id", title: "ID"},
        {data: "name", title: "Name"},
        {data: "gender", title: "Gender"},
        {data: "dob", title: "Date of Birth"},
        {data: "address", title: "Address"},
        {data: "telephone", title: "Telephone"},
        {data: "email", title: "Email"},
        {
            title: '<i class="fa fa-bars"></i>',
            tmpl: Meteor.isClient && Template.sample_customerAction
        }
    ],
    order: [['0', 'desc']],
    columnDefs: [
        {"width": "12px", "targets": 7}
    ]
});