const _ = {}
_.each = function(list, callback) {
    if(Array.isArray(list)){
        for (let i = 0; i < list.length; i++) {
            callback(list[i], i, list)
        }
    } else{
        for(let key in list){
            callback(list[key], key, list)
        }
    }
}

_.map = function(list, callback) {
    var storage = []
    _.each(list, function(v, i, list){
        storage.push(callback(v, i, list))
    })

    return storage
}

_.filter = function(array, callback){
    const storage = []
    _.each(array, function(item, i, list){
        if(callback(item, i, list)){
            storage.push(item)
        }
    })
    return storage
}

_.from = function(arr){
    return Array.prototype.slice.call(arr)
}

_.reduce = function(list, callback, initial){
    let memo = initial

    for (let i = 0; i < list.length; i++) {
        if(i === 0 && memo === undefined){
            memo = list[0]
        }else {
            memo = callback(list[i], memo)
        }
    }
    return memo
}

_.curry = (fn) => {
    return (arg) => {
        return (arg2) =>{
            return fn(arg, arg2)
        }
    }
}

_.compose = (fn, fn2) => { 
    return (arg) => {
        const result = fn2(arg)
        return fn(result)
    }
}

export default _