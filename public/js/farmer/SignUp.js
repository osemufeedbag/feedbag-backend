
const userStatus = sessionStorage.getItem('UserStatus');
console.log(document.getElementById("regFrom").action = `http://localhost:4000/access/register/${userStatus}`)

/*function handleSubmit(event) {
        event.preventDefault();
        // Your form handling code here
        console.log('Form submitted!');
};*/