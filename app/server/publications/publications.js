/*
 User
 */
Meteor.publish('app_user', function () {
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
Meteor.publish('app_company', function () {
    if (this.userId) {
        return App.Collection.Company.find();
    }
});

/*
 Branch
 */
Meteor.publish('app_branch', function () {
    if (this.userId) {
        return App.Collection.Branch.find();
    }
});
/*
 Currency
 */
Meteor.publish('app_currency', function () {
    if (this.userId) {
        return App.Collection.Currency.find();
    }
});
/* Exchange */
Meteor.publish('app_exchange', function () {
    if (this.userId) {
        return App.Collection.Exchange.find();
    }
});
