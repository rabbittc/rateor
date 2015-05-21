/*
 User
 */
Meteor.publish('cpanel_user', function () {
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
Meteor.publish('cpanel_company', function () {
    if (this.userId) {
        return Cpanel.Collection.Company.find();
    }
});

/*
 Branch
 */
Meteor.publish('cpanel_branch', function () {
    if (this.userId) {
        return Cpanel.Collection.Branch.find();
    }
});
/*
 Currency
 */
Meteor.publish('cpanel_currency', function () {
    if (this.userId) {
        return Cpanel.Collection.Currency.find();
    }
});
/* Exchange */
Meteor.publish('cpanel_exchange', function () {
    if (this.userId) {
        return Cpanel.Collection.Exchange.find();
    }
});
/* Setting */
Meteor.publish('cpanel_setting', function () {
    if (this.userId) {
        return Cpanel.Collection.Setting.find();
    }
});
/* Events */
Meteor.publish('events', function () {
    if (this.userId) {
        return Events.find();
    }
});
