window.onload((event) => {
    document.getElementById('Dashboard').click();
});

document.addEventListener('DOMContentLoaded', fetchUserProfileImage);
document.addEventListener('DOMContentLoaded', profileVisibility);
document.addEventListener('DOMContentLoaded', getEmailNot);


document.getElementById('od').addEventListener('click', () => {
    document.getElementById('orderHistory').click();
})

document.getElementById('H&S').addEventListener('click', () => {
    document.getElementById('contactSupport').click();
})

document.getElementById('profileVis').onclick = () => {
    document.getElementById('profileVis').innerText == "only me" ? 
    sessionStorage.setItem('profileVisStatus', document.getElementById('profileVis').innerText = "everyone") 
    : sessionStorage.setItem('profileVisStatus', document.getElementById('profileVis').innerText = "only me")

    //fetch('http://18.221.116.240/UserProfile/personalInfo/ProfileVisibility', {
    fetch('http://localhost:4000/UserProfile/personalInfo/ProfileVisibility', {
        method: 'PUT',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'ProfileVis': sessionStorage.getItem('profileVisStatus')
        })
    })
    .then(response => response.json())
    .then(data => {})
    .catch(error => console.error('Error:', error));
};

document.getElementById('activityVis').addEventListener('click', () => {
    document.getElementById('activityVis').innerText == "only me" ? 
    sessionStorage.setItem('activityVisStatus', document.getElementById('activityVis').innerText = "everyone") 
    : sessionStorage.setItem('activityVisStatus', document.getElementById('activityVis').innerText = "only me")

    //fetch('http://18.221.116.240/UserProfile/personalInfo/ProfileVisibility', {
    fetch('http://localhost:4000/UserProfile/personalInfo/ActVisibility', {
        method: 'PUT',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'activityVis': sessionStorage.getItem('activityVisStatus')
        })
    })
    .then(response => response.json())
    .then(data => {})
    .catch(error => console.error('Error:', error));
})

function profileVisibility () {
    //fetch('http://18.221.116.240/getuserProfileImg', {
        fetch('http://localhost:4000/UserProfile/personalInfo/getVis', {
            method: 'GET',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => { 
            console.log(data)
            document.getElementById('profileVis').innerText = data.profileVis;
            document.getElementById('activityVis').innerText = data.activityVis;
        })
        .catch(error => console.error('Error:', error));
}

//Settings => Email notification start

function getEmailNot () {
    //fetch('http://18.221.116.240/getuserProfileImg', {
        fetch('http://localhost:4000/UserProfile/personalInfo/settings/emailNot/getEmailNot', {
            method: 'GET',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => { 
            console.log(data);
            data && data.Notification.EmailNotifications.Order_updates == true? 
            document.getElementById('oU').checked = true : document.getElementById('oU').checked = false;

            data && data.Notification.EmailNotifications.Marketing_Promotions == true? 
            document.getElementById('mP').checked = true : document.getElementById('mP').checked = false;

            data && data.Notification.EmailNotifications.Account_activity == true? 
            document.getElementById('aC').checked = true : document.getElementById('aC').checked = false;

            data && data.Notification.EmailNotifications.Social_Interactions == true? 
            document.getElementById('sI').checked = true : document.getElementById('sI').checked = false;

            data && data.Notification.PushNotifications.Order_updates == true? 
            document.getElementById('oU1').checked = true : document.getElementById('oU1').checked = false;

            data && data.Notification.PushNotifications.Marketing_Promotions == true? 
            document.getElementById('mP1').checked = true : document.getElementById('mP1').checked = false;

            data && data.Notification.PushNotifications.Account_activity == true? 
            document.getElementById('aC1').checked = true : document.getElementById('aC1').checked = false;

            data && data.Notification.PushNotifications.Social_Interactions == true? 
            document.getElementById('sI1').checked = true : document.getElementById('sI1').checked = false;

            data && data.Notification.SMSNotifications.Order_updates == true? 
            document.getElementById('oU2').checked = true : document.getElementById('oU2').checked = false;

            data && data.Notification.SMSNotifications.Account_activity == true? 
            document.getElementById('aC2').checked = true : document.getElementById('aC2').checked = false;

            data && data.Notification.SMSNotifications.Security_alerts == true? 
            document.getElementById('sA').checked = true : document.getElementById('sA').checked = false;

            data && data.AdsSettings == true? 
            document.getElementById('pA').checked = true : document.getElementById('pA').checked = false;


        })
        .catch(error => console.error('Error:', error));
}

document.getElementById('oU').addEventListener('click', () => {

    fetch('http://localhost:4000/UserProfile/personalInfo/settings/emailNot/oU', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'orderUpdateClick':  document.getElementById('oU').checked
            })
        })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error('Error:', error));
})

