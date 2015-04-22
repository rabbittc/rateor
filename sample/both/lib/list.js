/**
 * List
 */
Sample.List = {
    gender: function (selectOne) {
        var list = [];
        if (!_.isEqual(selectOne, false)) {
            list.push({label: "(Select One)", value: ""});
        }

        list.push({label: 'Male', value: 'M'});
        list.push({label: 'Female', value: 'F'});

        return list;
    },
    address: function (selectOne) {
        var list = [];
        if (!_.isEqual(selectOne, false)) {
            list.push({label: "(Select One)", value: ""});
        }

        Sample.Collection.Address.find()
            .forEach(function (obj) {
                list.push({label: obj._id + ' : ' + obj.name, value: obj._id});
            });

        return list;
    }
};
