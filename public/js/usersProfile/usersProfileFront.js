//alert("js connected")
 document.getElementsByClassName("inventoryAddItem")[0].style.display = "none"
 document.getElementsByClassName("trackOrders")[0].style.display = "none"
let dashBoardEl = document.getElementById("Dashboard")

let inventoryAddItemsEl = document.getElementById("inventoryAddItems")
inventoryAddItemsEl.onclick = inventoryAddItems

let goBackEl =  document.getElementById("goBack")
goBackEl.onclick = goBack

let personalInformationEl = document.getElementById("personalInformation")
personalInformationEl.onclick = personalInformation

let orderEl = document.getElementById("orders")
orderEl.onclick = orders

let inventoryEl = document.getElementById("inventory")
inventoryEl.onclick = inventory

let inventoryAddItemsGoBackEl = document.getElementById("inventoryGoBack")
inventoryAddItemsGoBackEl.onclick = inventoryGoBack

let orderHistoryEl = document.getElementById("orderHistory").onclick = ()=> {
    document.getElementsByClassName("orderHistory")[0].style.display = "block"
    document.getElementsByClassName("trackOrders")[0].style.display = "none"

}

let  trackOrderEL = document.getElementById("trackOrder").onclick =()=> {
    document.getElementsByClassName("orderHistory")[0].style.display = "none"
    document.getElementsByClassName("trackOrders")[0].style.display = "block"
}
let notificationsEl = document.getElementById("notifications")
notificationsEl.onclick = notifications

 document.getElementById("contactSupport").onclick = () => {
    document.getElementsByClassName("FAQ")[0].style.display = "none"
    document.getElementsByClassName("contactSupport")[0].style.display = "block"
 }

 document.getElementById("FAQ").onclick = () => {
    document.getElementsByClassName("FAQ")[0].style.display = "block"
    document.getElementsByClassName("contactSupport")[0].style.display = "none"
 }
let helpEl = document.getElementById("help")
helpEl.onclick = () => {
    
    document.getElementsByClassName("personalPersonalInformation")[0].style.display = "none"
    document.getElementsByClassName("Orders")[0].style.display = "none"
        document.getElementsByClassName("inventoryAddItem")[0].style.display = "none"
           document.getElementsByClassName("inventory")[0].style.display = "none"
           document.getElementsByClassName("notifications")[0].style.display = "none"
           document.getElementsByClassName("dataAndPrivacy")[0].style.display = "none"
           document.getElementsByClassName("setting")[0].style.display = "none"
           document.getElementsByClassName("mainhelpAndSupport")[0].style.display = "block"

           if(window.innerWidth <= 768) {
            document.getElementsByClassName("dashNav")[0].style.display = "none"
            }else {
                settingsEl.style.borderLeft = "0px"
                helpEl.style.borderLeft = "10px solid #49C01F"
                helpEl.style.borderLeft = "0px"
                dataAndPrivacyEl.style.borderLeft = "0px"
                notificationsEl.style.borderLeft = "0px"
                inventoryEl.style.borderLeft = "0px"
                orderEl.style.borderLeft = "0px"
            inventoryEl.style.borderBottomLeftRadius = "0px"
            inventoryEl.style.borderTopLeftRadius = "0px"
                personalInformationEl.style.borderLeft = "0px"
            }
}
let settingsEl = document.getElementById("settings")
settingsEl.onclick = () => {

    document.getElementsByClassName("personalPersonalInformation")[0].style.display = "none"
    document.getElementsByClassName("Orders")[0].style.display = "none"
        document.getElementsByClassName("inventoryAddItem")[0].style.display = "none"
           document.getElementsByClassName("inventory")[0].style.display = "none"
           document.getElementsByClassName("notifications")[0].style.display = "none"
           document.getElementsByClassName("dataAndPrivacy")[0].style.display = "none"
           document.getElementsByClassName("setting")[0].style.display = "block"
           document.getElementsByClassName("mainhelpAndSupport")[0].style.display = "none"

           if(window.innerWidth <= 768) {
            document.getElementsByClassName("dashNav")[0].style.display = "none"
            }else {
                settingsEl.style.borderLeft = "10px solid #49C01F"
                 helpEl.style.borderLeft = "0px"
                dataAndPrivacyEl.style.borderLeft = "0px"
                notificationsEl.style.borderLeft = "0px"
                inventoryEl.style.borderLeft = "0px"
                orderEl.style.borderLeft = "0px"
            inventoryEl.style.borderBottomLeftRadius = "0px"
            inventoryEl.style.borderTopLeftRadius = "0px"
                personalInformationEl.style.borderLeft = "0px"
            }
} 

