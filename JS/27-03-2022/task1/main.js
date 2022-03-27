// select items
let MyName=document.querySelector(".name input");
let age=document.querySelector(".age input");
let genderM=document.querySelector("#Male")
let genderF=document.querySelector("#Female")
let description=document.querySelector(".discrip input");
let birth=document.querySelector(".date input");
let submit=document.querySelector(".submit");
let skill1=document.querySelector(".HTML");
let skill2=document.querySelector(".CSS");
let skill3=document.querySelector(".JS");
let genderL;
let mySkill;
//functions

function onSub(){
    window.localStorage.setItem("name",MyName.value);
    window.localStorage.setItem("age",age.value);
    window.localStorage.setItem("gender",`${genderL}`);
    window.localStorage.setItem("description",description.value);
    window.localStorage.setItem("birth",birth.value);
    window.localStorage.setItem("skill",mySkill);
}
function myGender(){
    if(genderF.hasAttribute("checked")){
        genderL="Female";

    }else{
        genderL="Male";
    }
};
function addCheckedF(){
    genderM.removeAttribute("checked");
    genderF.setAttribute("checked","");
}
function addCheckedM(){
    genderM.setAttribute("checked","");
    genderF.removeAttribute("checked");
    
    
}
function selcetedSkill(){
    if(mySkill=="HTML"){
        skill1.setAttribute("selected","");
    }else if(mySkill=="CSS"){
      skill2.setAttribute("selected","");
    }else if(mySkill=="JS"){
      skill3.setAttribute("selected","");
    }
}
function myNewFunction(e) {
    mySkill=e.options[e.selectedIndex].text;
    return selcetedSkill();
  }
//event listener
genderF.addEventListener("click",addCheckedF)
genderM.addEventListener("click",addCheckedM)
submit.addEventListener("click",myGender)
submit.addEventListener("click",onSub)
//starting function
 function onStart(){
    MyName.value= window.localStorage.getItem("name");
    age.value= window.localStorage.getItem("age");
    genderL= window.localStorage.getItem("gender");
    if(genderL=="Male"){
         addCheckedM()
    }else{
         addCheckedF()
}
    description.value= window.localStorage.getItem("description");
    birth.value= window.localStorage.getItem("birth");
    if(window.localStorage.getItem("skill")=="HTML"){
        skill1.setAttribute("selected","");
        mySkill="HTML";
    }else if(window.localStorage.getItem("skill")=="CSS"){
        skill2.setAttribute("selected","");
        mySkill="CSS";
    }else if(window.localStorage.getItem("skill")=="JS"){
        skill3.setAttribute("selected","");
        mySkill="JS";
    }
 }
onStart();