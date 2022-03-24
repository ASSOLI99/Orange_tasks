document.getElementById("test").style.width="200px"
document.getElementById("test").style.height="200px"
document.getElementById("test").style.backgroundColor="blue"
document.getElementById("test").onclick=()=>{
    on()
};
function on(){
    document.getElementById("test").style.backgroundColor="red"
}