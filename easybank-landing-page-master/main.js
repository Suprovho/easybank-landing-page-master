const menuBtn=document.querySelector(".hamburger");
const closeBtn=document.querySelector(".ham_close");
const menu=document.querySelector(".menu_background");
const overlay=document.querySelector(".overlay");

function openMenu(params) {
    menuBtn.style.display="none";
    closeBtn.classList.add("active");
    menu.classList.remove("hide");
}

function closeMenu(params) {
    menuBtn.style.display="block";
    closeBtn.classList.remove("active");
    menu.classList.add("hide");
    
}

menuBtn.addEventListener("click",openMenu);
closeBtn.addEventListener("click",closeMenu);
