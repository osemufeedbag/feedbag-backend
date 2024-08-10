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
            document.getElementById('name').innerText = data.user.PersonalInfo.FirstName;
            document.getElementById('companyname').innerText = data.user.BusinessInfo.BusinessName;
        })
        .catch(error => console.error('Error:', error));



