/**
 * Collection
 */
Cpanel.Collection.Setting = new Mongo.Collection("cpanel_setting");

/**
 * Schema
 */
var Company = new SimpleSchema({
    khName: {
        type: String,
        label: "Kh name",
        max: 200
    },
    khShortName: {
        type: String,
        label: "Kh short name",
        max: 200
    },
    enName: {
        type: String,
        label: "En name",
        max: 200
    },
    enShortName: {
        type: String,
        label: "En short name",
        max: 200
    },
    khAddress: {
        type: String,
        label: "Kh address",
        max: 500
    },
    enAddress: {
        type: String,
        label: "En address",
        max: 500
    },
    telephone: {
        type: String,
        label: "Telephone",
        max: 100
    },
    email: {
        type: String,
        label: "Email",
        regEx: SimpleSchema.RegEx.Email,
        optional: true
    },
    website: {
        type: String,
        label: "Website",
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    }
});

Cpanel.Schema.Setting = new SimpleSchema({
    company: {
        type: Company
    },
    baseCurrency: {
        type: String,
        label: "Base currency",
        autoform: {
            type: "select2",
            options: function () {
                return Cpanel.List.currency();
            }
        }
    }
});

/**
 * Attach schema
 */
Cpanel.Collection.Setting.attachSchema(Cpanel.Schema.Setting);
