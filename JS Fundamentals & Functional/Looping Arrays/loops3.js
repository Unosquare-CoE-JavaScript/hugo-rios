//DESTRUCTURE THIS NESTED DATA STRUCTURE INTO 
//TWO VARIABLES WITH THE STRINGS RED AND ORANGE

const suspects = [
    {
        name: 'Rusty',
        color: 'orange'
    },
    {
        name: 'Miss Scarlet',
        color: 'red'
    }
]

const [{color: first}, {color: second}] = suspects