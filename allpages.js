
let hamburgerMenu = document.getElementById("hamburgerMenu");
let navBar = document.getElementById("navBar");
let closeBtn = document.getElementById("closeBtn");

hamburgerMenu.addEventListener("click", showNavBar);
function showNavBar(){
        navBar.style.display = "flex";
        hamburgerMenu.style.width = "0px";
        closeBtn.style.width = "60px";
};

closeBtn.addEventListener("click", hideNavBar);
function hideNavBar(){
    navBar.style.display = "none";
    hamburgerMenu.style.width = "60px";
    closeBtn.style.width = "0px";
    
};

