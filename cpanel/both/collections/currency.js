/**
 * Collection
 */
Cpanel.Collection.Currency = new Mongo.Collection("cpanel_currency");

/**
 * Schema
 */
Cpanel.Schema.Currency = new SimpleSchema({
    _id: {
        type: String,
        label: "ID"
    },
    name: {
        type: String,
        label: "Name",
        max: 100
    },
    symbol: {
        type: String,
        label: "Symbol",
        max: 100
    }
});

/**
 * Attach schema
 */
Cpanel.Collection.Currency.attachSchema(Cpanel.Schema.Currency);
