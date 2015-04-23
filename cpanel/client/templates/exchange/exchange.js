/**
 * Index
 */
Template.cpanel_exchange.onRendered(function () {
    // Create new  alertify
    createNewAlertify("exchange");
});

Template.cpanel_exchange.events({
    'click .insert': function (e, t) {
        alertify.exchange(renderTemplate(Template.cpanel_exchangeInsert))
            .set({
                title: fa("plus", "Exchange")
            })
            .maximize();
    },
    'click .update': function (e, t) {
        var data = Cpanel.Collection.Exchange.findOne(this._id);

        var from = data.from;
        Session.set("toOptions", Cpanel.List.currency({_id: {$ne: from}}));

        alertify.exchange(renderTemplate(Template.cpanel_exchangeUpdate, data))
            .set({
                title: fa("pencil", "Exchange")
            })
            .maximize();
    },
    'click .remove': function (e, t) {
        var id = this._id;

        alertify.confirm("Are you sure to delete [" + this.exDate + "]?")
            .set({
                onok: function (closeEvent) {

                    Cpanel.Collection.Exchange.remove(id, function (error) {
                        if (error) {
                            alertify.error(error.message);
                        } else {
                            alertify.success("Success");
                        }
                    });
                },
                title: fa("remove", "Exchange")
            });
    },
    'click .show': function (e, t) {
        this.getFrom = Cpanel.Collection.Currency.findOne({_id: this.from}).symbol;
        this.getTo = Cpanel.Collection.Currency.findOne({_id: this.to}).symbol;

        alertify.alert(renderTemplate(Template.cpanel_exchangeShow, this))
            .set({
                title: fa("eye", "Exchange")
            });
    }
});

/**
 * Insert
 */
Template.cpanel_exchangeInsert.onRendered(function () {
    configDate();
});

Template.cpanel_exchangeInsert.helpers({
    toOptions: function () {
        return Session.get('toOptions');
    }
});

Template.cpanel_exchangeInsert.events({
    'change [name="from"]': function () {
        fromChange();
    }
});

/**
 * Update
 */
Template.cpanel_exchangeUpdate.onRendered(function () {
    configDate();
});

Template.cpanel_exchangeUpdate.helpers({
    toOptions: function () {
        return Session.get("toOptions");
    }
});

Template.cpanel_exchangeUpdate.events({
    'change [name="from"]': function () {
        fromChange();
    }
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
    var name = $('[name="exDate"]');
    DateTimePicker.date(name);
};

var fromChange = function () {
    var from = $('[name="from"]').val();

    if (_.isEmpty(from)) {
        Session.set("toOptions", []);
    } else {
        Session.set("toOptions", Cpanel.List.currency({_id: {$ne: from}}));
    }
};
