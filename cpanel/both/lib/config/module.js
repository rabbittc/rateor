/**
 * Module
 */
Module = {};

Meteor.isClient && Template.registerHelper('Module', Module);

// Cpanel
Module.Cpanel = {
    name: 'Cpanel System',
    version: '0.2.0',
    title: 'Cpanel Title',
    description: 'Cpanel Management System is ...',
    roles: [
        'super',
        'admin'
    ]
};

// Sample
Module.Sample = {
    name: 'Sample System',
    version: '0.0.1',
    title: 'Sample Title',
    description: 'Sample Management System is ...',
    roles: [
        'admin',
        'general',
        'reporter'
    ]
};
