var form = document.getElementById("loginFrom");
const msg = document.createElement("p");
msg.setAttribute("id", "validation");
msg.innerHTML = "Email sent successfully!";

var captcha;
function generate() {
  // Clear old input
  document.getElementById("captcha").value = "";

  // Access the element to store
  // the generated captcha
  captcha = document.getElementById("captchaCode");
  var uniquechar = "";

  const randomchar =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // Generate captcha for length of
  // 5 with random character
  for (let i = 1; i < 5; i++) {
    uniquechar += randomchar.charAt(Math.random() * randomchar.length);
  }

  // Store generated input
  captcha.innerHTML = uniquechar;
}
form.addEventListener("submit", function (event) {
  const user_input = document.getElementById("captcha").value;
  var user=document.getElementById("username").value;
  var pass=document.getElementById("password").value;
  if (user_input == captcha.innerHTML) {
    if (!form.checkValidity()) {
      event.preventDefault(); // Prevent form submission if validation fails
    } else {
      event.preventDefault();
      if(user==="admin"&&pass==="admin"){
        window.location.href = "admin.html";
      }
      if(user==="banker"&&pass==="banker"){
        window.location.href = "banker.html";
      }
      if(user==="user"&&pass==="user"){
        window.location.href = "landing.html";
      }
      
    }
  } else {
    event.preventDefault();
    msg.innerHTML = "Incorrect Captcha Code";
    form.appendChild(msg);
    generate();
    setTimeout(function () {
      form.removeChild(msg); // Remove the message after 5 seconds
    }, 4000);
  }
});
function showPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
  }

  function hidePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
  }
