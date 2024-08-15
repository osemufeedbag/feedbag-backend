document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:4000/Inventory/allInventory/Count', {
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
            console.log("totalProduct: " + data)
           
            data ? document.getElementById('totalproducts').innerText = data : document.getElementById('totalproducts').innerText = "----";
        })
        .catch(error => console.error('Error:', error));
    });


    document.addEventListener('DOMContentLoaded', () => {
        fetch('http://localhost:4000/Order/totalOrder', {
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
                console.log("totalOrder: " + data)
               
                data ? document.getElementById('totalorders').innerText = data : document.getElementById('totalorders').innerText = "----";
            })
            .catch(error => console.error('Error:', error));
        });
    
        
    
    
    


