const weapons = ['candlestick', 'leadpipe', 'revolver']
const makeBroken = function(item){
    return `broken ${item}`
}

const brokenWeapons = weapons.map(function(weapon){
    return makeBroken(weapon)
})