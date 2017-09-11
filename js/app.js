// display modal window

function displayModal() { // codekit ignore:line
  document.getElementById('demo').innerHTML = "Clicked"; // this worked!!!!!!
  document.getElementById('modal1').style.display = "block"; // this worked!!!!!!
  console.log("Donate button clicked");
}

function closeModal(){
  document.getElementById("modal1").style.display = "none";
  console.log("Close button clicked");

}
