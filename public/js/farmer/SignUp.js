

const userStatus = sessionStorage.getItem('UserStatus');
console.log(document.getElementById("regFrom").action = `http://localhost:4000/access/register/${userStatus}`)

function reset(e) {
        e.preventDefault();
};

