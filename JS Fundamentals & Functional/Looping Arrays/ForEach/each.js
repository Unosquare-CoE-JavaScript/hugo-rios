import _ from '../underscore'

_.each(['uno', 'dos', 'tres'], function(name, i, list){
    if(list[i +1]){
        console.log(name, ' is younger than', list[i + 1]);
    }else{
        console.log(name, ' is oldest');
    }
})