document.addEventListener('DOMContentLoaded', sessionStorage.removeItem('inventoryimage')); 

document.getElementById('inventoryForm').addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission
    
    // Create a FormData object from the form
    const form = document.getElementById('inventoryForm');
    const formData = new FormData(form);

    // You can check if required fields are filled in
    if (!formData.get('ItemName') || !formData.get('Price') || !formData.get('Quantity') || !formData.get('WeightKG') || !formData.get('Description')) {
        alert('Fill in the required Information(s)');
        return;
    }

    try {
        // Send the form data using fetch
        //const response = await fetch('http://localhost:4000/newInt_ImgUpload', {
        const response = await fetch('http://feedbag-server-alb-1-570128653.us-east-2.elb.amazonaws.com/newInt_ImgUpload', {
            method: 'POST',
            credentials: 'include',
            body: formData // Automatically handles file uploads
        });

        if (response.ok) {
            alert('Inventory Updated.');
            //window.location.href = '/userProfile';
            window.location.reload();
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});


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
            //console.log(data)
            const inventoryList = document.querySelector('.inventoryList');
        
            // Clear any existing rows
            inventoryList.innerHTML = '';

            // Loop through the fetched data and create new rows
            data.forEach(item => {
                //console.log(item);
                const eachInventory = document.createElement('div');
                eachInventory.classList.add('eachInventory');
                //const imgSrc = `data:${item.image.contentType};base64,${item.image.data}`;
                //console.log(imgSrc);
                eachInventory.innerHTML = `
                    <div class="itemName">
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

document.getElementById('allitems').addEventListener('click', async () => {
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
        
            //console.log(data);
            // Clear any existing rows
            inventoryList.innerHTML = '';

            // Loop through the fetched data and create new rows
            data.forEach(item => {
                //console.log(item.image.data);
                const eachInventory = document.createElement('div');
                eachInventory.classList.add('eachInventory');

                //const imgSrc = `data:${item.image.contentType};base64,${item.image.data}`;

                eachInventory.innerHTML = `
                    <div class="itemName">
                        <div><h4>${item.Name}</h4></div>
                    </div>
                    <div class="itemDate"><h3>${new Date(item.DateAdded).toLocaleDateString()}</h3></div>
                    <div class="itemPrice"><h3>${item.Price.toLocaleString()}</h3></div>
                    <div class="itemQuantity"><h3>${item.Quantity}</h3></div>
                `;
                
                // Append the new row to the table
                inventoryList.appendChild(eachInventory);
            });
        });
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('outofstock').addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:4000/Inventory/outOfStock', { 
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
                //console.log(item);
                const eachInventory = document.createElement('div');
                eachInventory.classList.add('eachInventory');
                
                eachInventory.innerHTML = `
                    <div class="itemName">
                        
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
});

document.getElementById('lowstock').addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:4000/Inventory/lowStock', { 
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
                console.log(item.Quantity);
                const eachInventory = document.createElement('div');
                eachInventory.classList.add('eachInventory');
                
                eachInventory.innerHTML = `
                    <div class="itemName">
                        
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
});

//Inventory search function starts here
const sh = document.querySelector('.inventorySearch input');

sh.addEventListener('input', () => {
    const inList = document.querySelectorAll('.inventoryBody .inventoryList .eachInventory');
    const searchInput = sh.value.toLowerCase(); // Convert input to lowercase for case-insensitive search

    inList.forEach(item => {
        const listedItems = item.textContent.toLowerCase(); // Convert content to lowercase

        // Check if the item contains the search input
        const matchFound = listedItems.includes(searchInput);
        
        if (matchFound) {
            item.classList.remove('hide'); // Show the item if it matches
        } else {
            item.classList.add('hide'); // Hide the item if it doesn't match
        }
    });
});


    

    

