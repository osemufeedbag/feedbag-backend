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
            document.getElementById('name').innerText = data.user.PersonalInfo.FirstName == undefined ? "-----" : data.user.PersonalInfo.FirstName;
            document.getElementById('name1').innerText = data.user.PersonalInfo.FirstName == undefined ? "-----" : data.user.PersonalInfo.FirstName;
            document.getElementById('companyname').innerText = data.user.BusinessInfo.BusinessName == undefined ? "-----" : data.user.BusinessInfo.BusinessName;
            document.getElementById('email').innerText = data.user.PersonalInfo.Email == undefined ? "------" : data.user.PersonalInfo.Emai;
            document.getElementById('phone').innerText = data.user.PersonalInfo.Phone == undefined ? "------" : data.user.PersonalInfo.Phone;
            document.getElementById('user').innerText = data.user.PersonalInfo.User == undefined ? "------" : data.user.PersonalInfo.User;
        })
        .catch(error => console.error('Error:', error));



