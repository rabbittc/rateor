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
            data: "profile.branch",
            title: "Branch",
            render: function (val, type, doc) {
                if (typeof val !== 'undefined') {
                    return val;
                }
                return null;
            }
        },
        {
            data: "roles",
            title: "Role",
            render: function (val, type, doc) {
                if (typeof val !== undefined) {
                    return JSON.stringify(val);
                    //return Roles.getGroupsForUser(doc._id).join(' | ');
                }
                return null;
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