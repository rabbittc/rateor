/**
 * Font Awesome
 *
 * @type {{list: Function, eye: Function, plus: Function, pencil: Function, remove: Function, custom: Function}}
 */
fa = {
    _icon: function (name, title) {
        var title = _.isUndefined(title) ? "" : (" " + title);
        return '<i class="fa fa-' + name + '"></i>' + title;
    },
    list: function (title) {
        return this._icon("list", title);
    },
    eye: function (title) {
        return this._icon("eye", title);
    },
    plus: function (title) {
        return this._icon("plus", title);
    },
    pencil: function (title) {
        return this._icon("pencil", title);
    },
    remove: function (title) {
        return this._icon("remove", title);
    },
    custom: function (name, title) {
        return this._icon(name, title);
    }
};

Template.registerHelper('fa', function (name) {
    return Spacebars.SafeString('<i class="fa fa-' + name + '"></i>');
});