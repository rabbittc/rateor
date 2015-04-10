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
                title: fa.plus("Exchange")
            })
            .maximize();
    },
    'click .update': function (e, t) {
        var data = App.Collection.Exchange.findOne(this._id);

        var from = data.from;
        Session.set("toOptions", App.List.currency({_id: {$ne: from}}));

        alertify.customExchange(renderTemplate(Template.app_exchangeUpdate, data))
            .set({
                title: fa.pencil("Exchange")
            })
            .maximize();
    },
    'click .remove': function (e, t) {
        var id = this._id;

        alertify.confirm("Are you sure to delete [" + this.exDate + "]?")
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
                title: fa.remove("Exchange")
            });
    },
    'click .show': function (e, t) {
        this.getFrom = App.Collection.Currency.findOne({_id: this.from}).symbol;
        this.getTo = App.Collection.Currency.findOne({_id: this.to}).symbol;

        alertify.alert(renderTemplate(Template.app_exchangeShow, this))
            .set({
                title: fa.eye("Exchange")
            });
    }
});

/**
 * Insert
 */
Template.app_exchangeInsert.helpers({
    toOptions: function () {
        return Session.get('toOptions');
    }
});

Template.app_exchangeInsert.onRendered(function () {
    configDate();
});

Template.app_exchangeInsert.events({
    'change [name="from"]': function () {
        fromChange();
    }
});

/**
 * Update
 */
Template.app_exchangeUpdate.helpers({
    toOptions: function () {
        return Session.get("toOptions");
    }
});

Template.app_exchangeUpdate.onRendered(function () {
    configDate();
});

Template.app_exchangeUpdate.events({
    'change [name="from"]': function () {
        fromChange();
    }
});

/**
 * Hook
 */
AutoForm.hooks({
    app_exchangeInsert: {
        onSuccess: function (formType, result) {
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

/**
 * Functions
 */
var configDate = function () {
    var name = $('[name="exDate"]');
    DateTimePicker.date(name);
};

var fromChange = function () {
    var from = $('[name="from"]').val();

    if (_.isEmpty(from)) {
        Session.set("toOptions", []);
    } else {
        Session.set("toOptions", App.List.currency({_id: {$ne: from}}));
    }
};
