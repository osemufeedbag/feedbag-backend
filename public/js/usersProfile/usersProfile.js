//alert("js connected")

let dashBoardEl = document.getElementById("Dashboard")

let goBackEl =  document.getElementById("goBack")
goBackEl.onclick = goBack

let personalInformationEl = document.getElementById("personalInformation")
personalInformationEl.onclick = personalInformation

function personalInformation() {
document.getElementsByClassName("dashNav")[0].style.display = "none"
}

function goBack() {
    document.getElementsByClassName("dashNav")[0].style.display = "flex"
}