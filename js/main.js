/**
 * Created by kesikandras on 2016.05.21..
 */


function endsWith(source, target) {
    var start = source.length - target.length;
    return start >= 0 && source.indexOf(target, start) == start;
}

var validateContactData = function(){
    var validName = false;
    var validEmail = false;
    var validMessage = false;
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    var n = name.innerHTML;
    var e = email.innerHTML;
    var m = message.innerHTML;
    if(name.length>3 && name.length<30) {
        console.log(name);
        validName = true;
    }
    if(endsWith(email,".hu") && endsWith(email,".com"))
    {
        console.log(email);
        validEmail = true;
    }
    if(message.length>20 && message.length<200){
        validMessage = true;
    }

    if(validName && validEmail && validMessage){
        document.getElementById("sendButton").disabled = false;
    }


};


var sendMessage = function(){

}






