
// calculation of concentration
function concentration(){
    if (document.getElementById("result")){
        let massglue = parseInt(document.getElementById("glueId").value);
        let massWater = parseInt(document.getElementById("waterId").value);
        let V = massglue + massWater;
        let conc = massglue/V*100;
        conc=Math.round(conc);
        console.log(V);
        console.log(conc);
        document.getElementById("res0").innerText= `Your concentration is: ~ ${conc} % `
    } else {
       return alert('Something goes wrong');
    }
}
// calculation of needed water and dry glue
function needConcGlueWater() {
    if (document.getElementById("needConcGlue")) {
        let concNeeded = +document.getElementById("needConcId").value;
        let weightOfWater = +document.getElementById('weightOfWaterId').value;
        let b = +(100-concNeeded);
    //    typeof b === "number";
        let weightOfGlue = concNeeded*weightOfWater/b;
        console.log(weightOfGlue);
        weightOfGlue=Math.round(weightOfGlue);
        document.getElementById("res1").innerText= `You need to take ${weightOfGlue} grams of dry glue`
    } else {
        alert('Something goes wrong');
    }
    
}