let dataAndPrivacyEl = document.getElementById("dataAndPrivacy")
dataAndPrivacyEl.onclick = () => {
    
    document.getElementsByClassName("personalPersonalInformation")[0].style.display = "none"
    document.getElementsByClassName("Orders")[0].style.display = "none"
        document.getElementsByClassName("inventoryAddItem")[0].style.display = "none"
           document.getElementsByClassName("inventory")[0].style.display = "none"
           document.getElementsByClassName("notifications")[0].style.display = "none"
           document.getElementsByClassName("setting")[0].style.display = "none"
           document.getElementsByClassName("dataAndPrivacy")[0].style.display = "block"
           document.getElementsByClassName("mainhelpAndSupport")[0].style.display = "none"

           if(window.innerWidth <= 768) {
            document.getElementsByClassName("dashNav")[0].style.display = "none"
            }else {
                dataAndPrivacyEl.style.borderLeft = "10px solid #49C01F"
                 helpEl.style.borderLeft = "0px"
                notificationsEl.style.borderLeft = "0px"
                inventoryEl.style.borderLeft = "0px"
                orderEl.style.borderLeft = "0px"
            inventoryEl.style.borderBottomLeftRadius = "0px"
            inventoryEl.style.borderTopLeftRadius = "0px"
                personalInformationEl.style.borderLeft = "0px"
                 settingsEl.style.borderLeft ="0px"
            }
}
function notifications() {
    document.getElementsByClassName("personalPersonalInformation")[0].style.display = "none"
document.getElementsByClassName("Orders")[0].style.display = "none"
    document.getElementsByClassName("inventoryAddItem")[0].style.display = "none"
       document.getElementsByClassName("inventory")[0].style.display = "none"
       document.getElementsByClassName("dataAndPrivacy")[0].style.display = "none"
document.getElementsByClassName("setting")[0].style.display = "none"
document.getElementsByClassName("mainhelpAndSupport")[0].style.display = "none"
document.getElementsByClassName("notifications")[0].style.display = "block"
        
if(window.innerWidth <= 768) {
document.getElementsByClassName("dashNav")[0].style.display = "none"
}
else {
    notificationsEl.style.borderLeft = "10px solid #49C01F"
     helpEl.style.borderLeft = "0px"
    dataAndPrivacyEl.style.borderLeft = "0px"
    inventoryEl.style.borderLeft = "0px"
    orderEl.style.borderLeft = "0px"
inventoryEl.style.borderBottomLeftRadius = "0px"
inventoryEl.style.borderTopLeftRadius = "0px"
    personalInformationEl.style.borderLeft = "0px"
     settingsEl.style.borderLeft ="0px"
}
}

function inventoryGoBack() {
    document.getElementsByClassName("inventoryAddItem")[0].style.display = "none"
    document.getElementsByClassName("inventory")[0].style.display = "block"  
    document.getElementsByClassName("goBack")[0].style.display = "block";


}


