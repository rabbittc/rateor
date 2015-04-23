/**
 * Super
 */
Security.defineMethod("cpanelIfSuper", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['super'], 'Cpanel');
    }
});

/**
 * Admin
 */
Security.defineMethod("cpanelIfAdmin", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['admin'], 'Cpanel');
    }
});

/**
 * Super or admin
 */
Security.defineMethod("cpanelIfSuperOrAdmin", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['super', 'admin'], 'Cpanel');
    }
});
