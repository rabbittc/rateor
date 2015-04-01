IDGenertor = {
    gen: function (collection, field, length) {
        var newId = s.lpad(1, length, '0');
        var sortBy = {};
        sortBy[field] = -1;
        var obj = collection.findOne({}, {sort: sortBy});
        if (obj != null) {
            var increaseId = parseInt(obj[field]) + 1;
            newId = s.lpad(increaseId, length, '0');
        }
        return newId;
    },
    genWithPrefix: function (collection, field, prefix, length) {
        var newId = prefix + '-' + s.lpad(1, length, '0');
        var reg = {};
        reg[field] = new RegExp("^" + prefix, "m");
        var sortBy = {};
        sortBy[field] = -1;
        var obj = collection.findOne(reg, {sort: sortBy});
        if (obj != null) {
            var parts = obj[field].split("-");
            var increaseId = parseInt(parts[1]) + 1;
            parts[1] = s.lpad(increaseId, length, '0');
            newId = parts.join("-");
        }
        return newId;
    }
};
