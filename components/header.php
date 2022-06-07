<!DOCTYPE html>
<html lang="es">
<head>
    <link rel="stylesheet" href="./css/generalStyles.css">
    <link rel="stylesheet" href="./css/768p.css" media="screen and (min-width: 768px)">
    <link rel="stylesheet" href="./css/1024p.css" media="screen and (min-width: 1024px)">
    <link rel="stylesheet" href="./css/1300p.css" media="screen and (min-width: 1300px)">
</head>
    <img id="logo_header" src="../assets/icons/logoV2.svg" alt="logo">
    <div id="sectionA_header">
        <div id="sectionA_header_phone">
            <img id="icon_phone_header" src="../assets/icons/icon_phone.svg" alt="icono telefono">
            <div id="headerPhone_text">
                <p id="callUs">LLámanos</p>
                <p id="phoneNumber">+57 601 4567 890</p>
            </div>
        </div>
    </div>
    <nav>
        <img id="icon_menu" src="../assets/icons/icon_menu.svg" alt="icono de menu">
        <img id="icon_close" src="../assets/icons/icon_close.svg" alt="icono de cerrar">
        <ul id="mobileMenu">
            <li class="mobileMenu_item"><a href="#">INICIO</a></li>
            <li class="mobileMenu_item"><a href="#">NOSOTROS</a></li>
            <li class="mobileMenu_item"><a href="#">PLANES</a></li>
            <li class="mobileMenu_item"><a href="#">CLASES</a></li>
            <li class="mobileMenu_item"><a href="#">CONTACTO</a></li>
        </ul>
        <ul id="dropDownMenu">
            <li class="dropDownMenu_item"><a id="dropDownMenu_itemHome" href="#">INICIO</a></li>
            <li class="dropDownMenu_item"><a href="#">NOSOTROS</a>
                <ul class="dropDownMenu_subMenu">
                    <li><a href="#">El Gym</a></li>
                    <li><a href="#">Entrenadores</a></li>
                    <li><a href="#">Galeria</a></li>
                </ul>
            </li>
            <li class="dropDownMenu_item"><a href="#">PLANES</a></li>
            <li class="dropDownMenu_item"><a href="#">CLASES</a>
                <ul class="dropDownMenu_subMenu">
                    <li><a href="#">Clases de...</a></li>
                    <li><a href="#">Clases de...</a></li>
                    <li><a href="#">Clases de...</a></li>
                    <li><a href="#">Clases de...</a></li>
                </ul>
            </li>
            <li class="dropDownMenu_item"><a href="#">CONTACTO</a></li>
        </ul>
    </nav>
</html>