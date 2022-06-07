const icon_menu = document.getElementById("icon_menu")
const icon_close = document.getElementById("icon_close")
const mobileMenu = document.getElementById("mobileMenu")

icon_menu.addEventListener("click", ()=> {
    icon_menu.style.display = "none"
    icon_close.style.display = "block"
    mobileMenu.style.display = "block"
})

icon_close.addEventListener("click", ()=> {
    icon_close.style.display = "none"
    icon_menu.style.display = "block"
    mobileMenu.style.display = "none"
})