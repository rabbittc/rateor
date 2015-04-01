/**
 * Collection
 */
App.Collection.Exchange = new Mongo.Collection("app_exchange");

/**
 * Schema
 */
App.Schema.Exchange = new SimpleSchema({
    exDateTime: {
        type: String,
        label: "Exchange date",
        unique: true
    },
    from: {
        type: String,
        label: "From currency",
        autoform: {
            type: "select2",
            options: function () {
                return App.List.currency();
            }
        }
    },
    to: {
        type: String,
        label: "To currency",
        autoform: {
            type: "select2",
            options: function () {
                return App.List.currency();
            }
        }
    },
    amount: {
        type: Number,
        label: "Amount",
        decimal: true
    }
});

/**
 * Attach schema
 */
App.Collection.Exchange.attachSchema(App.Schema.Exchange);