function inventoryAddItems () {
    document.getElementsByClassName("inventoryAddItem")[0].style.display = "block"
     document.getElementsByClassName("inventory")[0].style.display = "none"
     document.getElementsByClassName("goBack")[0].style.display = "none";

     if(window.innerWidth >= 768) {
        inventoryAddItemsGoBackEl.style.display = 'none'
     }
}
function personalInformation() {
        document.getElementsByClassName("inventory")[0].style.display = "none"
        document.getElementsByClassName("notifications")[0].style.display = "none"
        document.getElementsByClassName("dataAndPrivacy")[0].style.display = "none"
         document.getElementsByClassName("setting")[0].style.display = "none"
         document.getElementsByClassName("mainhelpAndSupport")[0].style.display = "none"
    if(window.innerWidth <= 768) {
document.getElementsByClassName("dashNav")[0].style.display = "none"
document.getElementsByClassName("Orders")[0].style.display = "none"

    document.getElementsByClassName("personalPersonalInformation")[0].style.display = "block"
} else {
    document.getElementsByClassName("personalPersonalInformation")[0].style.display = "block"
    personalInformationEl.style.borderLeft = "10px solid #49C01F"
    personalInformationEl.style.borderBottomLeftRadius = "0px"
     helpEl.style.borderLeft = "0px"
     notificationsEl.style.borderLeft = "0px"
    personalInformationEl.style.borderTopLeftRadius = "0px"
    document.getElementsByClassName("Orders")[0].style.display = "none"
    orderEl.style.borderLeft = "0px"
    dataAndPrivacyEl.style.borderLeft = "0px"
    inventoryEl.style.borderLeft = "0px"
     settingsEl.style.borderLeft ="0px"
}
}

function orders()  {
     document.getElementsByClassName("inventory")[0].style.display = "none"
     document.getElementsByClassName("notifications")[0].style.display = "none"
      document.getElementsByClassName("setting")[0].style.display = "none"
      document.getElementsByClassName("mainhelpAndSupport")[0].style.display = "none"
    if(window.innerWidth <= 768) {
document.getElementsByClassName("dashNav")[0].style.display = "none"
document.getElementsByClassName("dataAndPrivacy")[0].style.display = "none"
document.getElementsByClassName("personalPersonalInformation")[0].style.display = "none"

document.getElementsByClassName("Orders")[0].style.display = "block"
} else {
    orderEl.style.borderLeft = "10px solid #49C01F"
     helpEl.style.borderLeft = "0px"
    orderEl.style.borderBottomLeftRadius = "0px"
    orderEl.style.borderTopLeftRadius = "0px"
    inventoryEl.style.borderLeft = "0px"
        document.getElementsByClassName("Orders")[0].style.display = "block"
    personalInformationEl.style.borderLeft = "0px"
    document.getElementsByClassName("personalPersonalInformation")[0].style.display = "none"
     notificationsEl.style.borderLeft = "0px"
     dataAndPrivacyEl.style.borderLeft = "0px"
      settingsEl.style.borderLeft ="0px"
       
}
}

function inventory() {
   
document.getElementsByClassName("personalPersonalInformation")[0].style.display = "none"
document.getElementsByClassName("Orders")[0].style.display = "none"
document.getElementsByClassName("notifications")[0].style.display = "none"    
document.getElementsByClassName("inventoryAddItem")[0].style.display = "none"
document.getElementsByClassName("dataAndPrivacy")[0].style.display = "none"
document.getElementsByClassName("mainhelpAndSupport")[0].style.display = "none"
 document.getElementsByClassName("setting")[0].style.display = "none"
       document.getElementsByClassName("inventory")[0].style.display = "block"

   

if(window.innerWidth <= 768) {
document.getElementsByClassName("dashNav")[0].style.display = "none"
}else {
    inventoryEl.style.borderLeft = "10px solid #49C01F"
     helpEl.style.borderLeft = "0px"
        orderEl.style.borderLeft = "0px"
    inventoryEl.style.borderBottomLeftRadius = "0px"
    inventoryEl.style.borderTopLeftRadius = "0px"
    notificationsEl.style.borderLeft = "0px"
        personalInformationEl.style.borderLeft = "0px"
        dataAndPrivacyEl.style.borderLeft = "0px"
        settingsEl.style.borderLeft ="0px"
}

}


function goBack() {

    if (window.innerWidth <= 768) {
    document.getElementsByClassName("dashNav")[0].style.display = "flex"
}
}