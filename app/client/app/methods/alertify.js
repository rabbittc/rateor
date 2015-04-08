/**
 * Create custom dialog
 */
createCustomAlert = function (names) {

    var alerts = typeof names !== "object" ? [names] : names;

    _.each(alerts, function (element) {
        var name = 'custom' + s.classify(element);

        if (!alertify[name]) {
            alertify.dialog(name, function () {
                return {
                    setup: function () {
                        return {
                            options: {
                                maximizable: true,
                                closableByDimmer: false,
                                resizable: false,
                                transition: "zoom"
                            }
                        };
                    },
                    prepare: function () {
                        this.elements.footer.style.visibility = "hidden";
                    }
                };
            }, false, 'alert');
        }
    });

};
