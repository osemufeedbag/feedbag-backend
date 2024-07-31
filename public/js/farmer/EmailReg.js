

const userStatus = sessionStorage.getItem('UserStatus');
console.log(document.getElementById("regFrom").action = `http://localhost:4000/access/register/${userStatus}`)

function reset(e) {
        e.preventDefault();
};

document.getElementById("goBack").addEventListener('click', function() {
        sessionStorage.removeItem('UserStatus');
});

document.getElementById("submitButton").addEventListener('click', function() {
        console.log(document.getElementById("fullName").value);
        const fullName = document.getElementById("fullName").value;
        const businessType = document.getElementById("businessType").value;
        const businessName = document.getElementById("businessName").value;
        const email = document.getElementById("email").value;
        const businessRegistrationNos = document.getElementById("businessRegNo").value;
        const password = document.getElementById("password").value;

        if(!fullName || !businessType || !businessName || !email || !businessRegistrationNos || !password) {
                alert("Please fill in your details");
            } else {
                document.getElementById("submitButton").type = "submit";
            }
});


