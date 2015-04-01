/**
 * Schema
 */
Sample.Schema.MyReport = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 50
    },
    date: {
        type: String,
        label: "Date"
    }
});