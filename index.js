function validation(){
    let Wrong=document.getElementById("wrong").value;
    let submit=document.getElementById("submited").value;
    if(Wrong==""){
        document.getElementById("emailError").innerHTML="Your Email should required"
        return false;
    }else{
        document.getElementById("emailError").innerHTML=""
    }

}