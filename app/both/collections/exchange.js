/**
 * Collection
 */
App.Collection.Exchange = new Mongo.Collection("app_exchange");

/**
 * Schema
 */
App.Schema.Exchange = new SimpleSchema({
    exDate: {
        type: String,
        label: "Date",
        //unique: true,
        defaultValue: function () {
            var currentDate = moment(ReactiveMethod.call("currentDate"), 'YYYY-MM-DD H:mm:ss').format('YYYY-MM-DD');

            return currentDate;
        }
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
            type: "select2"
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
