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

var posts = [
  {
    id: 1,
    author: "Srishti Gupta",
    title: "‘let’ me be a ‘const’(ant), not a ‘var’(iable)!",
    likes:0,
    comments:[],
    content: "Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different.",
  },
  {
    id: 2,
    author: "Colby Fayock",
    title: "What is linting and how can it save you time?",
    likes:0,
    comments:[],
    content: "One of the biggest challenges in software development is time. It’s something we can’t easily getmore of, but linting can help us make the most out of the time we have.",
  },
  {
    id: 3,
    author: "Yazeed Bzadough",
    title: "How to Get More Views on Your Tech Blog",
    likes:0,
    comments:[],
    content: "If you're a developer with a Twitter account, you've already seen everyone and their cat start ablog, YouTube channel, or Patreon. We all want to become stars, or at the very least, arecognizable name in the industry.",
  },
  {
    id: 4,
    author: "Cedd Burge",
    title: "How to write easily describable code",
    likes:0,
    comments:[],
    content: "When code is not describable using words, most people have to do some mental mapping to turn itin to words. This wastes mental energy, and you run the risk of getting the mapping wrong.Different people will map to different words, whichleads to confusion when discussing the code.",
  },
  {
    id: 5,
    author: "Srishti Gupta",
    title: "Everything you should know about ‘module’ & ‘require’ in Node.js",
    likes:0,
    comments:[],
    content: "Node.js treats each JavaScript file as a separate module. For instance, if you have a filecontaining some code and this file is named xyz.js, then this file is treated as a module inNode, and you can say that you’ve created a modulenamed xyz.",
  },
];

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

// Retrieve the post based on the post ID
const post = posts.find(post => post.id === parseInt(postId));

// Function to display post details on the page
function displayPost() {
  document.getElementById("post-title").textContent = post.title;
  document.getElementById("post-author").textContent = post.author;
  document.getElementById("post-content").textContent = post.content;
  document.getElementById("like-count").textContent = "Be the first one to like this";

  // Display comments
  const commentsList = document.getElementById("comments-list");
  commentsList.innerHTML = post.comments.map(comment => `<li>${comment}</li>`).join("");
}
displayPost();

function handleEdit() {
  const editButton = document.getElementById("edit-button");
  const postTitle = document.getElementById("post-title");
  const postContent = document.getElementById("post-content");
  if(postContent.contentEditable === "true") {
    post.title = "UPDATED: "+postTitle.textContent;
    post.content = "UPDATED: "+postContent.textContent;
    postTitle.contentEditable = "false";
    postContent.contentEditable = "false";
    editButton.innerText = 'Edit';
    postTitle.style.border = "none"; 
    postContent.style.border = "none"; 
    displayPost(); 
  }
  else {
    postTitle.contentEditable = "true";
    postContent.contentEditable = "true";
    editButton.textContent = 'Save';
    postTitle.style.border = "1px solid pink";
    postContent.style.border = "1px solid pink"; 
  }
}

// Function to handle the like button click
function handleLike() {
  const likeButton = document.getElementById("like-button");
  const likeCount = document.getElementById("like-count");
    likeButton.textContent = 'Liked';
    post.likes++; 
    if(post.likes == 1) {
      likeCount.textContent = `${post.likes} person likes this!`
    }
    else {
      likeCount.textContent = `${post.likes} people like this!`;
    }
}


function handleAddComment() {
  const commentInput = document.getElementById("comment-input");
  // Add the new comment to the post and save it
  const newComment = commentInput.value.trim();
  if (newComment !== "") {
    post.comments.push(newComment);
    // Update the comment section
    const commentsList = document.getElementById("comments-list");
    commentsList.innerHTML += `<li>${newComment}</li>`;
    commentsList.style.display = 'block';
    commentInput.value = "";
  }
}



