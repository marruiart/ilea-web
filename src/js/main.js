



let onoff = true;
function displayMenu() {

    if (onoff == true) {
        document.getElementById("nav_menu").style.display = "flex";
        onoff = false;
    } else if (onoff == false) {
        document.getElementById("nav_menu").style.display = "none";
        onoff = true;
    }
}

window.onload = function () {

    let menuIcon = document.getElementById("menu_icon");
    menuIcon.addEventListener("click", displayMenu);
};