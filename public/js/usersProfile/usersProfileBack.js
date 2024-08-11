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
            document.getElementById('businessname').innerText = data.user.BusinessInfo.BusinessName == undefined ? "-----" : data.user.BusinessInfo.BusinessName;
            document.getElementById('email').innerText = data.user.BusinessInfo.Email == undefined ? "------" : data.user.BusinessInfo.Emai;
            document.getElementById('phone').innerText = data.user.PersonalInfo.Phone == undefined ? "------" : data.user.PersonalInfo.Phone;
            document.getElementById('user').innerText = data.user.PersonalInfo.User == undefined ? "------" : data.user.PersonalInfo.User;
            document.getElementById('country').innerText = data.user.PersonalInfo.Country == undefined ? "------" : data.user.PersonalInfo.Country;
            document.getElementById('postalcode').innerText = data.user.PersonalInfo.PostalCode == undefined ? "------" : data.user.PersonalInfo.PostalCode;
            document.getElementById('address').innerText = data.user.PersonalInfo.Address == undefined ? "------" : data.user.PersonalInfo.Address;
            document.getElementById('farmsize').innerText = data.user.FarmInfo.Size == undefined ? "------" : data.user.FarmInfo.Size;
        })
        .catch(error => console.error('Error:', error));


document.getElementById('logOut').addEventListener('click', () =>{

})


