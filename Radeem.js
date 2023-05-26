function radeemCashback(){
    var radeemb = document.getElementById("redeem-cashback");
    var  points = document.getElementById("credit-card-points");
    var points1 = document.getElementById("amount");
    var point = 720;
    var popup = document.getElementById("popup");
    var yes = document.getElementById("yes");
    var no = document.getElementById("no");

    radeemb.addEventListener("click",function(){
       if(!isNaN(parseInt(points1.value,10))){
         var popup = document.getElementById("popup");
         popup.style.display = "block"; 
       }
       else{
        alert("Fill Out The Points Field");
       }      
    });
    yes.addEventListener("click",function(){
        popup.style.display = "none";
        // Perform action for "Yes" option here
        var sub = parseInt(points1.value , 10);
            if(!isNaN(sub)){
                point-=sub;
                if(point>=0){
                    points.textContent =point;
                }
                else{
                    point+=sub;
                    alert("Please Enter a Valid Number");
                }  
            }  
    });
    no.addEventListener("click",function(){
       popup.style.display="none";
    });
}

radeemCashback();