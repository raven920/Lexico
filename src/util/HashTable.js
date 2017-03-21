function HashTable(){
    var hash = new Object();
    this.put = function(key, value){
        if(typeof key === "string"){
            hash[key] = value;
        }
        else{
            if(key._hashtableUniqueId == undefined){
                key._hashtableUniqueId = UniqueId.prototype.generateId();
            }
            hash[key._hashtableUniqueId] = value;
        }

    };

    this.get = function(key){
        if(typeof key === "string"){
            return hash[key];
        }
        if(key._hashtableUniqueId == undefined){
            return undefined;
        }
        return hash[key._hashtableUniqueId];
    };
}

function UniqueId(){

}

UniqueId.prototype._id = 0;
UniqueId.prototype.generateId = function(){
    return (++UniqueId.prototype._id).toString();
};

exports.HashTable = HashTable;
