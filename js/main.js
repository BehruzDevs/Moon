var elMenu = document.querySelector(".menu");

function handleMenuBtnClick() {
    elMenu.classList.add("block");
    elMenu.classList.add("right-0");
   
}

function handleCloseMenu() {
    elMenu.classList.remove("right-0");
}