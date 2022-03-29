let mySelectors=document.querySelector(".select");

let b=1;
async function get(b){
    let response = await fetch("https://breakingbadapi.com/api/characters");
    let data = await response.json();
    let x=1;
    document.querySelector("img").setAttribute("src",data[b-1].img)
    document.querySelector("h2").innerHTML=data[b-1].name;
    document.querySelector("h3").innerHTML="birth Day: "+data[b-1].birthday;
    mySelectors.innerHTML=
    `
    <select>
   
    ${
        data.map(actor =>`<option value="${x}">${x++} ${actor.name}</option>`)
    }
    </select>
    `
    document.querySelector(`[value="${b}"]`).setAttribute("selected","")
}
get(b)
// mySelectors.addEventListener("change",)
mySelectors.addEventListener('change', (e) => {
    if(e.target.value.split(" ").slice(0,1)==1){
        console.log("hi")
    }
    b=e.target.value.split(" ").slice(0,1);
    return get(b)
});