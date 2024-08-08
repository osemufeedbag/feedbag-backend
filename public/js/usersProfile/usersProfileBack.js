function call (req, res, next) {
const cookies = req.cookies;
        //if (!cookies?.jwt) return res.sendStatus(401);
        console.log(cookies.accjwt);
        const accessToken = cookies.accjwt;
        fetch('http://localhost:4000//UserProfile/personalInfo', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`, // Include your token here
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    };