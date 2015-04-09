/**
 * Create new custom  alertify
 */
createCustomAlert("exchange");

/**
 * Index
 */
Template.app_exchange.events({
    'click .insert': function (e, t) {
        alertify.customExchange(renderTemplate(Template.app_exchangeInsert))
            .set({
                title: "<i class='fa fa-plus'></i> Exchange"
            })
            .maximize();
    },
    'click .update': function (e, t) {
        var data = App.Collection.Exchange.findOne(this._id);

        alertify.customExchange(renderTemplate(Template.app_exchangeUpdate, data))
            .set({
                title: '<i class="fa fa-pencil"> Exchange'
            })
            .maximize();
    },
    'click .remove': function (e, t) {
        var id = this._id;

        alertify.confirm("Are you sure to delete [" + this.exDateTime + "]?")
            .set({
                onok: function (closeEvent) {

                    App.Collection.Exchange.remove(id, function (error) {
                        if (error) {
                            alertify.error(error.message);
                        } else {
                            alertify.success("Success");
                        }
                    });
                },
                title: '<i class="fa fa-remove"></i> Exchange'
            });
    },
    'click .show': function (e, t) {
        alertify.alert(renderTemplate(Template.app_exchangeShow, this))
            .set({
                title: '<i class="fa fa-eye"></i> Exchange'
            });
    }
});

/**
 * Insert
 */
Template.app_exchangeInsert.helpers({
    exDateTime: function () {
        return Session.get('exDateTime');
    },
    fromCurrency: function () {
        return Session.get('fromCurrency');
    },
    toCurrency: function () {
        return Session.get('toCurrency');
    }
});

Template.app_exchangeInsert.events({
    'change [name="from"]': function () {
        var from = $('[name="from"]').val();
        if (from == 'KHR') {
            Session.set('toCurrency', 'USD');
        } else if (from == 'USD') {
            Session.set('toCurrency', 'KHR');
        } else {
            Session.set('toCurrency', '');
        }
    }
});

Template.app_exchangeInsert.onRendered(function () {
    var name = $('[name="exDateTime"]');
    DateTimePicker.dateTime(name);

    Meteor.call('clock', function (error, result) {
        Session.set('exDateTime', result);
    });
    Session.set('fromCurrency', 'KHR');
    Session.set('toCurrency', '');
});

/**
 * Update
 */
Template.app_exchangeUpdate.onRendered(function () {
    var name = $('[name="exDateTime"]');
    DateTimePicker.dateTime(name);
});

/**
 * Hook
 */
AutoForm.hooks({
    app_exchangeInsert: {
        onSuccess: function (formType, result) {
            Meteor.call('clock', function (error, result) {
                Session.set('exDateTime', result);
            });
            Session.set('fromCurrency', null);
            Session.set('toCurrency', null);

            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    },
    app_exchangeUpdate: {
        onSuccess: function (formType, error) {
            alertify.customExchange().close();
            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    }
});
