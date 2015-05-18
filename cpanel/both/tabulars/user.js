Cpanel.TabularTable.User = new Tabular.Table({
    name: "cpanelUserList",
    collection: Meteor.users,
    selector: function (userId) {
        return {username: {$ne: 'super'}}
    },
    columns: [
        {data: "username", title: "User Name"},
        {
            data: "emails",
            title: "Emails",
            render: function (val) {
                if (typeof val !== 'undefined') {
                    return val[0].address;
                }
                return null;
            }
        },
        {data: "profile.fullName", title: "Full Name"},
        {
            data: "roles",
            title: "Roles",
            render: function (val, type, doc) {
                if (typeof val !== undefined) {
                    return JSON.stringify(val);
                }
                return null;
            }
        },
        {
            data: "rolesBranch",
            title: "Roles For Branch",
            render: function (val, type, doc) {
                if (typeof val !== 'undefined') {
                    return val;
                }
                return null;
            }
        },
        {
            data: "status.online", title: "Status",
            render: function (val, type, doc) {
                if (val == true) {
                    return '<span class="label label-success">online</span>';
                } else {
                    return '<span class="label label-default">offline</span>';
                }
            }
        },
        {
            title: '<i class="fa fa-bars"></i>',
            tmpl: Meteor.isClient && Template.cpanel_userAction
        }
    ],
    order: [['0', 'desc']],
    columnDefs: [
        {"width": "12px", "targets": 5}
    ]
});