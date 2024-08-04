let farmerStatusEl = document.getElementById("farmerCheckbox")
farmerStatusEl.onclick = farmerStatus

let aggregatorStatusEl = document.getElementById("aggregatorCheckbox")
aggregatorStatusEl.onclick = aggregatorStatus

let consumerStatusEl = document.getElementById("consumerCheckbox")
consumerStatusEl.onclick = consumerStatus

function farmerStatus() {

document.getElementById("aggregatorCheckbox").checked = false
document.getElementById("consumerCheckbox").checked = false
}

function aggregatorStatus() {
    document.getElementById("farmerCheckbox").checked = false
    document.getElementById("consumerCheckbox").checked = false
}

function consumerStatus() {
    document.getElementById("farmerCheckbox").checked = false
    document.getElementById("aggregatorCheckbox").checked = false
}

