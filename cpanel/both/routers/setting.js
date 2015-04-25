Router.route('cpanel/setting', function () {

    this.render('cpanel_setting', {
        data: function () {
            return Cpanel.Collection.Setting.findOne();
        }
    });

}, {
    name: 'cpanel.setting',
    header: {title: 'setting', icon: 'cogs'},
    title: "Setting"
});