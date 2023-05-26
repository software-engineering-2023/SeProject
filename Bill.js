function pay(){
    document.addEventListener("DOMContentLoaded", function() {
        var b1p = document.getElementById("b1p");
        var b1 = document.getElementById("b1");
        var amount1 = document.getElementById("amount1");
        var b2p = document.getElementById("b2p");
        var b2 = document.getElementById("b2");
        var amount2 = document.getElementById("amount2");

        var popup1 = document.getElementById("popup1");
        var popup2 = document.getElementById("popup2");
        var popup1p = document.getElementById("popup1p");
        var popup2p = document.getElementById("popup2p");

        var yes1 = document.getElementById("yes1");
        var yes2 = document.getElementById("yes2");
        var yes1p = document.getElementById("yes1p");
        var yes2p = document.getElementById("yes2p");

        var no = document.getElementById("no");
        var no1 = document.getElementById("no1");
        var no2 = document.getElementById("no2");
        var no3 = document.getElementById("no3");

        b1p.addEventListener("click", function(event) {
          event.preventDefault();
          popup1p.style.display="block";
        });
        yes1p.addEventListener("click",function(event){
          event.preventDefault();  
          var row = b1p.parentNode.parentNode;
          row.style.display = "none";
          popup1p.style.display="none";
        });

      
        b1.addEventListener("click", function(event) {
          event.preventDefault();
          popup1.style.display="block";
        });
        yes1.addEventListener("click",function(event){
          event.preventDefault();
          var row =b1.parentNode.parentNode;
          var amount = parseFloat(row.cells[1].textContent.slice(1));
          var paid = parseFloat(amount1.value);
          if (paid == amount) {
            row.style.display = "none";
          } 
          else if(paid>amount){
            alert("Please Enter a Valid Number");
          }
          else if(isNaN(paid)){
            alert("Please Fill Out The Amount Field");
          }
          else {
            row.cells[1].textContent = "$" + (amount - paid).toFixed(2);
          }
          amount1.value = "";
          popup1.style.display="none";
        });
      
        b2p.addEventListener("click", function(event) {
          event.preventDefault();
          popup2p.style.display="block";
        });
        yes2p.addEventListener("click",function(event){
          event.preventDefault();  
          var row = b2p.parentNode.parentNode;
          row.style.display = "none";
          popup2p.style.display="none";
        });

      
        b2.addEventListener("click", function(event) {
          event.preventDefault();
          popup2.style.display="block";
        });
        yes2.addEventListener("click",function(event){
          event.preventDefault();
          var row =b2.parentNode.parentNode;
          var amount = parseFloat(row.cells[1].textContent.slice(1));
          var paid = parseFloat(amount2.value);
          if (paid == amount) {
            row.style.display = "none";
          } 
          else if(paid>amount){
            alert("Please Enter a Valid Number");
          }
          else if(isNaN(paid)){
            alert("Please Fill Out The Amount Field");
          }
          else {
            row.cells[1].textContent = "$" + (amount - paid).toFixed(2);
          }
          amount1.value = "";
          popup2.style.display="none";
        });

        no.addEventListener("click",function(event){
          event.preventDefault();
          popup1.style.display="none";
        });
        no1.addEventListener("click",function(event){
          event.preventDefault();
          popup2.style.display="none";
        });
        no2.addEventListener("click",function(event){
          event.preventDefault();
          popup1p.style.display="none";
        });
        no3.addEventListener("click",function(event){
          event.preventDefault();
          popup2p.style.display="none";
        });

      });
}
pay();