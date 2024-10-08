window.onload = () => {
    dashBoardEl.onclick(); 
}



let inventoryAddItemsEl = document.getElementById("inventoryAddItems")
inventoryAddItemsEl.onclick = inventoryAddItems

let goBackEl = document.getElementById("goBack")
goBackEl.onclick = goBack

let personalInformationEl = document.getElementById("personalInformation")
personalInformationEl.onclick = personalInformation

let orderEl = document.getElementById("orders")
orderEl.onclick = orders

let inventoryEl = document.getElementById("inventory")
inventoryEl.onclick = inventory

let settingsEl = document.getElementById("settings")
settingsEl.onclick = settings

let helpEl = document.getElementById("help")
helpEl.onclick = help

let dataAndPrivacyEl = document.getElementById("dataAndPrivacy")
dataAndPrivacyEl.onclick = dataAndPrivacy

let menuEl = document.getElementById("menu")
menuEl.onclick = menu


const faqButtons = document.querySelectorAll('.faqButton');

faqButtons.forEach(button => {
    button.onclick = () => {
        const questionBottom = button.closest('.eachQuestion').querySelector('.eachQuestionBottom');
        const icon = button.querySelector('i');

        if (questionBottom.style.maxHeight && questionBottom.style.maxHeight !== '0px') {
            
            questionBottom.style.maxHeight = '0px';
            icon.style.transform = 'rotate(0deg)';
            
            
            setTimeout(() => {
                questionBottom.style.padding = '0';
            }, 500); 
        } else {
            
            questionBottom.style.maxHeight = questionBottom.scrollHeight + '2px';
            icon.style.transform = 'rotate(45deg)';


            questionBottom.style.padding = '10px 0'; // Adjust padding as needed
        }

    
        questionBottom.style.transition = 'max-height 0.5s ease-in-out, padding 0.5s ease-in-out';
        icon.style.transition = 'transform 0.3s ease-in-out';
    };
});

