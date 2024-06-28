document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".btext");
    
    button.addEventListener("click", function() {
        alert("You are being redirected to the HNG.tech website!");
    });

    const details = document.querySelector(".details");
    const name = details.querySelector("h3:first-child");

    name.addEventListener("click", function() {
        name.style.color = name.style.color === "yellow" ? "white" : "yellow";
    });
});

