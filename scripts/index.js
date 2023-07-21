var modal = document.getElementById("signup-modal");
var signUpButton = document.getElementById("sign-up");
var closeBtn = document.getElementsByClassName("close")[0];

signUpButton.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";

};

window.onclick = function (event) {
  if (event.target != modal) {
    modal.style.display = "none";
  }
};

var modal1 = document.getElementById("signin-modal");
var signInButton = document.getElementById("sign-in");
var closeBtn1 = document.getElementsByClassName("close1")[0];

signInButton.onclick = function () {
  modal1.style.display = "block";
};

closeBtn1.onclick = function () {
  modal1.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};

function signupRedirectButton() {
  modal1.style.display = "none";
  modal.style.display = "block";
};

var modal2 = document.getElementById("createpost-modal");
var createPostButton = document.getElementById("createpost");
var closeBtn2 = document.getElementsByClassName("close2")[0];

createPostButton.onclick = function () {
  modal2.style.display = "block";
};

closeBtn2.onclick = function () {
  modal2.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};


