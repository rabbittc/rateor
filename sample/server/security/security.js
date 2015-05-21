/**
 * Customer
 */
Sample.Collection.Customer.permit(['insert', 'update', 'remove'])
    .sample_ifGeneral()
    .apply();

/**
 * Address
 */
Sample.Collection.Address.permit(['insert', 'update', 'remove'])
    .sample_ifGeneral()
    .apply();
