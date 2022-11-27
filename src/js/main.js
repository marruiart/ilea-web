



let onoff = true;
function displayMenu() {
    let menuIcon = document.getElementById("menu_icon"),
    childDiv = menuIcon.getElementsByTagName("div")[1];

    if (onoff == true) {
        document.getElementById("nav_menu").style.display = "flex";
        document.getElementById("menu_icon").firstElementChild.style.transform = "rotate(45deg)";
        childDiv.style.opacity = "0";
        document.getElementById("menu_icon").lastElementChild.style.transform = "rotate(-45deg)";
        onoff = false;
    } else if (onoff == false) {
        document.getElementById("nav_menu").style.display = "none";
        document.getElementById("menu_icon").firstElementChild.style.transform = "rotate(0)";
        childDiv.style.opacity = "1";
        document.getElementById("menu_icon").lastElementChild.style.transform = "rotate(0)";
        onoff = true;
    }
}

window.onload = function () {

    let menuIcon = document.getElementById("menu_icon");
    menuIcon.addEventListener("click", displayMenu);
};