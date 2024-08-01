

const userStatus = sessionStorage.getItem('UserStatus');
console.log(document.getElementById("regForm").action = `http://localhost:4000/access/eRegister/${userStatus}`)

function reset(e) {
        e.preventDefault();
};

document.getElementById("goBack").addEventListener('click', function() {
        sessionStorage.removeItem('UserStatus');
});

document.getElementById("submitButton").addEventListener('click', function() {

        const fullName = document.getElementById("fullName").value;
        const businessType = document.getElementById("businessType").value;
        const businessName = document.getElementById("businessName").value;
        const email = document.getElementById("email").value;
        const businessRegistrationNos = document.getElementById("businessRegNo").value;
        const password = document.getElementById("password").value;
        

        if(!fullName || !businessType || !businessName || !email || !businessRegistrationNos || !password) {
                return alert("Please fill in your details");
            } 
            
        if (isNaN(Number(businessRegistrationNos))) {
                return alert("Business Registration number is not valid");
        } else {
                document.getElementById("submitButton").type = "submit";
            }
});


