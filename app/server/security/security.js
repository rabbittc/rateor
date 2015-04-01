/**
 * Company
 */
App.Collection.Company.permit(['update']).app_ifSuperOrAdmin().apply();

/**
 * Branch
 */
App.Collection.Branch.permit(['insert']).app_ifSuper().apply();
App.Collection.Branch.permit(['update']).app_ifSuperOrAdmin().apply();
App.Collection.Branch.permit(['remove']).app_ifSuper().apply();

/**
 * Exchange
 */
App.Collection.Exchange.permit(['insert', 'update', 'remove']).app_ifSuperOrAdmin().apply();
