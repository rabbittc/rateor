/**
 * Index
 */
Template.cpanel_exchange.onRendered(function () {
    // Create new  alertify
    createNewAlertify("exchange");
});

Template.cpanel_exchange.events({
    'click .insert': function (e, t) {
        alertify.exchange(fa("plus", "Exchange"), renderTemplate(Template.cpanel_exchangeInsert))
            .maximize();
    },
    'click .update': function (e, t) {
        var data = Cpanel.Collection.Exchange.findOne(this._id);
        alertify.exchange(fa("pencil", "Exchange"), renderTemplate(Template.cpanel_exchangeUpdate, data))
            .maximize();
    },
    'click .remove': function (e, t) {
        var id = this._id;

        alertify.confirm(
            fa("remove", "Exchange"),
            "Are you sure to delete [" + this.dateTime + "]?",
            function () {

                Cpanel.Collection.Exchange.remove(id, function (error) {
                    if (error) {
                        alertify.error(error.message);
                    } else {
                        alertify.success("Success");
                    }
                });
            },
            null);
    },
    'click .show': function (e, t) {
        this.ratesVal = JSON.stringify(this.rates);
        alertify.alert(fa("eye", "Exchange"), renderTemplate(Template.cpanel_exchangeShow, this));
    }
});

/**
 * Insert
 */
Template.cpanel_exchangeInsert.onRendered(function () {
    configDate();
});

Template.cpanel_exchangeInsert.helpers({
    doc: function () {
        var baseCurrency = Cpanel.Collection.Setting.findOne().baseCurrency;

        if (baseCurrency == 'KHR') {
            var khr = 1;
        } else if (baseCurrency == 'USD') {
            var usd = 1;
        } else {
            var thb = 1;
        }

        return {base: baseCurrency, khr: khr, usd: usd, thb: thb};
    }
});

/**
 * Update
 */
Template.cpanel_exchangeUpdate.onRendered(function () {
    configDate();
});

/**
 * Hook
 */
AutoForm.hooks({
    cpanel_exchangeInsert: {
        onSuccess: function (formType, result) {
            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    },
    cpanel_exchangeUpdate: {
        onSuccess: function (formType, error) {
            alertify.exchange().close();
            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    }
});

/**
 * Functions
 */
var configDate = function () {
    var name = $('[name="dateTime"]');
    DateTimePicker.dateTime(name);
};