document.getElementById('mP').addEventListener('click', () => {

    fetch('http://localhost:4000/UserProfile/personalInfo/settings/emailNot/mP', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'marketingPro':  document.getElementById('mP').checked
            })
        })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error('Error:', error));
})

document.getElementById('aC').addEventListener('click', () => {

    fetch('http://localhost:4000/UserProfile/personalInfo/settings/emailNot/aC', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'accountAct':  document.getElementById('aC').checked
            })
        })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error('Error:', error));
})

document.getElementById('sI').addEventListener('click', () => {

    fetch('http://localhost:4000/UserProfile/personalInfo/settings/emailNot/sI', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'socialInt':  document.getElementById('sI').checked
            })
        })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error('Error:', error));
})

document.getElementById('oU1').addEventListener('click', () => {

    fetch('http://localhost:4000/UserProfile/personalInfo/settings/emailNot/oU1', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'orderUpdateClick':  document.getElementById('oU1').checked
            })
        })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error('Error:', error));
})

document.getElementById('mP1').addEventListener('click', () => {

    fetch('http://localhost:4000/UserProfile/personalInfo/settings/emailNot/mP1', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'marketingPro':  document.getElementById('mP1').checked
            })
        })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error('Error:', error));
})

document.getElementById('aC1').addEventListener('click', () => {

    fetch('http://localhost:4000/UserProfile/personalInfo/settings/emailNot/aC1', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'accountAct':  document.getElementById('aC1').checked
            })
        })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error('Error:', error));
})

document.getElementById('sI1').addEventListener('click', () => {

    fetch('http://localhost:4000/UserProfile/personalInfo/settings/emailNot/sI1', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'socialInt':  document.getElementById('sI1').checked
            })
        })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error('Error:', error));
})
document.getElementById('oU2').addEventListener('click', () => {

    fetch('http://localhost:4000/UserProfile/personalInfo/settings/emailNot/oU2', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'orderUpdateClick':  document.getElementById('oU2').checked
            })
        })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error('Error:', error));
})


document.getElementById('aC2').addEventListener('click', () => {

    fetch('http://localhost:4000/UserProfile/personalInfo/settings/emailNot/aC2', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'accountAct':  document.getElementById('aC2').checked
            })
        })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error('Error:', error));
})

document.getElementById('sA').addEventListener('click', () => {

    fetch('http://localhost:4000/UserProfile/personalInfo/settings/emailNot/sA', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'socialAlt':  document.getElementById('sA').checked
            })
        })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error('Error:', error));
})

document.getElementById('pA').addEventListener('click', () => {

    fetch('http://localhost:4000/UserProfile/personalInfo/settings/emailNot/pA', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'personalAds':  document.getElementById('pA').checked
            })
        })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error('Error:', error));
})

/*document.getElementById('mP').addEventListener('click', () => {

    fetch('http://localhost:4000/UserProfile/personalInfo/settings/emailNot/mP', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'marketingPro':  document.getElementById('mP').checked
            })
        })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error('Error:', error));
})*/

//Settings => Email notification end



document.addEventListener('DOMContentLoaded', () => {
    //fetch('/api/UserProfile/personalInfo', {
    //fetch('http://18.221.116.240/UserProfile/personalInfo', {
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


//document.addEventListener('DOMContentLoaded', profileVisibility);

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
    
            //fetch('/api/userProfileImgUpload', {
            //fetch('http://18.221.116.240/userProfileImgUpload', {
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
        //fetch('http://18.221.116.240/getuserProfileImg', {
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
    event.preventDefault();
        if(confirm("Are you sure you want to delete your account?") == true){
           // fetch('http://18.221.116.240/UserProfile/deletAccount', {
            fetch('http://localhost:4000/UserProfile/deletAccount', {
                method: 'DELETE',
                credentials: 'include',
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        } else {
            document.getElementById('D&P').click();
        }
});

document.getElementById('PInfo').addEventListener('click', () => {
    const EditSession = sessionStorage.setItem('EditSession', "PersonalInfo");
   // document.getElementById('ediftForm').action = `18.221.116.240/UserProfile/personalInfo/${EditSession}`
    document.getElementById('ediftForm').action = `/UserProfile/personalInfo/${EditSession}`
    document.getElementById('saveEdit').type = "Submit";

    document.getElementById('inputOne').name = "FirstName";
})



