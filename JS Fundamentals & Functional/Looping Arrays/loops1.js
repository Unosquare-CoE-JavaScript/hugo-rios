const game = {
    suspects:[
        {
            name: 'Rusty',
            color: 'orange'
        },
        {
            name: 'Miss Scarlet',
            color: 'red'
        }
    ]
}

//LOOP THRU THE SUSPECTS ARRAY

function loop(){
    const suspects = game.suspects;
    for (let i = 0; i < suspects.length; i++) {
        const element = suspects[i];
        console.log(element);
    }
}

loop()