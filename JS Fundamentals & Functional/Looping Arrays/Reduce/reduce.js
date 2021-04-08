import _ from '../underscore'

console.log(_.reduce([2,3,5], function(v,sum){
    return v+sum
}))