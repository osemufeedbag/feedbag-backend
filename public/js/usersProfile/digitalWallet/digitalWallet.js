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

    // Convert the canvas content to a Base64-encoded image
    const imageDataUrl = canvas.toDataURL('image/png');

    // Send the captured image to the server
    try {
        const response = await fetch('/your-upload-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ image: imageDataUrl }),
        });

        if (response.ok) {
            // Hide the video element and replace it with the captured image
            videoEl.style.display = 'none';

            // Create an img element to display the captured image
            const imgEl = document.createElement('img');
            imgEl.src = imageDataUrl;

            // Insert the img element where the video was
            videoEl.parentNode.insertBefore(imgEl, videoEl.nextSibling);
        } else {
            console.error('Failed to send the image to the server.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});


document.querySelectorAll('.kycContinue').forEach(button => {
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
