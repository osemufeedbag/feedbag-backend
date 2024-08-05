//alert("js connected")

let dashBoardEl = document.getElementById("Dashboard")

let goBackEl =  document.getElementById("goBack")
goBackEl.onclick = goBack

let personalInformationEl = document.getElementById("personalInformation")
personalInformationEl.onclick = personalInformation

let orderEl = document.getElementById("orders")
orderEl.onclick = orders

function personalInformation() {
    if(window.innerWidth <= 768) {
document.getElementsByClassName("dashNav")[0].style.display = "none"
} else {
    document.getElementsByClassName("personalPersonalInformation")[0].style.display = "block"
    personalInformationEl.style.borderLeft = "10px solid #49C01F"
    personalInformationEl.style.borderBottomLeftRadius = "0px"
    personalInformationEl.style.borderTopLeftRadius = "0px"
    document.getElementsByClassName("Orders")[0].style.display = "none"
    orderEl.style.borderLeft = "0px"
}
}

function orders()  {
    if(window.innerWidth <= 768) {
document.getElementsByClassName("dashNav")[0].style.display = "none"
personalInformationEl.style.display = "none"
} else {
    orderEl.style.borderLeft = "10px solid #49C01F"
    orderEl.style.borderBottomLeftRadius = "0px"
    orderEl.style.borderTopLeftRadius = "0px"
        document.getElementsByClassName("Orders")[0].style.display = "block"
    personalInformationEl.style.borderLeft = "0px"
    document.getElementsByClassName("personalPersonalInformation")[0].style.display = "none"
}
}


function goBack() {

    if (window.innerWidth <= 768) {
    document.getElementsByClassName("dashNav")[0].style.display = "flex"
}
}