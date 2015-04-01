/**
 * Check relation
 */
relationExist = function (param) {
    //var param = [
    //    {collection: 'collection', selector: 'selector'},
    //    {collection: 'collection', selector: 'selector'}
    //];
    var param = typeof param == 'object' ? param : [];
    var exist = false;
    param.forEach(function (obj) {
        var getRelation = obj.collection.findOne(obj.selector);
        if (getRelation != null) {
            exist = true;
            return;
        }
    });

    return exist;
};