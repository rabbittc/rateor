/**
 * Create new custom  alertify
 */
createCustomAlert(["customer", "addressAddon"]);

/**
 * Index
 */
Template.sample_customer.events({
    'click .insert': function (e, t) {

        alertify.customCustomer(renderTemplate(Template.sample_customerInsert))
            .set({
                title: fa.plus("Customer")
            })
            .maximize();

    },
    'click .update': function (e, t) {

        var data = Sample.Collection.Customer.findOne(this._id);

        alertify.customCustomer(renderTemplate(Template.sample_customerUpdate, data))
            .set({
                title: fa.pencil("Customer")
            })
            .maximize();

    },
    'click .remove': function (e, t) {

        var id = this._id;

        alertify.confirm("Are you sure to delete [" + id + "]?")
            .set({
                onok: function (closeEvent) {

                    Sample.Collection.Customer.remove(id, function (error) {
                        if (error) {
                            alertify.error(error.message);
                        } else {
                            alertify.success("Success");
                        }
                    });
                },
                title: fa.remove("Customer")
            });

    },
    'click .show': function (e, t) {

        alertify.alert(renderTemplate(Template.sample_customerShow, this))
            .set({
                title: fa.eye("Customer")
            });

    }
});

/**
 * Insert
 */
Template.sample_customerInsert.onRendered(function () {
    datePicker();
});

Template.sample_customerInsert.events({
    'click .addressInsertAddon': function (e, t) {

        alertify.customAddressAddon(renderTemplate(Template.sample_addressInsertAddon))
            .set({
                title: fa.plus("Address")
            });

    }
});

/**
 * Update
 */
Template.sample_customerUpdate.onRendered(function () {
    datePicker();
});

Template.sample_customerUpdate.events({
    'click .addressInsertAddon': function (e, t) {

        alertify.customAddressAddon(renderTemplate(Template.sample_addressInsertAddon))
            .set({
                title: fa.plus("Address")
            });

    }
});

/**
 * Hook
 */
AutoForm.hooks({
    // Customer
    sample_customerInsert: {
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(Sample.Collection.Customer, '_id', 3);
                return doc;
            }
        },
        onSuccess: function (formType, result) {
            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    },
    sample_customerUpdate: {
        onSuccess: function (formType, result) {
            alertify.customCustomer().close();
            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    },
    // Address addon
    sample_addressInsertAddon: {
        before: {
            insert: function (doc) {
                doc._id = IDGenertor.gen(Sample.Collection.Address, '_id', 3);
                return doc;
            }
        },
        onSuccess: function (formType, result) {
            //alertify.customAddressAddon();
            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    }
});

/**
 * Config date picker
 */
var datePicker = function () {
    var dob = $('[name="dob"]');
    DateTimePicker.date(dob);
};
