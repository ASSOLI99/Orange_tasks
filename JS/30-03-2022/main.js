phone=document.querySelector(".Phone");
pass=document.querySelector(".pass");
email=document.querySelector(".email");
subb=document.querySelector(".subb");
function showMe(){
    subb.classList.remove("show")
if(phone.value.length==10 && pass.value.length >=8 && email.value.length >=12){
    let x=phone.value;
    let y=email.value;
    let regexP=/07(8|9|7)\d{7}/;
    let regexE=/\w+@\w+\.(com)$/;
    console.log(y.match(regexE));
    console.log(x.match(regexP));
    if(regexP.test(x) && regexE.test(y) ){
        subb.classList.add("show");
    }
}}
phone.addEventListener("keyup",showMe);
pass.addEventListener("keyup",showMe);
email.addEventListener("keyup",showMe);



