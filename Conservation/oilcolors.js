// Mix of oil colors

let Oilcolor = { 
    red: ["english red", "cadmium red" ],
    crack: "Your paint layer could cracking",
    colorChangeCrack: "Your paint layer could change the color and cracking",
    couldBeUsed: "You can use it!",
    aufhellung: "Change the color, lightening",
    black: "Change the color into black, darkening"
}
console.log(Oilcolor.red);

function mixedOilColors (){
    const firstOilColor = document.getElementById("firstOilColorId").value;
    const secondOilColor = document.getElementById("secondOilColorId").value;
    
    if (firstOilColor==='cobalt blue' && secondOilColor==='lead white' ||
        firstOilColor === 'lead white' && secondOilColor === 'cobalt blue' ||
        firstOilColor === 'cobalt violet light' && secondOilColor === 'lead white' ||
        firstOilColor === 'lead white' && secondOilColor === 'cobalt violet light' ||             
        firstOilColor === 'caput-mortuum' && secondOilColor === 'lead white' ||
        firstOilColor === 'lead white' && secondOilColor === 'caput-mortuum' ||
        firstOilColor === 'madder lake red permanent' && secondOilColor === 'lead white' ||
        firstOilColor === 'lead white' && secondOilColor === 'madder lake red permanent' ||
        firstOilColor === 'gold ochre' && secondOilColor === 'lead white' ||
        firstOilColor === 'lead white' && secondOilColor === 'gold ochre' ||
        firstOilColor === 'ultramarine blue' && secondOilColor === 'lead white' ||
        firstOilColor === 'lead white' && secondOilColor === 'ultramarine blue'        
        ) {
        console.log('Will be black');
        document.querySelector("#res2").textContent = Oilcolor.black;

    } else if (firstOilColor==='cobalt violet dark' && secondOilColor==='lead white' ||
            firstOilColor==='lead white' && secondOilColor==='cobalt violet dark' ||
            firstOilColor === 'mangan blue' && secondOilColor === 'lead white' ||
            firstOilColor === 'lead white' && secondOilColor === 'mangan blue' ||
            firstOilColor === 'transparent mars brown deep' && secondOilColor === 'lead white' ||
            firstOilColor === 'lead white' && secondOilColor === 'transparent mars brown deep' ||
            firstOilColor === 'ochre deep' && secondOilColor === 'lead white' ||
            firstOilColor === 'lead white' && secondOilColor === 'ochre deep' ||
            firstOilColor === 'mars brown light' && secondOilColor === 'lead white' ||
            firstOilColor === 'lead white' && secondOilColor === 'mars brown light' ||
            firstOilColor === 'raw umber' && secondOilColor === 'lead white' ||
            firstOilColor === 'lead white' && secondOilColor === 'raw umber' ||
            firstOilColor === 'madder lake rose permanent' && secondOilColor === 'lead white' ||
            firstOilColor === 'lead white' && secondOilColor === 'madder lake rose permanent' ||
            firstOilColor === 'madder lake purple permanent' && secondOilColor === 'lead white' ||
            firstOilColor === 'lead white' && secondOilColor === 'madder lake purple permanent' ||   
            firstOilColor === 'madder lake purple permanent' && secondOilColor === 'lead white' ||
            firstOilColor === 'lead white' && secondOilColor === 'madder lake purple permanent' ||
            
            firstOilColor === 'madder lake purple permanent' && secondOilColor === 'zinc white' ||
            firstOilColor === 'zinc white' && secondOilColor === 'madder lake purple permanent' ||

            firstOilColor === 'madder lake purple permanent' && secondOilColor === 'strontium yellow' ||
            firstOilColor === 'strontium yellow' && secondOilColor === 'madder lake purple permanent' || 

            firstOilColor === 'madder lake purple permanent' && secondOilColor === 'smaragd green' ||
            firstOilColor === 'smaragd green' && secondOilColor === 'madder lake purple permanent' ||            
            firstOilColor === 'madder lake red permanent' && secondOilColor === 'smaragd green' ||
            firstOilColor === 'smaragd green' && secondOilColor === 'madder lake red permanent' ||            
            firstOilColor === 'madder lake rose permanent' && secondOilColor === 'smaragd green' ||
            firstOilColor === 'smaragd green' && secondOilColor === 'madder lake rose permanent' ||

            firstOilColor === 'madder lake purple permanent' && secondOilColor === 'cadmium lemon' ||
            firstOilColor === 'cadmium lemon' && secondOilColor === 'madder lake purple permanent' ||  
            firstOilColor === 'madder lake purple permanent' && secondOilColor === 'cadmium yellow' ||
            firstOilColor === 'cadmium yellow' && secondOilColor === 'madder lake purple permanent' ||  
            firstOilColor === 'madder lake purple permanent' && secondOilColor === 'cadmium orange' ||
            firstOilColor === 'cadmium orange' && secondOilColor === 'madder lake purple permanent' ||  
            firstOilColor === 'madder lake purple permanent' && secondOilColor === 'cadmium red' ||
            firstOilColor === 'cadmium red' && secondOilColor === 'madder lake purple permanent' ||
            
            firstOilColor === 'madder lake purple permanent' && secondOilColor === 'ultramarine blue' ||
            firstOilColor === 'ultramarine blue' && secondOilColor === 'madder lake purple permanent' ||             

            firstOilColor === 'madder lake purple permanent' && secondOilColor === 'madder lake rose permanent' ||
            firstOilColor === 'madder lake rose permanent' && secondOilColor === 'madder lake purple permanent' ||
            firstOilColor === 'madder lake purple permanent' && secondOilColor === 'madder lake red permanent' ||
            firstOilColor === 'madder lake red permanent' && secondOilColor === 'madder lake purple permanent'
    ) {
        console.log('Will be lighter');
        document.querySelector("#res2").textContent = Oilcolor.aufhellung;

    } else if (firstOilColor === 'mangan blue' && secondOilColor === 'green earth' ||
            firstOilColor === 'green earth' && secondOilColor === 'mangan blue' ||
            firstOilColor === 'raw umber' && secondOilColor === 'green earth' ||
            firstOilColor === 'green earth' && secondOilColor === 'raw umber' ||     
            firstOilColor === 'madder lake red permanent' && secondOilColor === 'green earth' ||
            firstOilColor === 'green earth' && secondOilColor === 'madder lake red permanent' ||
            firstOilColor === 'madder lake rose permanent' && secondOilColor === 'green earth' ||
            firstOilColor === 'green earth' && secondOilColor === 'madder lake rose permanent' ||
            firstOilColor === 'madder lake purple permanent' && secondOilColor === 'green earth' ||
            firstOilColor === 'green earth' && secondOilColor === 'madder lake purple permanent' ||
            firstOilColor === 'gold yellow' && secondOilColor === 'green earth' ||
            firstOilColor === 'green earth' && secondOilColor === 'gold yellow' ||
            firstOilColor === 'peach black' && secondOilColor === 'green earth' ||
            firstOilColor === 'green earth' && secondOilColor === 'peach black' ||   
            firstOilColor === 'blue black' && secondOilColor === 'green earth' ||
            firstOilColor === 'green earth' && secondOilColor === 'blue black' ||              
    ) {
        console.log('You can use it!');
        document.querySelector("#res2").textContent = Oilcolor.crack;

    } else {
        console.log ('No data avaliable')

    }

};









