//navigation menu
const navigation = document.querySelector("ul");

//first item to be added to the menu.
const sectionOne = document.createElement("li");
//anchor is added to refer to the sections when clicked
sectionOne.innerHTML = "<a href=#section1 class=active>Home</a>";
sectionOne.setAttribute("id", "buttons");
sectionOne.setAttribute("class", "section1");
navigation.appendChild(sectionOne);

//second item to be added to the menu.
const sectionTwo = document.createElement("li");
sectionTwo.innerHTML = "<a href=#section2>About Us</a>";
sectionTwo.setAttribute("id", "buttons");
sectionTwo.setAttribute("class", "section2");
navigation.appendChild(sectionTwo);

//third item to be added to the menu.
const sectionThree = document.createElement("li");
sectionThree.innerHTML = "<a href=#section3>Contact Us</a>";
sectionThree.setAttribute("id", "buttons");
sectionThree.setAttribute("class", "section3");
navigation.appendChild(sectionThree);

//variable to hold all sections
const sections = document.querySelectorAll("section");
//variable to hold all navigation bar tabs.
const nav = document.querySelectorAll("li");

//function to be executed when scrolling
document.addEventListener("scroll", () => {
  let curr = "";
  sections.forEach((section) => {
    //off set use to get top y position of section
    const top = section.offsetTop;
    const height = section.clientHeight;
    //top-height/3 is used so that when user is in between two sections the wider(more visible on the screen) section is highlighted
    if (scrollY >= top - height / 3) {
      curr = section.getAttribute("id");
    }
  });
  //method to remove previosly active tab and updates iwth current active to be heighleighted.
  nav.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(curr)) {
      li.classList.add("active");
    }
  });
});
var form = document.getElementById("myForm");
var par = document.getElementById("contact");
const msg = document.createElement("p");
msg.setAttribute("id", "validation");
msg.innerHTML = "Email sent successfully!";

form.addEventListener("submit", function (event) {
  if (!form.checkValidity()) {
    event.preventDefault(); // Prevent form submission if validation fails
  } else {
    form.reset();
    form.appendChild(msg);
  }
  setTimeout(function () {
    form.removeChild(msg); // Remove the message after 5 seconds
  }, 4000);
});
