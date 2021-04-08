//CREATE AN OBJECT USING BRACKET AND DOT NOTATION THAT REPRESENTS THE CHARACTER AND RELATED
//DATA YOU MAY FIND IN A GAME OF CLUE

var game = {}

game.murderer = 'Hugo'
game['weapons'] = [ {type: 'Ak-47', location: 'Attic'}, { type:'Machete', location: 'kitchen'}, {type: 'Knife', location: 'living room'}]

game.name = []
game.name[0] = 'Suzel'
game.push('Pedro Infante')
//['Suzel', 'Pedro Infante']
