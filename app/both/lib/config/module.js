/**
 * Module
 */
Module = {};

Meteor.isClient && Template.registerHelper('Module', Module);

// App
Module.App = {
    name: 'App Project',
    version: '0.0.1',
    title: 'App Title',
    description: 'App Management System',
    roles: [
        'super',
        'admin'
    ]
};

// Sample
Module.Sample = {
    name: 'Sample Project',
    version: '0.0.1',
    title: 'Sample Title',
    description: 'Sample Management System',
    roles: [
        'admin',
        'general',
        'reporter'
    ]
};
