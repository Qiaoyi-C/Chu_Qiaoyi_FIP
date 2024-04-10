function toggleMenu() {
    var sidebarMenu = document.getElementById('sidebar-menu');
    sidebarMenu.classList.toggle('active'); 
}


const promos = [
    {
      title: "Special Promo!",
      details: "Buy one ZIMA bottle and get another one free! You can choose any flavor. Limited time offer.",
    },
    // You can add more promo objects here
];

// Function to create and show a popover with the promo details
function showPromoPopover(event) {
    // Select a random promo (for demonstration purposes)
    const randomIndex = Math.floor(Math.random() * promos.length);
    const selectedPromo = promos[randomIndex];

    // Create the popover element
    const popover = document.createElement("div");
    popover.classList.add("popover");
    popover.innerHTML = `
        <div class="popover-content">
            <h3>${selectedPromo.title}</h3>
            <p>${selectedPromo.details}</p>
        </div>
    `;

    // Position the popover relative to the button
    const buttonRect = event.target.getBoundingClientRect();
    popover.style.position = "absolute";
    popover.style.left = buttonRect.left + "px";
    popover.style.top = buttonRect.bottom + "px"; // Adjust the position to be below the button

    // Add the popover to the document body
    document.body.appendChild(popover);

    // Close the popover when clicking outside of it
    document.addEventListener("click", function(event) {
        if (!popover.contains(event.target) && !event.target.classList.contains("promoButton")) {
            popover.remove();
        }
    });
}

// Event listeners for all buttons with class "promoButton"
const promoButtons = document.querySelectorAll(".promoButton");
promoButtons.forEach(button => {
    button.addEventListener("click", showPromoPopover);
});







