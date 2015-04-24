/**
 * Config
 */
Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    progress: true,
    progressTick: true,
    progressSpinner: true,
    progressDelay: false, // 100
    progressDebug: true,
    title: "Rabbit Project"
});

/**
 * BeforeAction for cpanel welcome
 */
Router.onBeforeAction(function () {

    // Clear all auth session
    Session.clearAuth();

    // Set page not found session
    Session.set('notFound', false);

    this.next();

}, {
    only: ['cpanel.welcome']
});

/**
 * BeforeAction for all
 */
Router.onBeforeAction(function () {

    // Set page not found session
    Session.set('notFound', false);

    if (!Meteor.userId() || typeof Session.get('currentModule') === 'undefined' || typeof Session.get('currentBranch') === 'undefined') {
        // Clear all auth session
        Session.clearAuth();

        this.redirect('cpanel.welcome');
    } else {
        this.next();
    }
}, {
    except: ['cpanel.welcome']
});
