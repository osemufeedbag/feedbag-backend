
document.getElementById("farmerStatus").addEventListener('click', function() {
        sessionStorage.setItem('UserStatus', document.getElementById("farmerStatus").innerText);
    });

document.getElementById("aggregatorStatus").addEventListener('click', function() {
        sessionStorage.setItem('UserStatus', document.getElementById("aggregatorStatus").innerText);
    });

document.getElementById("consumerStatus").addEventListener('click', function() {
        sessionStorage.setItem('UserStatus', document.getElementById("consumerStatus").innerText);
        document.getElementById("emailSignup").href = "consumer.html"
        console.log(document.getElementById("emailSignup").href);
    });

document.getElementById("emailSignUp").addEventListener('click', function() {
        if(!sessionStorage.getItem('UserStatus')) {
            alert("Please select a sign up status");
        } else {
            document.getElementById("emailSignUp").href = "EmailReg.html";
        }
    });