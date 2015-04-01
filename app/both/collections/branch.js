/**
 * Collection
 */
App.Collection.Branch = new Mongo.Collection("app_branch");

/**
 * Schema
 */
App.Schema.Branch = new SimpleSchema({
    khName: {
        type: String,
        label: function () {
            return 'Kh Name';
            //return i18n.get('sample.hello');
        },
        //unique: true,
        max: 200
    },
    khShortName: {
        type: String,
        label: "Kh Short Name",
        //unique: true,
        max: 200
    },
    enName: {
        type: String,
        label: "En Name",
        //unique: true,
        max: 200
    },
    enShortName: {
        type: String,
        label: "En Short Name",
        //unique: true,
        max: 200
    },
    khAddress: {
        type: String,
        label: "Kh Address"
    },
    enAddress: {
        type: String,
        label: "En Address"
    },
    telephone: {
        type: String,
        label: "Telephone",
        max: 100,
        optional: true
    },
    email: {
        type: String,
        label: "Email",
        regEx: SimpleSchema.RegEx.Email,
        optional: true
    }
});

/**
 * Attach schema
 */
App.Collection.Branch.attachSchema(App.Schema.Branch);
