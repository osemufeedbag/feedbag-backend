const loginType = sessionStorage.getItem('loginType');
console.log(document.getElementById("loginFrom").action = `http://localhost:4000/access/login/${loginType}`)