import _ from '../underscore'

export const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms:[
            {kitchen: false},
            {ballroom: false},
            {dining_room: true},
            {billiard_room: false},
            {library: false},
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms:[
            {kitchen: false},
            {ballroom: false},
            {dining_room: false},
            {billiard_room: false},
            {library: true},
        ]
    },
    {
        name: 'Mr Brown',
        present: true,
        rooms:[
            {kitchen: true},
            {ballroom: false},
            {dining_room: false},
            {billiard_room: false},
            {library: false},
        ]
    },
    {
        name: 'Miss Peggy',
        present: true,
        rooms:[
            {kitchen: true},
            {ballroom: true},
            {dining_room: true},
            {billiard_room: true},
            {library: true},
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms:[
            {kitchen: true},
            {ballroom: true},
            {dining_room: true},
            {billiard_room: true},
            {library: true},
        ]
    }
]

console.log(_.filter(videoData, function(obj){
    return obj.present
}))

console.log(_.filter(videoData, function(obj){
    return obj.present && (obj.name === 'Mr Brown') 
}))