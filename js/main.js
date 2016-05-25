/**
 * Created by kesikandras on 2016.05.21..
 */
(function () {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    var validateContactData = function () {
        var validName = false;
        var validEmail = false;
        var validMessage = false;

        if (name.value.length > 3 && name.value.length < 30) {
            console.log(name);
            validName = true;
        }
        if (validateEmail(email.value)) {
            console.log(email);
            validEmail = true;
        }
        if (message.value.length > 20 && message.value.length < 200) {
            validMessage = true;
        }

        if (validName && validEmail && validMessage) {
            document.getElementById("sendButton").disabled = false;
            // document.getElementById("sendMessage").addEventListener("click",sendMessage);
        }


    };


    var sendMessage = function () {
        alert(name.value+"\n"+email.value+"\n"+message.value+"\n"+"Your message was sent!");
    }

    document.getElementById("sendButton").addEventListener("click",sendMessage);
    name.addEventListener('change', validateContactData);
    email.addEventListener('change', validateContactData);
    message.addEventListener('change', validateContactData);
})();