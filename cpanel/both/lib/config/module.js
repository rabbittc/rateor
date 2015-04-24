/**
 * Module
 */
Module = typeof Module === 'undefined' ? {} : Module;
Meteor.isClient && Template.registerHelper('Module', Module);

Module.Cpanel = {
    name: 'Cpanel System',
    version: '0.2.1',
    summary: 'Cpanel Management System is ...',
    roles: [
        'super',
        'admin'
    ]
};
