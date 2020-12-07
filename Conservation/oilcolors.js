// mixed oil colors 

 /*   color: 'cobalt violett light';
    color: 'cobalt violett dark';
    color: 'ceruleum';
    color:
} */

/*
  
function mixedOilColors (){
    const firstOilColor = document.getElementById("firstOilColorId").value;
    const secondOilColor = document.getElementById("secondOilColorId").value;
    console.log(firstOilColor);
    console.log(secondOilColor);
    firstOilColor === 'cobalt blue' && secondOilColor === 'lead white' ? console.log('Will be dark'):
    console.log ('Something is wrong')
}  */

 /*   if (firstOilColor === '1' && secondOilColor === '2') {
        console.log('It will be dark in some time')
    } else {
        console.log ("something is wrong")
    }
}; */

// document.getElementById("oilColors");

/*
function mixedOilColors (){
    const firstOilColor = document.getElementById("firstOilColorId").value;
    const secondOilColor = document.getElementById("secondOilColorId").value;
    let colors;
    switch (firstOilColor && secondOilColor) {
        case 'cobalt blue' && 'lead white':
            console.log('Will be dark/black');
            break;
        case 'cobalt violet light' && 'lead white':
            console.log('WIll be dark/black');
            break;
        case 'cobalt violet dark'&& 'lead white':
            console.log('WIll be lighter');
            break;
        case 'cerulean blue' && 'lead white':
            console.log('You can use it!');
            break;
        case 'mangan blue', 'lead white':
            console.log('Will be lighter');
            break;
        case 'mangan-cadmium', 'lead white':
            console.log('You can use it!');
            break;
        case 'cadmium yellow', 'lead white':
            console.log('You can use it!');
            break;     
        case 'cadmium orange', 'lead white':
            console.log('You can use it!');
            break;
        case 'cadmium red', 'lead white':
            console.log('You can use it!');
            break;
        case 'transparent mars yellow', 'lead white':
            console.log('You can use it!');
            break;
        case 'transparent mars brown deep', 'lead white':
            console.log('Will be lighter');
            break;
        case 'english red', 'lead white':
            console.log('You can use it!');
            break;
        case 'caput-mortuum', 'lead white':
            console.log('WIll be dark/black');
            break;
        case 'ochre', 'ochre light', 'gold ochre', 'red ochre', 'lead white':
            console.log('You can use it!');
            break;
        case 'ochre deep', 'ochre deep kotayk', 'lead white':
            console.log('Will be lighter');
            break;
        case 'raw sienna', 'burnt sienna', 'lead white':
            console.log('You can use it!');
            break;
        case 'mars brown deep', 'lead white':
            console.log('You can use it!');
            break;
        case 'mars brown light', 'lead white':
            console.log('Will be lighter');
            break;
                               
    }

// another variante
    } else if (firstOilColor === 'cobalt violet dark' && secondOilColor === 'lead white'){
        console.log('Will be lighter');
    } else if (firstOilColor === 'cerulean blue' && secondOilColor === 'lead white'){
        console.log('You can use it!');

} */

let Oilcolor = { 
    red: ["english red", "cadmium red" ],
    green: "glauconite",
    blue: "cobalt blue",
    black: "It will be black"
}
console.log(Oilcolor.red);

function mixedOilColors (){
    const firstOilColor = document.getElementById("firstOilColorId").value;
    const secondOilColor = document.getElementById("secondOilColorId").value;
    
    if (firstOilColor==='cobalt blue' && secondOilColor==='lead white' ||
        firstOilColor === 'lead white' && secondOilColor === "cobalt white" || ) {
        console.log('Will be black');
        document.querySelector("#res2").textContent = Oilcolor.red[1];
    } else if (firstOilColor==='cobalt violet light' && secondOilColor==='lead white') {
        console.log('WIll be dark/black');
    } else if (firstOilColor==='cobalt violet dark' && secondOilColor==='lead white') {
        console.log('Will be lighter');
    } else if (firstOilColor==='cerulean blue' && secondOilColor==='lead white') {
        console.log('You can use it!');
    } else {
        console.log ('Please, fill in the fields')
 //       alert('Please, fill in the fields')
    }

};









