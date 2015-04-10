/**
 * List
 */
Sample.List = {
    gender: function () {
        var list = [
            {label: "(Select One)", value: ""},
            {label: 'Male', value: 'M'},
            {label: 'Female', value: 'F'}
        ];

        return list;
    },
    address: function () {
        var list = [{label: "(Select One)", value: ""}];

        Sample.Collection.Address.find()
            .forEach(function (obj) {
                list.push({label: obj._id + ' : ' + obj.name, value: obj._id});
            });

        return list;
    }
};
