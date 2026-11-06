document.addEventListener("DOMContentLoaded", function () {
    const yearElements = document.querySelectorAll(".current-year");
    const currentYear = new Date().getFullYear();

    yearElements.forEach(function (element) {
        element.textContent = currentYear;
    });

    const greeting = document.getElementById("timeGreeting");

    if (greeting) {
        const hour = new Date().getHours();

        if (hour < 12) {
            greeting.textContent = "Good morning! Welcome to my portfolio.";
        } else if (hour < 18) {
            greeting.textContent = "Good afternoon! Welcome to my portfolio.";
        } else {
            greeting.textContent = "Good evening! Welcome to my portfolio.";
        }
    }

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        const nameInput = document.getElementById("name");
        const feedback = document.getElementById("formFeedback");

        nameInput.addEventListener("input", function () {
            nameInput.setCustomValidity("");
        });

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!nameInput.value.trim()) {
                nameInput.setCustomValidity("Please enter your name.");
                nameInput.reportValidity();
                return;
            }

            nameInput.setCustomValidity("");
            feedback.textContent = "Thanks, " + nameInput.value.trim() + "! This demo form does not send messages.";
            feedback.classList.remove("d-none");
            contactForm.reset();
        });
    }
});