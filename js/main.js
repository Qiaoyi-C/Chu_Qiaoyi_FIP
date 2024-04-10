function toggleMenu() {
    var sidebarMenu = document.getElementById('sidebar-menu');
<<<<<<< Updated upstream
    sidebarMenu.classList.toggle('active'); // 切換選單的顯示狀態
}
=======
    sidebarMenu.classList.toggle('active'); 
}

// Function to create and show a popover with the promo details
function showPromoPopover(event, promo) {
    // Create the popover element
    const popover = document.createElement("div");
    popover.classList.add("popover");
    popover.innerHTML = `
        <div class="popover-content">
            <h3>${promo.title}</h3>
            <p>${promo.details}</p>
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

// Function to show Promo 1 details
function showPromoPopover1(event) {
    const promo = {
        title: "Promo 1",
        details: "This is the first promo details."
    };
    showPromoPopover(event, promo);
}

// Function to show Promo 2 details
function showPromoPopover2(event) {
    const promo = {
        title: "Promo 2",
        details: "This is the second promo details."
    };
    showPromoPopover(event, promo);
}

// Function to show Promo 3 details
function showPromoPopover3(event) {
    const promo = {
        title: "Promo 3",
        details: "This is the third promo details."
    };
    showPromoPopover(event, promo);
}

// Event listeners for specific promo buttons
document.getElementById("promoButton1").addEventListener("click", showPromoPopover1);
document.getElementById("promoButton2").addEventListener("click", showPromoPopover2);
document.getElementById("promoButton3").addEventListener("click", showPromoPopover3);
>>>>>>> Stashed changes
