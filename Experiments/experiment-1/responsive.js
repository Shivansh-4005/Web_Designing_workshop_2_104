// Example: Add interactivity
document.addEventListener("DOMContentLoaded", function() {
    console.log("Bootstrap Responsive Page Loaded!");

    // You could add dynamic behavior here
    // For example, alert when user clicks a nav link
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            alert("You clicked: " + link.textContent);
        });
    });
});
