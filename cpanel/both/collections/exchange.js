/**
 * Collection
 */
Cpanel.Collection.Exchange = new Mongo.Collection("cpanel_exchange");

/**
 * Schema
 */
Cpanel.Schema.Exchange = new SimpleSchema({
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
                return Cpanel.List.currency();
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
Cpanel.Collection.Exchange.attachSchema(Cpanel.Schema.Exchange);
