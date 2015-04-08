/**
 * List
 */
Sample.List = {
    gender: function () {
        var list = [
            {label: 'Male', value: 'M'},
            {label: 'Female', value: 'F'}
        ];

        return list;
    },
    address: function () {
        var list = Sample.Collection.Address.find()
            .map(function (obj) {
                return {label: obj._id + ' : ' + obj.name, value: obj._id};
            });

        return list;
    }
};
