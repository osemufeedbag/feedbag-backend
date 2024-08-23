navigator.getUserMedia(
    // Options
    {
        video: true
    },
    // Success Callback
    function(stream){

        // Create an object URL for the video stream and
        // set it as src of our HTLM video element.
        video.src = window.URL.createObjectURL(stream);

        // Play the video element to show the stream to the user.
        video.play();

    },
    // Error Callback
    function(err){

        // Most common errors are PermissionDenied and DevicesNotFound.
        console.error(err);

    }
);