/**
 * Config
 */
Router.configure({
    layoutTemplate: 'mainLayout',
    //loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    progress: true,
    progressTick: true,
    progressSpinner: true,
    progressDelay: false, // 100
    progressDebug: true,
    title: "Rabbit Project"
});

/**
 * Before action for cpanel welcome
 */
Router.onBeforeAction(function () {
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

    var module = Session.get('currentModule');
    var branch = Session.get('currentBranch');

    if (!Meteor.userId() || _.isUndefined(module) || _.isUndefined(branch)) {
        this.redirect('cpanel.welcome');
    } else {
        this.next();
    }
}, {
    except: ['cpanel.welcome']
});
