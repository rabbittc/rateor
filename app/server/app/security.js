/**
 * Super
 */
Security.defineMethod("appIfSuper", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['super'], 'App');
    }
});

/**
 * Admin
 */
Security.defineMethod("appIfAdmin", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['admin'], 'App');
    }
});

/**
 * Super or admin
 */
Security.defineMethod("appIfSuperOrAdmin", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['super', 'admin'], 'App');
    }
});
