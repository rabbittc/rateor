/*
 User
 */
Meteor.publish('appUser', function () {
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
Meteor.publish('appCompany', function () {
    if (this.userId) {
        return App.Collection.Company.find();
    }
});

/*
 Branch
 */
Meteor.publish('appBranch', function () {
    if (this.userId) {
        return App.Collection.Branch.find();
    }
});
/*
 Currency
 */
Meteor.publish('appCurrency', function () {
    if (this.userId) {
        return App.Collection.Currency.find();
    }
});
/* Exchange */
Meteor.publish('appExchange', function () {
    if (this.userId) {
        return App.Collection.Exchange.find();
    }
});
