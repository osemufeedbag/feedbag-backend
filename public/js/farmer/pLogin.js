
console.log(document.getElementById("loginButton").action = "http://localhost:4000/access/pLogin")

function reset(e) {
        e.preventDefault();
};

document.getElementById("loginButton").addEventListener('click', function() {
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;
        
        if(!phone || !password) {
                return alert("Please fill in your details");
            } 
            else {
                document.getElementById("logForm").action = "http://localhost:4000/access/pLogin"
                document.getElementById("loginButton").type = "submit";
            }
});


