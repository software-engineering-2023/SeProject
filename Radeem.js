function radeemCashback(){
    var radeemb = document.getElementById("redeem-cashback");
    var  points = document.getElementById("credit-card-points");
    var points1 = document.getElementById("amount");
    var point = 720;

    radeemb.addEventListener("click",function(){
        var sub = parseInt(points1.value , 10);
        if(!isNaN(sub)){
            point-=sub;
            if(point>=0){
                points.textContent =point;
            }
            else{
                point+=sub;
            }   
        }
    });
}
radeemCashback();