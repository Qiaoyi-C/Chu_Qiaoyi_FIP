function toggleMenu() {
    var sidebarMenu = document.getElementById('sidebar-menu');
    sidebarMenu.classList.toggle('active'); 
}


function showPromoPopover(event, promo) {
   
    const popover = document.createElement("div");
    popover.classList.add("popover");
    popover.innerHTML = `
        <div class="popover-content">
            <h3>${promo.title}</h3>
            <p>${promo.details}</p>
        </div>
    `;


    const buttonRect = event.target.getBoundingClientRect();
    popover.style.position = "absolute";
    popover.style.left = buttonRect.left + "px";
    popover.style.top = buttonRect.bottom + "px"; 

  
    document.body.appendChild(popover);

   
    document.addEventListener("click", function(event) {
        if (!popover.contains(event.target) && !event.target.classList.contains("promoButton")) {
            popover.remove();
        }
    });
}


function showPromoPopover1(event) {
    const promo = {
        title: "New Customer Offer!",
        details: " Enjoy a 20% discount on your first purchase of any ZIMA flavor. Don't miss out!"
    };
    showPromoPopover(event, promo);
}


function showPromoPopover2(event) {
    const promo = {
        title: "Flash Sale Alert! ",
        details: "Get your favorite ZIMA flavor at a discounted price of $5 per bottle. Hurry, offer ends soon!"
    };
    showPromoPopover(event, promo);
}


function showPromoPopover3(event) {
    const promo = {
        title: "Weekend Special! ",
        details: "Treat yourself with a refreshing ZIMA bottle for only $3 each when you buy two or more. Valid only on Saturdays and Sundays."
    };
    showPromoPopover(event, promo);
}


document.getElementById("promoButton1").addEventListener("click", showPromoPopover1);
document.getElementById("promoButton2").addEventListener("click", showPromoPopover2);
document.getElementById("promoButton3").addEventListener("click", showPromoPopover3);
