/**
 * Super
 */
Security.defineMethod("app_ifSuper", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['super'], 'App');
    }
});

/**
 * Admin
 */
Security.defineMethod("app_ifAdmin", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['admin'], 'App');
    }
});

/**
 * Super or admin
 */
Security.defineMethod("app_ifSuperOrAdmin", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['super', 'admin'], 'App');
    }
});
