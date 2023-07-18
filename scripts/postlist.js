var modal = document.getElementById("signup-modal");
var signUpButton = document.getElementById("sign-up");
var closeBtn = document.getElementsByClassName("close")[0];

signUpButton.onclick = function() {
  modal.style.display = "block";
};

closeBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal1 = document.getElementById("signin-modal");
var signInButton = document.getElementById("sign-in");
var closeBtn1 = document.getElementsByClassName("close1")[0];

signInButton.onclick = function() {
  modal1.style.display = "block";
};

closeBtn1.onclick = function() {
  modal1.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};

var trash = document.getElementById("trashModal");
var trashButton1 = document.getElementById("trashIcon1");
var no = document.getElementById("noButton");

trashButton1.onclick = function() {
    trash.style.display = "block";
};

no.onclick = function() {
    trash.style.display = "none";
}

var trashButton2 = document.getElementById("trashIcon2");
trashButton2.onclick = function() {
    trash.style.display = "block";
};

var trashButton3 = document.getElementById("trashIcon3");
trashButton3.onclick = function() {
    trash.style.display = "block";
};

var trashButton4 = document.getElementById("trashIcon4");
trashButton4.onclick = function() {
    trash.style.display = "block";
};

var trashButton5 = document.getElementById("trashIcon5");
trashButton5.onclick = function() {
    trash.style.display = "block";
};