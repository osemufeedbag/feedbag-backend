
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:4000/UserProfile/personalInfo', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    credentials: 'include'
})
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`); 
            }
            return response.json();
            })
        .then(data => {
            console.log(data)
            data.user.PersonalInfo && data.user.PersonalInfo.FirstName ? 
            document.getElementById('name').innerText = data.user.PersonalInfo.FirstName : document.getElementById('name').innerText = "----";
            
            data.user.PersonalInfo && data.user.PersonalInfo.FirstName ? 
            document.getElementById('name1').innerText = data.user.PersonalInfo.FirstName : document.getElementById('name1').innerText = "----";
            
            data.user.PersonalInfo && data.user.PersonalInfo.Phone ? 
            document.getElementById('phone').innerText = data.user.PersonalInfo.Phone : document.getElementById('phone').innerText = "----";
            
            data.user.PersonalInfo && data.user.PersonalInfo.Phone ? 
            document.getElementById('phone').innerText = data.user.PersonalInfo.Phone : document.getElementById('phone').innerText = "----";

            data.user.BusinessInfo && data.user.BusinessInfo.BusinessName ? 
            document.getElementById('businessname0').innerText = data.user.BusinessInfo.BusinessName : document.getElementById('businessname0').innerText = "----";

            data.user.BusinessInfo && data.user.BusinessInfo.BusinessName ? 
            document.getElementById('businessname1').innerText = data.user.BusinessInfo.BusinessName : document.getElementById('businessname1').innerText = "----";
        
            data.user.PersonalInfo && data.user.PersonalInfo.Phone ? 
            document.getElementById('phone').innerText = data.user.PersonalInfo.Phone : document.getElementById('phone').innerText = "----";

            data.user.PersonalInfo && data.user.PersonalInfo.Email ? 
            document.getElementById('email').innerText = data.user.PersonalInfo.Email : document.getElementById('email').innerText = "----";

            data.user.PersonalInfo && data.user.PersonalInfo.Country ? 
            document.getElementById('country').innerText = data.user.PersonalInfo.Phone : document.getElementById('country').innerText = "----";

            data.user.PersonalInfo && data.user.PersonalInfo.User ? 
            document.getElementById('user').innerText = data.user.PersonalInfo.User : document.getElementById('user').innerText = "----";
            
            data.user.PersonalInfo && data.user.PersonalInfo.PostalCode ? 
            document.getElementById('postalcode').innerText = data.user.PersonalInfo.PostalCode : document.getElementById('postalcode').innerText = "----";
            
            data.user.FarmInfo && data.user.FarmInfo.PostalCode ? 
            document.getElementById('farmpostalcode').innerText = data.user.FarmInfo.PostalCode : document.getElementById('farmpostalcode').innerText = "----";

            data.user.FarmInfo && data.user.FarmInfo.Size ? 
            document.getElementById('fsize').innerText = data.user.FarmInfo.Size : document.getElementById('fsize').innerText = "----"; 
            
            data.user.BillingInfo && data.user.BillingInfo.CardHolder ? 
            document.getElementById('cardholder').innerText = data.user.BillingInfo.CardHolder : document.getElementById('cardholder').innerText = "----"; 
            
            data.user.BillingInfo && data.user.BillingInfo.PaymentMethod ? 
            document.getElementById('paymentmethod').innerText = data.user.BillingInfo.PaymentMethod : document.getElementById('paymentmethod').innerText = "----"; 
            
            data.user.BillingInfo && data.user.BillingInfo.CardNumber ? 
            document.getElementById('cardnos').innerText = data.user.BillingInfo.CardNumber : document.getElementById('cardnos').innerText = "----"; 
            
            data.user.FarmInfo && data.user.FarmInfo.Size ? 
            document.getElementById('fsize').innerText = data.user.FarmInfo.Size : document.getElementById('fsize').innerText = "----"; 
        })
        .catch(error => console.error('Error:', error));
    });

//Personal info edit
document.getElementById(' ').addEventListener('click', () => {
    const EditSession = document.getElementById(' ').name;
    fetch(`http://localhost:4000/UserProfile/personalInfo/${EditSession}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({})
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`); 
                }
                return response.json();
                })
            .then(data => {
                console.log(data)
            })
            .catch(error => console.error('Error:', error));
})

//Farm info edit
document.getElementById(' ').addEventListener('click', () => {
    const EditSession = document.getElementById(' ').name;
    fetch(`http://localhost:4000/UserProfile/personalInfo/${EditSession}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({})
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`); 
                }
                return response.json();
                })
            .then(data => {
                console.log(data)
            })
            .catch(error => console.error('Error:', error));
})

//Billing info edit
document.getElementById(' ').addEventListener('click', () => {
    const EditSession = document.getElementById(' ').name;
    fetch(`http://localhost:4000/UserProfile/personalInfo/${EditSession}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({})
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`); 
                }
                return response.json();
                })
            .then(data => {
                console.log(data)
            })
            .catch(error => console.error('Error:', error));
})

//Order info
document.addEventListener('DOMContentLoaded', () => {
    fetch("http://localhost:4000/Order/orderHistory", {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`); 
                }
                return response.json();
                })
            .then(data => {
                console.log(data)
                data.forEach(item => {
                    //For each item in the database create a new element and append it to the order table
                })
            })
            .catch(error => console.error('Error:', error));
    }
);
    
        
    
    
    


