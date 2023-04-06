// Problem #1
window.onload = function() {
  let heading = document.querySelector("h1");
  heading.style.color = "red";
  
  // Problem #2 & 3
  let changeColorBtns = document.querySelectorAll(".changeColorBtn");
  for (let i = 0; i < changeColorBtns.length; i++) {
    changeColorBtns[i].addEventListener("click", function() {
      let colorClass = this.classList;
      if (colorClass.contains("btn-success")) {
        heading.style.color = "green"
      } else if (colorClass.contains("btn-primary")) {
        heading.style.color = "blue"
      } else {
        heading.style.color = "red"
      }
    });
  }

// Problem #4
const para = document.createElement("p");
const node = document.createTextNode("Footer Text");
para.appendChild(node);

const element = document.getElementById("section");
element.appendChild(para);
};

function findFirstDescendant(parent, tagname) {
  parent = document.getElementById(parent)[0];
  let descendants = parent.getElementsByTagName(tagname);
  if (descendants.length)
    return descendants[0];
  return null;
};

// Problem #5
let firstButton = document.querySelector("button");
firstButton.addEventListener("click", function() {
  alert("I don't have a class or ID")
});

// Problem #6 enlargeBtn
let lrgBtn = document.getElementById("enlargeBtn");
lrgBtn.addEventListener("click", function() {
  let buttons = document.querySelectorAll('.changeColorBtn.btn.btn-success, .changeColorBtn.btn.btn-primary');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("btn-lg");
    buttons[i].style.width = "200px";
    buttons[i].style.height = "50px";
  }
});

