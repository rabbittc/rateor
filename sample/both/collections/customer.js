/**
 * Collection
 *
 * @type {Mongo.Collection}
 */
Sample.Collection.Customer = new Mongo.Collection("sample_customer");

/**
 * Schema
 *
 * @type {SimpleSchema}
 */
Sample.Schema.Customer = new SimpleSchema({
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
            type: "select2",
            options: function () {
                return Sample.List.gender();
            }
        }
    },
    dob: {
        type: String,
        label: "Date of Birth"
    },
    address: {
        type: String,
        label: "Address",
        autoform: {
            type: "select2",
            options: function () {
                return Sample.List.address();
            }
        }
    },
    telephone: {
        type: String,
        label: "Telephone",
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
Sample.Collection.Customer.attachSchema(Sample.Schema.Customer);
