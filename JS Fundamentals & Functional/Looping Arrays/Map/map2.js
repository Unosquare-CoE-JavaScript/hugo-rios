import _ from '../underscore'

const weapons = ['candlestick', 'leadpipe', 'revolver']
const makeBroken = function(item){
    return `broken ${item}`
}
console.log(_.map(weapons, makeBroken))