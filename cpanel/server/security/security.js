/**
 * Company
 */
Cpanel.Collection.Company.permit(['update']).cpanelIfSuperOrAdmin().apply();

/**
 * Branch
 */
Cpanel.Collection.Branch.permit(['insert']).cpanelIfSuper().apply();
Cpanel.Collection.Branch.permit(['update']).cpanelIfSuperOrAdmin().apply();
Cpanel.Collection.Branch.permit(['remove']).cpanelIfSuper().apply();

/**
 * Exchange
 */
//Cpanel.Collection.Exchange.permit(['insert', 'update', 'remove']).cpanelIfSuperOrAdmin().apply();
Cpanel.Collection.Exchange.permit(['insert', 'update', 'remove']).ifLoggedIn().apply();
