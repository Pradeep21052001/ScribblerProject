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


var trashButton1 = document.getElementById("trashIcon1");
var trash1 = document.getElementById("trashModal1");
var yes1 = document.getElementById("yesButton1");
var no1 = document.getElementById("noButton1");

trashButton1.onclick = function() {
    trash1.style.display = "block";
};
yes1.onclick = function() {
    trash1.style.display = "none";
    card1.style.display = "none";
};

no1.onclick = function() {
    trash1.style.display = "none";
}

var trashButton2 = document.getElementById("trashIcon2");
var trash2 = document.getElementById("trashModal2");
var yes2 = document.getElementById("yesButton2");
var no2 = document.getElementById("noButton2");

trashButton2.onclick = function() {
    trash2.style.display = "block";
};
yes2.onclick = function() {
    trash2.style.display = "none";
    card2.style.display = "none";
};

no2.onclick = function() {
    trash2.style.display = "none";
}

var trashButton3 = document.getElementById("trashIcon3");
var trash3 = document.getElementById("trashModal3");
var yes3 = document.getElementById("yesButton3");
var no3 = document.getElementById("noButton3");

trashButton3.onclick = function() {
    trash3.style.display = "block";
};

yes3.onclick = function() {
    trash3.style.display = "none";
    card3.style.display = "none";
};

no3.onclick = function() {
    trash3.style.display = "none";
};

var trashButton4 = document.getElementById("trashIcon4");
var trash4 = document.getElementById("trashModal4");
var yes4 = document.getElementById("yesButton4");
var no4 = document.getElementById("noButton4");

trashButton4.onclick = function() {
    trash4.style.display = "block";
};

yes4.onclick = function() {
    trash4.style.display = "none";
    card4.style.display = "none";
};

no4.onclick = function() {
    trash4.style.display = "none";
};

var trashButton5 = document.getElementById("trashIcon5");
var trash5 = document.getElementById("trashModal5");
var yes5 = document.getElementById("yesButton5");
var no5 = document.getElementById("noButton5");

trashButton5.onclick = function() {
    trash5.style.display = "block";
};

yes5.onclick = function() {
    trash5.style.display = "none";
    card5.style.display = "none";
};

no5.onclick = function() {
    trash5.style.display = "none";
};


