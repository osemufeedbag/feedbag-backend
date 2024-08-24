//const path = require('path');
//const Dotenv = require('dotenv-webpack');

const userStatus = sessionStorage.getItem('UserStatus');
document.getElementById("regForm").action = `/access/pRegister/${userStatus}`;

function reset(e) {
        e.preventDefault();
};

document.getElementById("goBack").addEventListener('click', function() {
        sessionStorage.removeItem('UserStatus');
});

document.getElementById("submitButton").addEventListener('click', function() {

        const fullName = document.getElementById("firstName").value;
        const businessType = document.getElementById("businessType").value;
        const businessName = document.getElementById("businessName").value;
        const phone = document.getElementById("phone").value;
        const businessRegistrationNos = document.getElementById("businessRegNo").value;
        const password = document.getElementById("password").value;
        

        if(!fullName || !businessType || !businessName || !phone || !businessRegistrationNos || !password) {
                return alert("Please fill in your details");
            } 
            
        if (isNaN(Number(businessRegistrationNos))) {
                return alert("Business Registration number is not valid");
        } else {
                document.getElementById("submitButton").type = "submit";
        }
});