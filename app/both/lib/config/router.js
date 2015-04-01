/**
 * Config
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    progress: true,
    progressTick: true,
    progressSpinner: true,
    progressDelay: false, // 100
    progressDebug: true
});

/**
 * BeforeAction for app welcome
 */
Router.onBeforeAction(function () {

    Session.clearAuth();
    Session.set('notFound', false);
    this.next();

}, {
    only: ['app.welcome']
});

/**
 * BeforeAction for all
 */
Router.onBeforeAction(function () {

    Session.set('notFound', false);

    if (!Meteor.userId() || typeof Session.get('currentModule') === 'undefined' || typeof Session.get('currentBranch') === 'undefined') {
        Session.clearAuth();
        this.redirect('app.welcome');
    } else {
        this.next();
    }
}, {
    except: ['app.welcome']
});
