App.TabularTable.Branch = new Tabular.Table({
    name: "appBranchList",
    collection: App.Collection.Branch,
    columns: [
        {data: "_id", title: "ID"},
        {data: "khName", title: "Kh Name"},
        {data: "khShortName", title: "Kh Short Name"},
        {data: "enName", title: "En Name"},
        {data: "enShortName", title: "En Short Name"},
        {data: "khAddress", title: "Kh Address"},
        {data: "enAddress", title: "En Address"},
        {data: "telephone", title: "Telephone"},
        {data: "email", title: "Email"},
        {
            title: '<i class="fa fa-bars"></i>',
            tmpl: Meteor.isClient && Template.app_branchAction
        }
    ],
    order: [['0', 'desc']],
    columnDefs: [
        {"width": "12px", "targets": 9}
    ]
});