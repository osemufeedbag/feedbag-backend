
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