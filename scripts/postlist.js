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
  if (event.target == modal) {
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


var posts = [
  {
    id: 1,
    author: "Srishti Gupta",
    title: "‘let’ me be a ‘const’(ant), not a ‘var’(iable)!",
    content: "Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different.",
  },
  {
    id: 2,
    author: "Colby Fayock",
    title: "What is linting and how can it save you time?",
    content: "One of the biggest challenges in software development is time. It’s something we can’t easily getmore of, but linting can help us make the most out of the time we have.",
  },
  {
    id: 3,
    author: "Yazeed Bzadough",
    title: "How to Get More Views on Your Tech Blog",
    content: "If you're a developer with a Twitter account, you've already seen everyone and their cat start ablog, YouTube channel, or Patreon. We all want to become stars, or at the very least, arecognizable name in the industry.",
  },
  {
    id: 4,
    author: "Cedd Burge",
    title: "How to write easily describable code",
    content: "When code is not describable using words, most people have to do some mental mapping to turn itin to words. This wastes mental energy, and you run the risk of getting the mapping wrong.Different people will map to different words, whichleads to confusion when discussing the code.",
  },
  {
    id: 5,
    author: "Srishti Gupta",
    title: "Everything you should know about ‘module’ & ‘require’ in Node.js",
    content: "Node.js treats each JavaScript file as a separate module. For instance, if you have a filecontaining some code and this file is named xyz.js, then this file is treated as a module inNode, and you can say that you’ve created a modulenamed xyz.",
  },
];

showPosts();

function showPosts() {
  posts.forEach(function (value, index) {
    var cardTemplate = ` 
    <div class="card" id="card${value.id}">
    <div class="left">
        <p>${value.author}</p>
    </div>

    <div class="right">
        <div>
            <p class="head">${value.title}</p>
            <span class="trash">
                <i id="trashIcon${value.id}" onclick="trashClicked(${value.id})" class="fa fa-trash"></i>
            </span>
        </div >
        <p class="para">${value.content}</p>
        <br/>
        <span class="elipsis">
            <i id=${value.id} class="fa fa-ellipsis" onclick="viewPost(${value.id})"></i>   
        </span>
    </div>
    </div>
    `
    var allPosts = document.getElementById("allPosts");
    allPosts.innerHTML += cardTemplate;
  });
};

var deleteCardId; 
var trash = document.getElementById('trashModal');
function trashClicked(id) {
    trash.style.display = 'block';
    deleteCardId = id;
};

function deletePost() {
    var remove = document.getElementById(`card${deleteCardId}`);
    trash.style.display = 'none';
    remove.style.display = 'none';
}

function revert() {
  trash.style.display = 'none';
};