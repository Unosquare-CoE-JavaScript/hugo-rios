//LOOP THRU ALL THE PROPERTIES OF THE SUSPECTS OBJECT IN THE SUSPECTS ARRAY
//MARK THEM IF YOU THINK THEY ARE GUILTY

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

function loop2(){
    const suspects = game.suspects;
    for (let i = 0; i < suspects.length; i++) {
        const element = suspects[i];
        console.log(element);
        for(let key in element){
            if(element[key] === 'Rusty'){
                console.log('Rusty is Guilty');
            }else{
                console.log('Try next time')
            }
        }
    }
}
loop2()