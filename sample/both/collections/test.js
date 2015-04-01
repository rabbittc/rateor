/**
 * Collection
 *
 * @type {Mongo.Collection}
 */
Sample.Collection.Test = new Mongo.Collection("sample_test");

/**
 * Schema
 *
 * @type {SimpleSchema}
 */
Sample.Schema.Test = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        unique: true,
        max: 200
    },
    gender: {
        type: String,
        label: "Gender",
        autoform: {
            type: "select2"
            //    options: function () {
            //        return Sample.List.gender();
            //    }
        }
    },
    address: {
        type: String,
        label: "Address"
    },
    telephone: {
        type: String,
        label: "Telephone"
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
Sample.Collection.Test.attachSchema(Sample.Schema.Test);
