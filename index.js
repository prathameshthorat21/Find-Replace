window.onload = () => {
var fr = document.getElementById("fr");
var find = document.getElementById("find");
var replace = document.getElementById("replace");
var text = document.getElementById("text");
fr.onclick = () => {
if (text.textContent.indexOf(find.value)==-1) {
  alert("Your Entered Value is not present in the text \n\nPlease try again by entering new Value ...")
}
else {
while(text.textContent.indexOf(find.value)!= -1){
text.textContent = text.textContent.replace(find.value , replace.value);
}}};};