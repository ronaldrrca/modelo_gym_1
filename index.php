<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gym</title>
    <link rel="shortcut icon" href="#" type="image/x-icon">
</head>
<body>
    <header><?php include './components/header.php' ?></header>
    <main>
        <div id="sliderContainer">
            <p class="sliderTextA"><span class="whiteSpan">ENTRENA</span><br><span id="greenSpan">TU CUERPO</span><br></p>
            <p class="sliderTextB"><span class="whiteSpan">TRANSFORMA</span><br><span id="pinkSpan">TU VIDA</span></p>
            <img id="back_icon" src="./assets/icons/leftArrow_icon.svg" alt="icono retroceder">
            <img id="forward_icon" src="./assets/icons/rightArrow_icon.svg" alt="icono avanzar">
            <figure id="homeMain_slider_768p">
                <img id="homeMain_slider_img768p" src="./assets/images/gym-main-img-1-768p.webp" alt="mujer con ropa deportiva saltando">
            </figure>
            <figure id="homeMain_slider_1300p">
                <img id="homeMain_slider_img1300p" src="./assets/images/gym-main-img-1-1300p.webp" alt="mujer con ropa deportiva saltando">
            </figure>
            <figure id="homeMain_slider_1920p">
                <img id="homeMain_slider_img1920p" src="./assets/images/gym-main-img-1-1920p.webp" alt="mujer con ropa deportiva saltando">
            </figure>
        </div>
        <section id="introducing">
            <div id="welcome">
                <h1>BIENVENIDO<br><span>GIMNASIO CODEWSGYM</span></h1>
                <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloremque excepturi commodi reiciendis accusamus mollitia autem aspernatur esse iusto, deleniti officia iure explicabo saepe ab enim magnam error. Accusamus, necessitatibus?</P>
                <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloremque excepturi commodi reiciendis accusamus mollitia autem aspernatur esse iusto, deleniti officia iure explicabo saepe ab enim magnam error. Accusamus, necessitatibus?</P>
            </div>
            <div id="programs">
                <div class="programas_herHim">
                    <div class="programs_figure"><img src="./assets/icons/women_symbol.svg" alt="simbolo femenino"></div>
                    <div class="programs_info">
                        <h2>PROGRAMAS PARA MUJERES</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aperiam beatae error, in quam itaque temporibus.</p>
                        <button id="moreInfoHer">Más información</button>
                    </div>
                </div>
                <div class="programas_herHim">
                    <div class="programs_figure"><img src="./assets/icons/men_symbol.svg" alt="simbolo masculino"></div>
                    <div class="programs_info">
                        <h2>PROGRAMAS PARA HOMBRES</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aperiam beatae error, in quam itaque temporibus.</p>
                        <button id="moreInfoHim">Más información</button>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer><?php include './components/footer.php' ?></footer>
    <script src="./js/header.js"></script>
    <script src="./js/home.js"></script>
</body>
</html> 