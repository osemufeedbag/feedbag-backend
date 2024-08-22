window.onload((e) => {
    document.getElementById('Dashboard').click();
});

document.getElementById('od').addEventListener('click', () => {
    document.getElementById('orderHistory').click();
})

document.getElementById('H&S').addEventListener('click', () => {
    document.getElementById('contactSupport').click();
})



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
           // console.log(data)
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

document.addEventListener('DOMContentLoaded', fetchUserProfileImage);

//Profile picture upload starts here
document.getElementById('iconUpload').addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('imageInput').click();
    });

    document.getElementById('imageInput').addEventListener('change', () => {
        const file = imageInput.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('userProfileImg', file);
    
            fetch('http://localhost:4000/userProfileImgUpload', {
                method: 'POST',
                credentials: 'include',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    fetchUserProfileImage();
                } else {
                    console.error('Image upload failed');
                }
            })
            .catch(error => console.error('Error:', error));
        }
    });
    
    function fetchUserProfileImage() {
        fetch('http://localhost:4000/getuserProfileImg', {
            method: 'GET',
            credentials: 'include',
        })
        .then(response => response.json())
        .then(data => {
            //console.log(data)
            if (data.image) {
                //console.log(data.image.data);
                const imgSrc = `data:${data.image.contentType};base64,${data.image.data}`;
                document.querySelector('.pic img').src = imgSrc;
            }
            
        }) 
        .catch(error => console.error('Error:', error));
    }
//Profile picture upload ends here

document.getElementById('dataDelete').addEventListener('click', (event) => {
        if(confirm("Are you sure you want to delete your account?")){
            fetch('http://localhost:4000/UserProfile/deletAccount', {
                method: 'DELETE',
                credentials: 'include',
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        }
        
});

