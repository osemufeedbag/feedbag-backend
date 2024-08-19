document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const loadingMessage = document.createElement('div');
    loadingMessage.innerText = 'Hold on we are processing your request ....';
    document.body.appendChild(loadingMessage);

    fetch("https://api.feedbagagrihub.com/mail.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((response) => {
            alert(response.message + ", we will get back to you shortly");
            document.getElementById("contact-form").reset();
        })
        .catch((error) => {
            alert("Error: " + error.message);
        })
        .finally(() => {
            document.body.removeChild(loadingMessage);
        });
});
