
window.onload = (event) =>{
    sessionStorage.removeItem("UserStatus");
};

document.getElementById("farmerStatus").addEventListener('click', function() {
        sessionStorage.getItem('UserStatus') == "Farmer" ? sessionStorage.removeItem('UserStatus') :  sessionStorage.setItem('UserStatus', document.getElementById("farmerStatus").innerText);
    });

document.getElementById("aggregatorStatus").addEventListener('click', function() {
    sessionStorage.getItem('UserStatus') == "Aggregator" ? sessionStorage.removeItem('UserStatus') : sessionStorage.setItem('UserStatus', document.getElementById("aggregatorStatus").innerText);
    });

document.getElementById("consumerStatus").addEventListener('click', function() {
        sessionStorage.getItem('UserStatus') == "Consumer" ? sessionStorage.removeItem('UserStatus') : sessionStorage.setItem('UserStatus', document.getElementById("consumerStatus").innerText);
        document.getElementById("emailSignUp").href = "/EmailRegCon.html"
    });

/*document.getElementById("emailSignUp").addEventListener('click', function() {
        if(!sessionStorage.getItem('UserStatus')) {
            alert("Please select a sign up status");
        } 
        
        if(sessionStorage.getItem('UserStatus') == "Consumer") {
            document.getElementById("emailSignUp").href = "consumer.html";
        } else {
            document.getElementById("emailSignUp").href = "EmailReg.html";
        }
    });*/

document.getElementById("emailSignUp").addEventListener('click', function() {
        !sessionStorage.getItem('UserStatus') ? alert("Please select a sign up status") : sessionStorage.getItem('UserStatus') == "Consumer" ? document.getElementById("emailSignUp").href = "/EmailRegCon.html" : document.getElementById("emailSignUp").href = "EmailReg.html";
    });

document.getElementById("phoneSignUp").addEventListener('click', function() {
        !sessionStorage.getItem('UserStatus') ? alert("Please select a sign up status") : sessionStorage.getItem('UserStatus') == "Consumer" ? document.getElementById("phoneSignUp").href = "/conPhoneSignUp.html" : document.getElementById("phoneSignUp").href = "phoneSignUp.html";
    });