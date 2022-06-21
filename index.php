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
        <section id="offering">
            <article>
                <img src="./assets/icons/icon_person.svg" alt="icono de persona">
                <h2>ENTRENADORES PERSONALES</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae officiis optio quia ipsum veritatis laudantium placeat, sequi doloremque, voluptatibus nostrum labore voluptate ipsa dolorum sit delectus? Quae ducimus assumenda animi?</p>
                <button>INSCRÍBETE</button>
            </article>
            <article>
                <img src="./assets/icons/icon_people.svg" alt="icono de personas">
                <h2>CLASES<br>GRUPALES</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae officiis optio quia ipsum veritatis laudantium placeat, sequi doloremque, voluptatibus nostrum labore voluptate ipsa dolorum sit delectus? Quae ducimus assumenda animi?</p>
                <button>INSCRÍBETE</button>
            </article>
            <article>
                <img src="./assets/icons/icon_results.svg" alt="icono revision">
                <h2>SEGUIMIENTO A RESULTADOS</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae officiis optio quia ipsum veritatis laudantium placeat, sequi doloremque, voluptatibus nostrum labore voluptate ipsa dolorum sit delectus? Quae ducimus assumenda animi?</p>
                <button>INSCRÍBETE</button>
            </article>
        </section>
        <section id="plans">
            <h2>NUESTROS PLANES</h2>
            <div id="plan_wrap">
                <div id="beginner" class="plan">
                    <div id="header_beginner" class="planHeader">
                        <h3>PRINCIPIANTE</h3>
                        <p>$39.00 / mes</p>
                    </div>
                    <p>2 Días por semana</p>
                    <p>4 Clases mensuales</p>
                    <p class="noIncluded">Clases gratuitas por mes</p>
                    <p class="noIncluded">Plan de dieta incluido</p>
                    <p class="noIncluded">Pruebas de avance</p>
                    <p class="noIncluded">Plan de entrenamiento</p>
                    <button id="planBeginner_button" class="planButton">CONTRATAR</button>
                </div>
                <div id="medium" class="plan">
                    <div id="header_medium" class="planHeader">
                        <h3>INTERMEDIO</h3>
                        <p>$59.00 / mes</p>
                    </div>
                    <p>4 Días por semana</p>
                    <p>8 Clases mensuales</p>
                    <p>1 Clases gratuitas por mes</p>
                    <p>Plan de dieta incluido</p>
                    <p class="noIncluded">Pruebas de avance</p>
                    <p class="noIncluded">Plan de entrenamiento</p>
                    <button id="planBeginner_medium"class="planButton">CONTRATAR</button>
                </div>
                <div id="advanced" class="plan">
                    <div id="header_advanced" class="planHeader">
                        <h3>AVANZADO</h3>
                        <p>$69.00 / mes</p>
                    </div>
                    <p>6 Días por semana</p>
                    <p>12 Clases mensuales</p>
                    <p>1 Clases gratuitas por mes</p>
                    <p>Plan de dieta incluido</p>
                    <p>Pruebas de avance</p>
                    <p>Plan de entrenamiento</p>
                    <button id="planBeginner_advanced" class="planButton">CONTRATAR</button>
                </div>
            </div>
        </section>
        <section id="whyWe">
            <h2>¿POR QUÉ ESCOGERNOS?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt blanditiis ab pariatur, exercitationem eum inventore labore obcaecati, perferendis hic recusandae.</p>
            <div id="whys">
                <div class="why"><img src="./assets/images/why-we-img-1.webp" alt=""></div>
                <div class="why">
                    <p class="why_number">01</p>
                    <p class="why_title">ENTRENADORES<br>PROFESIONALES</p>
                    <p class="why_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod cupiditate commodi tenetur non optio inventore aliquam eveniet, voluptatem voluptatibus delectus quaerat.</p>
                    <button>MÁS INFORMACIÓN</button>
                </div>
                <div class="why"><img src="./assets/images/why-we-img-2.webp" alt=""></div>
                <div class="why">
                    <p class="why_number">01</p>
                    <p class="why_title">PROGRAMAS<br>PERSONALIZADOS</p>
                    <p class="why_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod cupiditate commodi tenetur non optio inventore aliquam eveniet, voluptatem voluptatibus delectus quaerat.</p>
                    <button>MÁS INFORMACIÓN</button>
                </div>
                <div class="why"><img src="./assets/images/why-we-img-3.webp" alt=""></div>
                <div class="why">
                    <p class="why_number">01</p>
                    <p class="why_title">CLASES GRUPALES</p>
                    <p class="why_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod cupiditate commodi tenetur non optio inventore aliquam eveniet, voluptatem voluptatibus delectus quaerat.</p>
                    <button>MÁS INFORMACIÓN</button>
                </div>
            </div>
        </section>
        <sectiion id="galery">
            <h2>GALERÍA</h2>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iste fugiat exercitationem corporis autem vero, accusantium fugit quae! Ab ratione magni.</P>
            <div id="galery_wraper">
                <div class="photo_container"><div class="courtain"></div><p>YOGA</p><img src="./assets/images/galery-1.webp" alt="mancuernas" loading="lazy"></div>
                <div class="photo_container"><div class="courtain"></div><p>PILATES</p><img src="./assets/images/galery-2.webp" alt="caminadoras" loading="lazy"></div>
                <div class="photo_container"><div class="courtain"></div><p>CLASES INDIVIDUALES</p><img src="./assets/images/galery-3.webp" alt="mujeres con mancuernas ejercitando las piernas" loading="lazy"></div>
                <div class="photo_container"><div class="courtain"></div><p>CLASES GRUPALES</p><img src="./assets/images/galery-4.webp" alt="mujer haciendo ejercicios de calentamiento" loading="lazy"></div>
                <div class="photo_container"><div class="courtain"></div><p>SPINNING</p><img src="./assets/images/galery-5.webp" alt="mujer haciendo ejercicios de piernas" loading="lazy"></div>
                <div class="photo_container"><div class="courtain"></div><p>BODY BUILDING</p><img src="./assets/images/galery-6.webp" alt="mates de yoga organizados en un gabinete" loading="lazy"></div>
            </div>
            <a href="#"><button>MIRA TODA LA GALERÍA</button></a>
        </sectiion>
        <sectiion id="trainers"></sectiion>
        <sectiion id="reseñas"></sectiion>
    </main>
    <footer><?php include './components/footer.php' ?></footer>
    <script src="./js/header.js"></script>
    <script src="./js/home.js"></script>
</body>
</html> 