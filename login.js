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
  console.log("hello");
  console.log(user_input);
  console.log(captcha.innerHTML);
  if (user_input == captcha.innerHTML) {
    console.log("hello22");
    if (!form.checkValidity()) {
      event.preventDefault(); // Prevent form submission if validation fails
    } else {
      //event.preventDefault();
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
