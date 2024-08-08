fetch('/UserProfile/personalInfo')
    .then(res => res.json())
    .then(data => console.log(data));