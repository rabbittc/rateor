/**
 * Admin
 */
Security.defineMethod("sampleIfAdmin", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['admin'], 'Sample');
    }
});

/**
 * General
 */
Security.defineMethod("sampleIfGeneral", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['general'], 'Sample');
    }
});

/**
 * Reporter
 */
Security.defineMethod("sampleIfReporter", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['reporter'], 'Sample');
    }
});
