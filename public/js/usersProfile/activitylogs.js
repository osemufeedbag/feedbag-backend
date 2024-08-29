document.addEventListener('DOMContentLoaded', () => {
    //fetch('http://18.221.116.240/Als/activityLogs', {
    fetch('http://localhost:4000/Als/activityLogs', {
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
            //console.log(data)

            let ln = data.userActivity;
            const arryLength = ln.length;
            console.log(arryLength);
            if(arryLength == 0) {
                document.getElementById('log1').innerText = "----";
                document.getElementById('log2').innerText = "----";
                document.getElementById('log3').innerText = "----";
            } else {


                data.userActivity && data.userActivity[arryLength - 1] && data.userActivity[arryLength - 1].Status ? 
            document.getElementById('log1').innerText = data.userActivity[arryLength - 1].Status : document.getElementById('log1').innerText = "----";

            data.userActivity &&  data.userActivity[arryLength - 2] && data.userActivity[arryLength - 2].Status ? 
            document.getElementById('log2').innerText = data.userActivity[arryLength - 2].Status : document.getElementById('log2').innerText = "----";

            data.userActivity && data.userActivity[arryLength - 3] && data.userActivity[arryLength - 3].Status? 
            document.getElementById('log3').innerText = data.userActivity[arryLength - 3].Status : document.getElementById('log3').innerText = "----";
            }     
        })
        .catch(error => console.error('Error:', error));
    });

    