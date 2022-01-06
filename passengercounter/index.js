let maincount = document.getElementById("count-el");
let count = 0;
let savecount = document.getElementById("save-el");

function plus(){
    count = count + 1;
    maincount.innerText = count;
}
function save(){
    let saveStr = count + "-" ;
    savecount.innerText += saveStr;
}