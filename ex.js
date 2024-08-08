fetch('http://localhost:4000/protected-route', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${yourAccessToken}`, // Include your token here
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
