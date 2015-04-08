/**
 * Collection
 *
 * @type {Mongo.Collection}
 */
Sample.Collection.Address = new Mongo.Collection("sample_address");

/**
 * Schema
 *
 * @type {SimpleSchema}
 */
Sample.Schema.Address = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        unique: true,
        max: 200
    }
});

/**
 * Attach schema
 */
Sample.Collection.Address.attachSchema(Sample.Schema.Address);
