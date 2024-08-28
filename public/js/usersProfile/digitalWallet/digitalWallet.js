let hasSelected = false;
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

    // Set canvas dimensions to match the video dimensions
    canvas.width = videoEl.videoWidth;
    canvas.height = videoEl.videoHeight;

    // Draw the current frame from the video element onto the canvas
    context.drawImage(videoEl, 0, 0, canvas.width, canvas.height);

})

document.querySelectorAll('.ninContinue').forEach(button => {
    button.addEventListener('click', () => {
        if (!hasSelected) {
            hasSelected = true;
           /* document.querySelector(".id").style.display = 'none';
            document.querySelector(".utility").style.display = 'none';
            */
           document.querySelector(".identity").style.display = "none"
            document.querySelector(".selfiee").style.display = 'block';
            document.querySelector(".selfie").style.display = 'block';
        }
    });
});

document.querySelectorAll('.utiContinue').forEach(button => {
    button.addEventListener('click', () => {
        if (!hasSelected) {
            hasSelected = true;
          /*  document.querySelector(".id").style.display = 'none';
            document.querySelector(".nin").style.display = 'none';
            */
            document.querySelector(".identity").style.display = "none"
            document.querySelector(".selfiee").style.display = 'block';
            document.querySelector(".selfie").style.display = 'block';
        }
    });
});

document.querySelectorAll('.idContinue').forEach(button => {
    button.addEventListener('click', () => {
        if (!hasSelected) {
            hasSelected = true;
           /* document.querySelector(".utility").style.display = 'none';
            document.querySelector(".nin").style.display = 'none';
            */
            document.querySelector(".identity").style.display = "none"
            document.querySelector(".selfiee").style.display = 'block';
            document.querySelector(".selfie").style.display = 'block';
        }
    });
});
