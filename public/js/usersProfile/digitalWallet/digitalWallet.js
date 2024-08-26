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
    
   
    const imageDataURL = canvas.toDataURL('image/png');
    console.log(imageDataURL);

    
});

// Utility bill selection
document.querySelectorAll('.utiContinue').forEach(button => {
    button.addEventListener('click', () => {
        if (!isUtilityBillSelected) {
            isUtilityBillSelected = true;
            alert("Utility Bill has been attached");
            hasSelected = false; 
            alert("Utility Bill is already attached");
        }
    });
});

// NIN selection
document.querySelectorAll('.ninContinue').forEach(button => {
    button.addEventListener('click', () => {
        if (!isUtilityBillSelected) {
            alert("Please attach your Utility Bill first.");
        } else if (!documentSelected) {
            documentSelected = true;
            hasSelected = true;
            document.querySelector(".identity").style.display = "none";
            document.querySelector(".selfiee").style.display = 'block';
            document.querySelector(".selfie").style.display = 'block';
        } else {
            alert("You can only select one document (NIN or ID Card).");
        }
    });
});

// ID card selection
document.querySelectorAll('.idContinue').forEach(button => {
    button.addEventListener('click', () => {
        if (!isUtilityBillSelected) {
            alert("Please attach your Utility Bill first.");
        } else if (!documentSelected) {
            documentSelected = true;
            hasSelected = true;
            document.querySelector(".identity").style.display = "none";
            document.querySelector(".selfiee").style.display = 'block';
            document.querySelector(".selfie").style.display = 'block';
        } else {
            alert("You can only select one document (NIN or ID Card).");
        }
    });
});
