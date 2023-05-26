function loan(){
    var submit = document.getElementById("apply");
              var yes = document.getElementById("yes");
              var no = document.getElementById("no");
              var popup = document.getElementById("popup");
              submit.addEventListener("click",function(event){
                event.preventDefault();
                popup.style.display="block";
              });
              yes.addEventListener("click",function(event){
                event.preventDefault();
                alert("Request Successful"+"\n"+"You Will Receive a Confirmation Message Shortly");
                popup.style.display="none";
              });
              no.addEventListener("click",function(event){
                event.preventDefault();
                popup.style.display="none";
              });
}
loan();