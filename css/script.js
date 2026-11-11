emailjs.init({
    publicKey: "hdvUbIZIxm0N3VmZD"
});

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    status.textContent = "Sending...";

    emailjs.sendForm(
        "service_q31wi55",
        "template_5s77aqd",
        form
    )
    .then(function () {
        status.textContent = "Message sent successfully!";
        form.reset();
    })
    .catch(function (error) {
        console.error("EmailJS error:", error);
        status.textContent = "Failed to send message.";
    });
});