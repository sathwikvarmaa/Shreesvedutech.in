document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        // If all fields are filled, proceed with form submission
        sendMail();
    });
});

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_oafgq5o";
    const templateID = "template_vw6xgyr";

    // Corrected: Pass serviceID and templateID as variables
    emailjs.send(serviceID, templateID, params)
    .then(res => {
        console.log("Before clearing fields");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log("Fields cleared, before alert");
        alert("Your message sent successfully!!");
        console.log("After alert");
    })
    .catch(err => {
        console.log(err);
        alert("Failed to send the message, please try again.");
    });
}