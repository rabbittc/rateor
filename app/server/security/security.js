/**
 * Company
 */
App.Collection.Company.permit(['update']).appIfSuperOrAdmin().apply();

/**
 * Branch
 */
App.Collection.Branch.permit(['insert']).appIfSuper().apply();
App.Collection.Branch.permit(['update']).appIfSuperOrAdmin().apply();
App.Collection.Branch.permit(['remove']).appIfSuper().apply();

/**
 * Exchange
 */
//App.Collection.Exchange.permit(['insert', 'update', 'remove']).appIfSuperOrAdmin().apply();
App.Collection.Exchange.permit(['insert', 'update', 'remove']).ifLoggedIn().apply();