let dashBoardEl = document.getElementById("Dashboard")
dashBoardEl.onclick = () => {
    document.getElementsByClassName("personalPersonalInformation")[0].style.display = "none"
    document.getElementsByClassName("Orders")[0].style.display = "none"
    document.getElementsByClassName("inventoryAddItem")[0].style.display = "none"
    document.getElementsByClassName("inventory")[0].style.display = "none"
    document.getElementsByClassName("notifications")[0].style.display = "none"
    document.getElementsByClassName("dataAndPrivacy")[0].style.display = "none"
    document.getElementsByClassName("setting")[0].style.display = "none"
    document.getElementsByClassName("mainhelpAndSupport")[0].style.display = "none"
    document.getElementsByClassName("dashboard")[0].style.display = "block"

    if (window.innerWidth <= 768) {
        document.getElementsByClassName("dashNav")[0].style.display = "none"
    } else {
        settingsEl.style.borderLeft = "0px"
        helpEl.style.borderLeft = "0px"
        dashBoardEl.style.borderLeft = "10px solid #49C01F"
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

let inventoryAddItemsGoBackEl = document.getElementById("inventoryGoBack")
inventoryAddItemsGoBackEl.onclick = inventoryGoBack

let orderHistoryEl = document.getElementById("orderHistory").onclick = () => {
    document.getElementsByClassName("orderHistory")[0].style.display = "block"
    document.getElementsByClassName("trackOrders")[0].style.display = "none"
}

let trackOrderEL = document.getElementById("trackOrder").onclick = () => {
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
function contactSupport() {
    document.getElementsByClassName("FAQ")[0].style.display ="none"
     document.getElementsByClassName("contactSupport")[0].style.display ="block"
}
function menu() {
    document.getElementsByClassName("dashNav")[0].style.display = "block";
    document.getElementsByClassName("lapComp")[0].style.display = "none";
}


dashBoardEl.onclick = () => {
    hideAllSections();
    document.getElementsByClassName("dashboard")[0].style.display = "block";
    document.getElementsByClassName("lapComp")[0].style.display = "block";
    updateNavStyles(dashBoardEl);
}


function notifications() {
    hideAllSections();
    document.getElementsByClassName("lapComp")[0].style.display = "block";
    document.getElementsByClassName("notifications")[0].style.display = "block";
    updateNavStyles(notificationsEl);
}



function help() {
    hideAllSections();
    document.getElementsByClassName("lapComp")[0].style.display = "block";
    document.getElementsByClassName("mainhelpAndSupport")[0].style.display = "block";
    updateNavStyles(helpEl);
}

function settings() {
    hideAllSections();
    document.getElementsByClassName("lapComp")[0].style.display = "block";
    document.getElementsByClassName("setting")[0].style.display = "block";
    updateNavStyles(settingsEl);
}

function dataAndPrivacy() {
    hideAllSections();
    document.getElementsByClassName("lapComp")[0].style.display = "block";
    document.getElementsByClassName("dataAndPrivacy")[0].style.display = "block";
    updateNavStyles(dataAndPrivacyEl);
}

function goBack() {
    dashBoardEl.onclick(); 
}

function inventoryGoBack() {
    inventoryEl.onclick(); 
}

function personalInformation() {
    hideAllSections();
    document.getElementsByClassName("lapComp")[0].style.display = "block";
    document.getElementsByClassName("personalPersonalInformation")[0].style.display = "block";
    updateNavStyles(personalInformationEl);
}

function orders() {
    hideAllSections();
    document.getElementsByClassName("lapComp")[0].style.display = "block";
    document.getElementsByClassName("Orders")[0].style.display = "block";
    document.getElementsByClassName("trackOrders")[0].style.display = "none"
    updateNavStyles(orderEl);
}

function inventoryAddItems() {
    hideAllSections();
    document.getElementsByClassName("lapComp")[0].style.display = "block";
    document.getElementsByClassName("inventoryAddItem")[0].style.display = "block";
    updateNavStyles(inventoryEl);
}

function inventory() {
    hideAllSections();
    document.getElementsByClassName("lapComp")[0].style.display = "block";
    document.getElementsByClassName("inventory")[0].style.display = "block";
    updateNavStyles(inventoryEl);
}


function hideAllSections() {
    let sections = ["personalPersonalInformation", "Orders", "inventoryAddItem", "inventory", 
                    "notifications", "dataAndPrivacy", "setting", "mainhelpAndSupport", "dashboard"];
    sections.forEach(section => {
        document.getElementsByClassName(section)[0].style.display = "none";
    });
}


function updateNavStyles(activeEl) {
    if (window.innerWidth <= 768) {
        document.getElementsByClassName("dashNav")[0].style.display = "none";
    } else {
        let elements = [dashBoardEl, settingsEl, helpEl, dataAndPrivacyEl, notificationsEl, 
                        inventoryEl, orderEl, personalInformationEl];
        elements.forEach(el => {
            el.style.borderLeft = "0px";
        });
        activeEl.style.borderLeft = "10px solid #49C01F";
    }
}


let isEditingPersonalInfo = false;
let isEditingFarmInformation = false;
let isEditingBillingInformation = false;

document.getElementById("PInfo").onclick = () => {
    isEditingPersonalInfo = true;

    document.getElementsByClassName("edit")[0].style.display = "flex";
    document.getElementsByClassName("lapComp")[0].style.filter = "blur(8px)";
    document.getElementsByClassName("lapComp")[0].style.opacity = "0.8";
    document.getElementsByClassName("dashNav")[0].style.filter = "blur(8px)";
    document.getElementsByClassName("dashNav")[0].style.opacity = "0.8";

    document.getElementById("labelOne").innerHTML = "Full Name";
    document.getElementById("labelTwo").innerHTML = "Country";
    document.getElementById("labelThree").innerHTML = "Email";
    document.getElementById("labelFour").innerHTML = "Phone Number";
    document.getElementById("labelFive").innerHTML = "Postal Code";
    document.getElementById("labelSix").innerHTML = "Address";

    document.getElementById("inputOne").name = "FirstName";
    document.getElementById("inputTwo").name = "Country";
    document.getElementById("inputThree").name = "Email";
    document.getElementById("inputFour").name = "Phone";
    document.getElementById("inputFive").name = "PostalCode";
    document.getElementById("inputSix").name = "Address";

    document.getElementById("ediftForm").action = "/userProfile/personalInfo/PersonalInfo";
    document.getElementById("saveEdit").type = "submit";
    console.log(document.getElementById("ediftForm").action);
    console.log(document.getElementById("saveEdit").type);
}

document.getElementById("FInfo").onclick = () => {
    isEditingFarmInformation = true;

    document.getElementsByClassName("edit")[0].style.display = "flex";
    document.getElementsByClassName("lapComp")[0].style.filter = "blur(8px)";
    document.getElementsByClassName("lapComp")[0].style.opacity = "0.8";
    document.getElementsByClassName("dashNav")[0].style.filter = "blur(8px)";
    document.getElementsByClassName("dashNav")[0].style.opacity = "0.8";

    document.getElementById("labelOne").innerHTML = "Business Name";
    document.getElementById("labelTwo").innerHTML = "Postal Code";
    document.getElementById("labelThree").innerHTML = "Farm Size";
    document.getElementById("labelFour").innerHTML = "Farm Location";

    document.getElementById("componentFive").style.display = "none";
    document.getElementById("componentSix").style.display = "none";
}

document.getElementById("BInfo").onclick = () => {
    isEditingBillingInformation = true;

    document.getElementsByClassName("edit")[0].style.display = "flex";
    document.getElementsByClassName("lapComp")[0].style.filter = "blur(8px)";
    document.getElementsByClassName("lapComp")[0].style.opacity = "0.8";
    document.getElementsByClassName("dashNav")[0].style.filter = "blur(8px)";
    document.getElementsByClassName("dashNav")[0].style.opacity = "0.8";


    document.getElementById("labelOne").innerHTML = "Card Holder";
    document.getElementById("labelTwo").innerHTML = "Payment Method";
    document.getElementById("labelThree").innerHTML = "Card Number";
    document.getElementById("labelFour").innerHTML = "Billing Address";

    document.getElementById("componentFive").style.display = "none";
    document.getElementById("componentSix").style.display = "none";
}

document.getElementById("cancelEdit").onclick = ()=> {
    event.preventDefault()
    document.getElementsByClassName("edit")[0].style.display = "none";
    document.getElementsByClassName("lapComp")[0].style.filter = "blur(0px)";
    document.getElementsByClassName("lapComp")[0].style.opacity = "1";
    document.getElementsByClassName("dashNav")[0].style.filter = "blur(0px)";
    document.getElementsByClassName("dashNav")[0].style.opacity = "1";
}

document.getElementById("saveEdit").onclick = (event) => {
    event.preventDefault();
    document.getElementsByClassName("edit")[0].style.display = "none";
    document.getElementsByClassName("lapComp")[0].style.filter = "blur(0px)";
    document.getElementsByClassName("lapComp")[0].style.opacity = "1";
    document.getElementsByClassName("dashNav")[0].style.filter = "blur(0px)";
    document.getElementsByClassName("dashNav")[0].style.opacity = "1";
}
    

    if (isEditingPersonalInfo) {
        isEditingPersonalInfo = false;

        document.getElementById("name1").innerHTML = document.getElementById("inputOne").value;
        document.getElementById("country").innerHTML = document.getElementById("inputTwo").value;
        document.getElementById("email").innerHTML = document.getElementById("inputThree").value;
        document.getElementById("phone").innerHTML = document.getElementById("inputFour").value;
        document.getElementById("postalcode").innerHTML = document.getElementById("inputFive").value;
        document.getElementById("address").innerHTML = document.getElementById("inputSix").value;

        clearInputs();
    } else if (isEditingFarmInformation) {
        isEditingFarmInformation = false;

        document.getElementById("businessname1").innerHTML = document.getElementById("inputOne").value;
        document.getElementById("farmpostalcode").innerHTML = document.getElementById("inputTwo").value;
        document.getElementById("fsize").innerHTML = document.getElementById("inputThree").value;
        document.getElementById("farmLocation").innerHTML = document.getElementById("inputFour").value;

        clearInputs();
    } else if (isEditingBillingInformation) {
        isEditingBillingInformation = false;

        document.getElementById("cardholder").innerHTML = document.getElementById("inputOne").value;
        document.getElementById("paymentmethod").innerHTML = document.getElementById("inputTwo").value;
        document.getElementById("cardnos").innerHTML = document.getElementById("inputThree").value;
        document.getElementById("billingAddress").innerHTML = document.getElementById("inputFour").value;

        clearInputs();
    }


function clearInputs() {
    document.getElementById("inputOne").value = "";
    document.getElementById("inputTwo").value = "";
    document.getElementById("inputThree").value = "";
    document.getElementById("inputFour").value = "";
    if (document.getElementById("inputFive")) document.getElementById("inputFive").value = "";
    if (document.getElementById("inputSix")) document.getElementById("inputSix").value = "";
}
