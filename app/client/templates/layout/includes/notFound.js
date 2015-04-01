Template.notFound.rendered = function () {
    Session.set('notFound', true);
};

Template.notFound.destroyed = function () {
    Session.set('notFound', false);
};