// Function to fetch data from the API and update the table
async function updateInventoryList() {
    try {
        const response = await fetch('http://localhost:4000/Inventory/allInventory/List', { 
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include' 
        })

        .then(async response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`); 
            }
            return response.json();
            })
        .then(data => {
            const inventoryList = document.querySelector('.inventoryList');
        
            // Clear any existing rows
            inventoryList.innerHTML = '';

            // Loop through the fetched data and create new rows
            data.forEach(item => {
                console.log(item);
                const eachInventory = document.createElement('div');
                eachInventory.classList.add('eachInventory');
                
                eachInventory.innerHTML = `
                    <div class="itemName">
                        <div><img src="../../img/farmer/agrihub farmer.png" alt=" "></div>
                        <div><h4>${item.Name}</h4></div>
                    </div>
                    <div class="itemDate"><h3>${new Date(item.DateAdded).toLocaleDateString()}</h3></div>
                    <div class="itemPrice"><h3>${item.Price.toLocaleString()}</h3></div>
                    <div class="itemQuantity"><h3>${item.Quantity}</h3></div>
                `;
                
                // Append the new row to the table
                inventoryList.appendChild(eachInventory);
            })
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function to update the inventory list when the page loads
document.addEventListener('DOMContentLoaded', updateInventoryList);
