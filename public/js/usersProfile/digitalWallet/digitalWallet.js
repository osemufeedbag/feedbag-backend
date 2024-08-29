let hasSelected = false;
let isUtilityBillSelected = false;
let documentSelected = false; 
const videoEl = document.getElementById("video");
const buttonEl = document.getElementById("capture");


navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        videoEl.srcObject = stream;
    })
    .catch((error) => {
        console.log(error);
    });


buttonEl.addEventListener("click", async (event) => {
    event.preventDefault();

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

   
    canvas.width = videoEl.videoWidth;
    canvas.height = videoEl.videoHeight;

    context.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
    

   
})
document.querySelectorAll('.utiContinue').forEach(button => {
    button.addEventListener('click', () => {
        if (document.getElementById("utility").files.length > 0) {
            isUtilityBillSelected = true;
            alert("Utility Bill has been attached");
            document.getElementsByClassName("NIN")[0].style.display = "flex"
            document.getElementsByClassName("id")[0].style.display = "flex"
            document.getElementsByClassName("utility")[0].style.display = "none"
        }else {
            alert("Attach a copy of your Utility Bill")
        }
    });
});

// NIN selection
document.querySelectorAll('.ninContinue').forEach(button => {
    button.addEventListener('click', () => {
        if(document.getElementById("ninId").files.length > 0) {
        if (hasSelected === true) {
            alert("A file has already been attached");
        } else if (hasSelected === false) {
            documentSelected = true;
            hasSelected = true;
            document.querySelector(".identity").style.display = "none";
            document.getElementsByClassName("id").style.display = "none";
            document.querySelector(".selfiee").style.display = 'flex';
            document.querySelector(".selfie").style.display = 'flex';
        } } else {
            alert("Please Attach your NIN")
        }
    
    });
});

// ID card selection
document.querySelectorAll('.idContinue').forEach(button => {
    button.addEventListener('click', () => {
        if(document.getElementById("id").files.length > 0) {
        if (hasSelected === true) {
            alert("A file has already been attached");
        } else if (hasSelected === false) {
            documentSelected = true;
            hasSelected = true;
            document.querySelector(".identity").style.display = "none";
            document.getElementsByClassName("id").style.display = "none";
            document.querySelector(".selfiee").style.display = 'flex';
            document.querySelector(".selfie").style.display = 'flex';
        } 
    }else {
        alert("Please attach your Id Card")
    }
    });
});
