document.addEventListener("DOMContentLoaded", function() {
    console.log("TechStore page loaded!");

    // Example: Add interactivity
    document.querySelectorAll(".btn-primary").forEach(button => {
        button.addEventListener("click", () => {
            console.log("Opening modal for: " + button.parentElement.querySelector("h5").textContent);
        });
    });
});
