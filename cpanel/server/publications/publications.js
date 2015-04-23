/*
 User
 */
Meteor.publish('cpanelUser', function () {
    return Meteor.users.find();
});

/*
 Roles
 */
Meteor.publish(null, function () {
    return Meteor.roles.find();
});

/*
 Company
 */
Meteor.publish('cpanelCompany', function () {
    if (this.userId) {
        return Cpanel.Collection.Company.find();
    }
});

/*
 Branch
 */
Meteor.publish('cpanelBranch', function () {
    if (this.userId) {
        return Cpanel.Collection.Branch.find();
    }
});
/*
 Currency
 */
Meteor.publish('cpanelCurrency', function () {
    if (this.userId) {
        return Cpanel.Collection.Currency.find();
    }
});
/* Exchange */
Meteor.publish('cpanelExchange', function () {
    if (this.userId) {
        return Cpanel.Collection.Exchange.find();
    }
});
