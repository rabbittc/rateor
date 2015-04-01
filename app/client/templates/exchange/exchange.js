/**
 * List
 */
Template.app_exchange.events({
    'click .insert': function (e, t) {
        ModalTemplate.show('app_exchangeInsert');
    },
    'click .update': function (e, t) {
        var data = App.Collection.Exchange.findOne(this._id);

        ModalTemplate.show('app_exchangeUpdate', data);
    },
    'click .remove': function (e, t) {
        var id = this._id;

        bootbox.confirm("Are you sure to delete [" + id + "]?", function (result) {
            if (result) {
                App.Collection.Exchange.remove(id, function (error) {
                    if (error) {
                        toastr.error(error.message, 'Error');
                    } else {
                        toastr.success(App.Message.success, 'Success');
                    }

                });
            }
        });
    },
    'click .show': function (e, t) {
        bootbox.dialog({
            message: renderTemplate(Template.app_exchangeShow, this),
            title: "Exchange info"
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

            //$('#app_exchangeInsertModal').modal('hide');
            toastr.success(App.Message.success, 'Success');
        },
        onError: function (formType, error) {
            toastr.error(error.message, 'Error');
        }
    },
    app_exchangeUpdate: {
        onSuccess: function (formType, error) {
            $('#app_exchangeUpdateModal').modal('hide');
            toastr.success(App.Message.success, 'Success');
        },
        onError: function (formType, error) {
            toastr.error(error.message, 'Error');
        }
    }
});
