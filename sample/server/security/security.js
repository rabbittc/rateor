/**
 * Customer
 */
Sample.Collection.Customer.permit(['insert', 'update', 'remove'])
    .sampleIfGeneral()
    .apply();

/**
 * Address
 */
Sample.Collection.Address.permit(['insert', 'update', 'remove'])
    .sampleIfGeneral()
    .apply();
