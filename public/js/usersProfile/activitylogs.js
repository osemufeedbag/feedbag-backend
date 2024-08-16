document.addEventListener('DOMContentLoaded', () => {
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

document.getElementById('submitButton').addEventListener("click", () => {
    const itemname = document.getElementById('ItemName').value
    const Price = document.getElementById('Price').value
    const Quantity = document.getElementById('Quantity').value
    const WeightKG = document.getElementById('WeightKG').value
    const Description = document.getElementById('Description').value

    if(!itemname || !Price || !Quantity || !WeightKG || !Description) {
        alert('Fill in the required Information(s)');
    } else {
        document.getElementById('inventoryForm').action = "/Inventory/addInventory";
        document.getElementById("submitButton").type = "submit";
        alert('Inevntroy Updated.');
    }
})