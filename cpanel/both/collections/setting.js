/**
 * Collection
 */
Cpanel.Collection.Setting = new Mongo.Collection("cpanel_setting");

/**
 * Schema
 */
Cpanel.Schema.Setting = new SimpleSchema({
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
