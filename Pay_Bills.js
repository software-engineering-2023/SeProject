
document.getElementById("billForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var billType = document.getElementById("billTypeSelect").value;
    var paymentMethod = document.querySelector("input[name='paymentMethod']:checked").value;
    
    var paymentMessage = document.createElement("p");
    paymentMessage.textContent = "You have successfully paid your " + billType + " bill using " + paymentMethod + ".";
    paymentMessage.style.color = "green";
    
    var form = document.getElementById("billForm");
   
})