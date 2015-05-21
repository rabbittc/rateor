/**
 * Index
 */
Template.sample_customer.onCreated(function () {
    // Create new  alertify
    createNewAlertify(["customer", "addressAddon"]);
});

Template.sample_customer.helpers({
    selector: function () {
        var pattern = Session.get('currentBranch');
        //var pattern = new RegExp("^" + branchId.current.branch);
        return {cpanel_branchId: pattern};
    }
});
Template.sample_customer.events({
    'click .insert': function (e, t) {
        alertify.customer(fa("plus", "Customer"), renderTemplate(Template.sample_customerInsert))
            .maximize();
    },
    'click .update': function (e, t) {
        var data = Sample.Collection.Customer.findOne(this._id);
        alertify.customer(fa("pencil", "Customer"), renderTemplate(Template.sample_customerUpdate, data))
            .maximize();
    },
    'click .remove': function (e, t) {
        var id = this._id;

        alertify.confirm(
            fa("remove", "Customer"),
            "Are you sure to delete [" + id + "]?",
            function () {
                Sample.Collection.Customer.remove(id, function (error) {
                    if (error) {
                        alertify.error(error.message);
                    } else {
                        alertify.success("Success");
                    }
                });
            },
            null
        );

    },
    'click .show': function (e, t) {
        var data = Sample.Collection.Customer.findOne({_id: this._id});
        alertify.alert(fa("eye", "Customer"), renderTemplate(Template.sample_customerShow, data));
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
        alertify.addressAddon(fa("plus", "Address"), renderTemplate(Template.sample_addressInsertAddon))
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
        alertify.addressAddon(fa("plus", "Address"), renderTemplate(Template.sample_addressInsertAddon));
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
                var branchPre = Session.get('currentBranch') + '-';
                doc._id = idGenerator.genWithPrefix(Sample.Collection.Customer, branchPre, 3);
                doc.cpanel_branchId = Session.get('currentBranch');
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
            alertify.customer().close();
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
                doc._id = idGenerator.gen(Sample.Collection.Address, 3);
                return doc;
            }
        },
        onSuccess: function (formType, result) {
            //alertify.addressAddon();
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
