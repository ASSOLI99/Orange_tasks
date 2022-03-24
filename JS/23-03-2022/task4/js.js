function updatefont() {
    let selector = document.getElementById('selectFontFamily');
    let family = selector.options[selector.selectedIndex].value;
    let div = document.getElementById('main');
    div.style.fontFamily = family;        
  }
  function updatefontSize() {
    let selector = document.getElementById('selectFontSize');
    let Size = selector.options[selector.selectedIndex].value;
    let div = document.getElementById('main');
    div.style.fontSize = Size;        
  }
  function isChecked(){
    let div = document.getElementById('main')
    if (document.getElementById("underline").checked){
      div.style.textDecoration="underline"
    }else{
      div.style.textDecoration="none"
    }
    if (document.getElementById("bold").checked){
      div.style.fontWeight="bold"
    }else{
      div.style.fontWeight="normal"
    }
    if (document.getElementById("italic").checked){
      div.style.fontStyle="italic"
    }else{
      div.style.fontStyle="normal"
    }
  }