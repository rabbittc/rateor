/**
 * Collection
 */
App.Collection.Currency = new Mongo.Collection("app_currency");

/**
 * Schema
 */
App.Schema.Currency = new SimpleSchema({
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
App.Collection.Currency.attachSchema(App.Schema.Currency);
