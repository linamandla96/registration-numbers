var addbtnElem = document.querySelector(".addbtn");
var radiocheckedElem = document.querySelector(".regPlace")
var displayElem = document.querySelector(".display");
var textRegElem = document.querySelector(".regi");
var showbtnElem  = document.querySelector(".showbtn");
var showallbtnElem = document.querySelector(".showAllbtn");
var resetbtnElem = document.querySelector(".resetbtn");

var regex = /^[A-Z]{2}([0-9]{3})|[A-Z]{2}([0-9]{3} [0-9]{3})|[A-Z]{2}([0-9]{6})$/

let regiF = registration();
let existReg;
if (localStorage["regNum"]) {
    existReg = JSON.parse(localStorage.getItem("regList"));
}

function addbtnClicked() {
    
    if(regex.test(textRegElem.value)){
    regiF.storeRegNum(textRegElem.value)

        localStorage.setItem("regNum", JSON.stringify(regiF.registeredNum()))
    }
        
    
console.log(regiF.registeredNum());
    var spanE = document.createElement('span');
    for(let i =0; i< regiF.registeredNum().length; i++){
        spanE.innerHTML = regiF.registeredNum()[i];
        displayElem.appendChild(spanE);
    }
    
   

}
function showbtnClicked(){
    var radioChecked = document.querySelector("input[name ='reg']:checked");
    if(radioChecked =="Capetown"){
     return regiF.capeReg();
     
    }
 
}


addbtnElem.addEventListener('click', addbtnClicked);
showbtnElem.addEventListener('click',showbtnClicked)
//showallbtnElem.addEventListener('click',showallbtnClicked)