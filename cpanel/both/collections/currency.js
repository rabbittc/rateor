/**
 * Collection
 */
Cpanel.Collection.Currency = new Mongo.Collection("cpanel_currency");

/**
 * Schema
 */
Cpanel.Schema.Currency = new SimpleSchema({
    code: {
        type: String,
        label: "Code",
        unique: true
    },
    name: {
        type: String,
        label: "Name",
        max: 100,
        unique: true
    },
    symbol: {
        type: String,
        label: "Symbol",
        max: 100,
        unique: true
    }
});

/**
 * Attach schema
 */
Cpanel.Collection.Currency.attachSchema(Cpanel.Schema.Currency);
