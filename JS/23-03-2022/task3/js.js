function onC() {
  let x = document.getElementById("Changed").value;
  if (x == "Jordan") {
    document.getElementById("image").src = "images/Flag_of_Jordan.svg";
  } else if (x == "Norway") {
    document.getElementById("image").src = "images/Flag_of_Norway.svg.png";
  } else {
    document.getElementById("image").src = "images/1200px-Flag_of_the_United_Kingdom.svg.webp";
  }
}