function pay(){
    document.addEventListener("DOMContentLoaded", function() {
        var b1p = document.getElementById("b1p");
        var b1 = document.getElementById("b1");
        var amount1 = document.getElementById("amount1");
        var b2p = document.getElementById("b2p");
        var b2 = document.getElementById("b2");
        var amount2 = document.getElementById("amount2");
      
        b1p.addEventListener("click", function(event) {
          event.preventDefault();  
          var row = this.parentNode.parentNode;
          row.style.display = "none";
        });
      
        b1.addEventListener("click", function(event) {
          event.preventDefault();
            var row = this.parentNode.parentNode;
          var amount = parseFloat(row.cells[1].textContent.slice(1));
          var paid = parseFloat(amount1.value);
          if (paid == amount) {
            row.style.display = "none";
          } 
          else if(paid>amount){

          }
          else {
            row.cells[1].textContent = "$" + (amount - paid).toFixed(2);
          }
          amount1.value = "";
        });
      
        b2p.addEventListener("click", function(event) {
           event.preventDefault(); 
          var row = this.parentNode.parentNode;
          row.style.display = "none";
        });
      
        b2.addEventListener("click", function(event) {
          event.preventDefault();
          var row = this.parentNode.parentNode;
          var amount = parseFloat(row.cells[1].textContent.slice(1));
          var paid = parseFloat(amount2.value);
          if (paid == amount) {
            row.style.display = "none";
          }
          else if(paid>amount){
            
          }
          else {
            row.cells[1].textContent = "$" + (amount - paid).toFixed(2);
          }
          amount2.value = "";
        });
      });
}
pay();