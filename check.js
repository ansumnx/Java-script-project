let a;
document.getElementById("btn").onclick = function(){
    a=document.getElementById("frm").value;
    document.getElementById("msg").innerHTML = "you are selected " + a + " to vote for";
    
}