var addbtnElem = document.querySelector(".addbtn");
var displayElem = document.querySelector(".diplay");
var textRegElem = document.querySelector(".regi");


//let reg= registration();

function addbtnClicked(){
var regEntered = textRegElem.value;

if(regEntered = ""){
displayElem.innerHTML = "";
}
else{
    displayElem.innerHTML = textRegElem.value;
}
//displayElem.innerHTML = reg.regNum(regEntered);




}



addbtnElem.addEventListener('click',addbtnClicked);