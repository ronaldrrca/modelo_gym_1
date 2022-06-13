const homeMain_slider_img768p = document.getElementById("homeMain_slider_img768p")
const homeMain_slider_img1300p = document.getElementById("homeMain_slider_img1300p")
const homeMain_slider_img1920p = document.getElementById("homeMain_slider_img1920p")
const homeMain_slider_768p = document.getElementById("homeMain_slider_768p")
const homeMain_slider_1300p = document.getElementById("homeMain_slider_1300p")
const homeMain_slider_1920p = document.getElementById("homeMain_slider_1920p")
const back_icon = document.getElementById("back_icon")
const forward_icon = document.getElementById("forward_icon")
//Declaramos e inicializamos las variables que guiarán el setInterval de slider
let activeElement768 = "../assets/images/gym-main-img-1-768p.webp"
let activeElement1300 = "../assets/images/gym-main-img-1-1300p.webp"
let activeElement1920 = "../assets/images/gym-main-img-1-1920p.webp"

//Código que manejo el paso automático de las imágines en el slider________________________________________
const interval768 = setInterval(()=> {
    switch (activeElement768) {
        case "../assets/images/gym-main-img-1-768p.webp":
            homeMain_slider_img768p.setAttribute("src", "../assets/images/gym-main-img-2-768p.webp")
            homeMain_slider_img768p.setAttribute("alt", "hombre haciendo ejercicios con mancuernas")
            activeElement768 = "../assets/images/gym-main-img-2-768p.webp"
            break;
        case "../assets/images/gym-main-img-2-768p.webp":
            homeMain_slider_img768p.setAttribute("src", "../assets/images/gym-main-img-3-768p.webp")
            homeMain_slider_img768p.setAttribute("alt", "mujer haciendoejercicios con mancuernas en gimnasio")
            activeElement768 = "../assets/images/gym-main-img-3-768p.webp"
            break;
        case "../assets/images/gym-main-img-3-768p.webp":
            homeMain_slider_img768p.setAttribute("src", "../assets/images/gym-main-img-4-768p.webp")
            homeMain_slider_img768p.setAttribute("alt", "hombre haciendo ejercicio con cuerdas")
            activeElement768 = "../assets/images/gym-main-img-4-768p.webp"
            break;
        case "../assets/images/gym-main-img-4-768p.webp":
            homeMain_slider_img768p.setAttribute("src", "../assets/images/gym-main-img-5-768p.webp")
            homeMain_slider_img768p.setAttribute("alt", "personas haciendo ejercicio en eliptica en gimnasio")
            activeElement768 = "../assets/images/gym-main-img-5-768p.webp"
            break;
        case "../assets/images/gym-main-img-5-768p.webp":
            homeMain_slider_img768p.setAttribute("src", "../assets/images/gym-main-img-1-768p.webp")
            homeMain_slider_img768p.setAttribute("alt", "mujer con ropa deportiva saltando")
            activeElement768 = "../assets/images/gym-main-img-1-768p.webp"
            break;
    }

}, 6000)



const interval300 = setInterval(()=> {
    switch (activeElement1300) {
        case "../assets/images/gym-main-img-1-1300p.webp":
            homeMain_slider_img1300p.setAttribute("src", "../assets/images/gym-main-img-2-1300p.webp")
            homeMain_slider_img1300p.setAttribute("alt", "hombre haciendo ejercicios con mancuernas")
            activeElement1300 = "../assets/images/gym-main-img-2-1300p.webp"
            break;
        case "../assets/images/gym-main-img-2-1300p.webp":
            homeMain_slider_img1300p.setAttribute("src", "../assets/images/gym-main-img-3-1300p.webp")
            homeMain_slider_img1300p.setAttribute("alt", "mujer haciendoejercicios con mancuernas en gimnasio")
            activeElement1300 = "../assets/images/gym-main-img-3-1300p.webp"
            break;
        case "../assets/images/gym-main-img-3-1300p.webp":
            homeMain_slider_img1300p.setAttribute("src", "../assets/images/gym-main-img-4-1300p.webp")
            homeMain_slider_img1300p.setAttribute("alt", "hombre haciendo ejercicio con cuerdas")
            activeElement1300 = "../assets/images/gym-main-img-4-1300p.webp"
            break;
        case "../assets/images/gym-main-img-4-1300p.webp":
            homeMain_slider_img1300p.setAttribute("src", "../assets/images/gym-main-img-5-1300p.webp")
            homeMain_slider_img1300p.setAttribute("alt", "personas haciendo ejercicio en eliptica en gimnasio")
            activeElement1300 = "../assets/images/gym-main-img-5-1300p.webp"
            break;
        case "../assets/images/gym-main-img-5-1300p.webp":
            homeMain_slider_img1300p.setAttribute("src", "../assets/images/gym-main-img-1-1300p.webp")
            homeMain_slider_img1300p.setAttribute("alt", "mujer con ropa deportiva saltando")
            activeElement1300 = "../assets/images/gym-main-img-1-1300p.webp"
            break;
        
    }
}, 6000)



const interval920 = setInterval(()=> {
    switch (activeElement1920) {
        case "../assets/images/gym-main-img-1-1920p.webp":
            homeMain_slider_img1920p.setAttribute("src", "../assets/images/gym-main-img-2-1920p.webp")
            homeMain_slider_img1920p.setAttribute("alt", "hombre haciendo ejercicios con mancuernas")
            activeElement1920 = "../assets/images/gym-main-img-2-1920p.webp"
            break;
        case "../assets/images/gym-main-img-2-1920p.webp":
            homeMain_slider_img1920p.setAttribute("src", "../assets/images/gym-main-img-3-1920p.webp")
            homeMain_slider_img1920p.setAttribute("alt", "mujer haciendoejercicios con mancuernas en gimnasio")
            activeElement1920 = "../assets/images/gym-main-img-3-1920p.webp"
            break;
        case "../assets/images/gym-main-img-3-1920p.webp":
            homeMain_slider_img1920p.setAttribute("src", "../assets/images/gym-main-img-4-1920p.webp")
            homeMain_slider_img1920p.setAttribute("alt", "hombre haciendo ejercicio con cuerdas")
            activeElement1920 = "../assets/images/gym-main-img-4-1920p.webp"
            break;
        case "../assets/images/gym-main-img-4-1920p.webp":
            homeMain_slider_img1920p.setAttribute("src", "../assets/images/gym-main-img-5-1920p.webp")
            homeMain_slider_img1920p.setAttribute("alt", "personas haciendo ejercicio en eliptica en gimnasio")
            activeElement1920 = "../assets/images/gym-main-img-5-1920p.webp"
            break;
        case "../assets/images/gym-main-img-5-1920p.webp":
            homeMain_slider_img1920p.setAttribute("src", "../assets/images/gym-main-img-1-1920p.webp")
            homeMain_slider_img1920p.setAttribute("alt", "mujer con ropa deportiva saltando")
            activeElement1920 = "../assets/images/gym-main-img-1-1920p.webp"
            break;
        
    }
}, 6000)


//Código que controla el evento clic en el ícono de retroceder del slider
back_icon.addEventListener("click", ()=> {
    let display768 = getComputedStyle(homeMain_slider_768p);
    let display1300 = getComputedStyle(homeMain_slider_1300p);
    let display1920 = getComputedStyle(homeMain_slider_1920p);
    if (display768.getPropertyValue("display") == "block" ) {
        if (activeElement768 == "../assets/images/gym-main-img-5-768p.webp") {
                homeMain_slider_img768p.setAttribute("src", "../assets/images/gym-main-img-4-768p.webp")
                homeMain_slider_img768p.setAttribute("alt", "mujer con ropa deportiva saltando")
                activeElement768 = "../assets/images/gym-main-img-4-768p.webp"
            }else if(activeElement768 == "../assets/images/gym-main-img-4-768p.webp"){
                homeMain_slider_img768p.setAttribute("src", "../assets/images/gym-main-img-3-768p.webp")
                homeMain_slider_img768p.setAttribute("alt", "mujer haciendoejercicios con mancuernas en gimnasio")
                activeElement768 = "../assets/images/gym-main-img-3-768p.webp"
            }else if(activeElement768 == "../assets/images/gym-main-img-3-768p.webp"){
                homeMain_slider_img768p.setAttribute("src", "../assets/images/gym-main-img-2-768p.webp")
                homeMain_slider_img768p.setAttribute("alt", "hombre haciendo ejercicios con mancuernas")
                activeElement768 = "../assets/images/gym-main-img-2-768p.webp"
            }else if(activeElement768 == "../assets/images/gym-main-img-2-768p.webp"){
                homeMain_slider_img768p.setAttribute("src", "../assets/images/gym-main-img-1-768p.webp")
                homeMain_slider_img768p.setAttribute("alt", "mujer con ropa deportiva saltando")
                activeElement768 = "../assets/images/gym-main-img-1-768p.webp"
            }else if(activeElement768 == "../assets/images/gym-main-img-1-768p.webp"){
                homeMain_slider_img768p.setAttribute("src", "../assets/images/gym-main-img-5-768p.webp")
                homeMain_slider_img768p.setAttribute("alt", "personas haciendo ejercicio en eliptica en gimnasio")
                activeElement768 = "../assets/images/gym-main-img-5-768p.webp"
            }
    }

    if (display1300.getPropertyValue("display") == "block" ) {
        if (activeElement1300 == "../assets/images/gym-main-img-5-1300p.webp") {
                homeMain_slider_img1300p.setAttribute("src", "../assets/images/gym-main-img-4-1300p.webp")
                homeMain_slider_img1300p.setAttribute("alt", "mujer con ropa deportiva saltando")
                activeElement1300 = "../assets/images/gym-main-img-4-1300p.webp"
            }else if(activeElement1300 == "../assets/images/gym-main-img-4-1300p.webp"){
                homeMain_slider_img1300p.setAttribute("src", "../assets/images/gym-main-img-3-1300p.webp")
                homeMain_slider_img1300p.setAttribute("alt", "mujer haciendoejercicios con mancuernas en gimnasio")
                activeElement1300 = "../assets/images/gym-main-img-3-1300p.webp"
            }else if(activeElement1300 == "../assets/images/gym-main-img-3-1300p.webp"){
                homeMain_slider_img1300p.setAttribute("src", "../assets/images/gym-main-img-2-1300p.webp")
                homeMain_slider_img1300p.setAttribute("alt", "hombre haciendo ejercicios con mancuernas")
                activeElement1300 = "../assets/images/gym-main-img-2-1300p.webp"
            }else if(activeElement1300 == "../assets/images/gym-main-img-2-1300p.webp"){
                homeMain_slider_img1300p.setAttribute("src", "../assets/images/gym-main-img-1-1300p.webp")
                homeMain_slider_img1300p.setAttribute("alt", "mujer con ropa deportiva saltando")
                activeElement1300 = "../assets/images/gym-main-img-1-1300p.webp"
            }else if(activeElement1300 == "../assets/images/gym-main-img-1-1300p.webp"){
                homeMain_slider_img1300p.setAttribute("src", "../assets/images/gym-main-img-5-1300p.webp")
                homeMain_slider_img1300p.setAttribute("alt", "personas haciendo ejercicio en eliptica en gimnasio")
                activeElement1300 = "../assets/images/gym-main-img-5-1300p.webp"
            }
    }

    if (display1920.getPropertyValue("display") == "block" ) {
        if (activeElement1920 == "../assets/images/gym-main-img-5-1920p.webp") {
                homeMain_slider_img1920p.setAttribute("src", "../assets/images/gym-main-img-4-1920p.webp")
                homeMain_slider_img1920p.setAttribute("alt", "mujer con ropa deportiva saltando")
                activeElement1920 = "../assets/images/gym-main-img-4-1920p.webp"
            }else if(activeElement1920 == "../assets/images/gym-main-img-4-1920p.webp"){
                homeMain_slider_img1920p.setAttribute("src", "../assets/images/gym-main-img-3-1920p.webp")
                homeMain_slider_img1920p.setAttribute("alt", "mujer haciendoejercicios con mancuernas en gimnasio")
                activeElement1920 = "../assets/images/gym-main-img-3-1920p.webp"
            }else if(activeElement1920 == "../assets/images/gym-main-img-3-1920p.webp"){
                homeMain_slider_img1920p.setAttribute("src", "../assets/images/gym-main-img-2-1920p.webp")
                homeMain_slider_img1920p.setAttribute("alt", "hombre haciendo ejercicios con mancuernas")
                activeElement1920 = "../assets/images/gym-main-img-2-1920p.webp"
            }else if(activeElement1920 == "../assets/images/gym-main-img-2-1920p.webp"){
                homeMain_slider_img1920p.setAttribute("src", "../assets/images/gym-main-img-1-1920p.webp")
                homeMain_slider_img1920p.setAttribute("alt", "mujer con ropa deportiva saltando")
                activeElement1920 = "../assets/images/gym-main-img-1-1920p.webp"
            }else if(activeElement1920 == "../assets/images/gym-main-img-1-1920p.webp"){
                homeMain_slider_img1920p.setAttribute("src", "../assets/images/gym-main-img-5-1920p.webp")
                homeMain_slider_img1920p.setAttribute("alt", "personas haciendo ejercicio en eliptica en gimnasio")
                activeElement1920 = "../assets/images/gym-main-img-5-1920p.webp"
            }
    }
    
})  

//Código que controla el evento clic en el ícono de avanzar del slider
forward_icon.addEventListener("click", ()=> {
    let display768 = getComputedStyle(homeMain_slider_768p);
    let display1300 = getComputedStyle(homeMain_slider_1300p);
    let display1920 = getComputedStyle(homeMain_slider_1920p);
    if (display768.getPropertyValue("display") == "block" ) {
        if (activeElement768 == "../assets/images/gym-main-img-5-768p.webp") {
                homeMain_slider_img768p.setAttribute("src", "../assets/images/gym-main-img-1-768p.webp")
                homeMain_slider_img768p.setAttribute("alt", "mujer con ropa deportiva saltando")
                activeElement768 = "../assets/images/gym-main-img-1-768p.webp"
            }else if(activeElement768 == "../assets/images/gym-main-img-1-768p.webp"){
                homeMain_slider_img768p.setAttribute("src", "../assets/images/gym-main-img-2-768p.webp")
                homeMain_slider_img768p.setAttribute("alt", "hombre haciendo ejercicios con mancuernas")
                activeElement768 = "../assets/images/gym-main-img-2-768p.webp"
            }else if(activeElement768 == "../assets/images/gym-main-img-2-768p.webp"){
                homeMain_slider_img768p.setAttribute("src", "../assets/images/gym-main-img-3-768p.webp")
                homeMain_slider_img768p.setAttribute("alt", "mujer haciendoejercicios con mancuernas en gimnasio")
                activeElement768 = "../assets/images/gym-main-img-3-768p.webp"
            }else if(activeElement768 == "../assets/images/gym-main-img-3-768p.webp"){
                homeMain_slider_img768p.setAttribute("src", "../assets/images/gym-main-img-4-768p.webp")
                homeMain_slider_img768p.setAttribute("alt", "mujer con ropa deportiva saltando")
                activeElement768 = "../assets/images/gym-main-img-4-768p.webp"
            }else if(activeElement768 == "../assets/images/gym-main-img-4-768p.webp"){
                homeMain_slider_img768p.setAttribute("src", "../assets/images/gym-main-img-5-768p.webp")
                homeMain_slider_img768p.setAttribute("alt", "personas haciendo ejercicio en eliptica en gimnasio")
                activeElement768 = "../assets/images/gym-main-img-5-768p.webp"
            }
    }

    if (display1300.getPropertyValue("display") == "block" ) {
        if (activeElement1300 == "../assets/images/gym-main-img-5-1300p.webp") {
                homeMain_slider_img1300p.setAttribute("src", "../assets/images/gym-main-img-1-1300p.webp")
                homeMain_slider_img1300p.setAttribute("alt", "mujer con ropa deportiva saltando")
                activeElement1300 = "../assets/images/gym-main-img-1-1300p.webp"
            }else if(activeElement1300 == "../assets/images/gym-main-img-1-1300p.webp"){
                homeMain_slider_img1300p.setAttribute("src", "../assets/images/gym-main-img-2-1300p.webp")
                homeMain_slider_img1300p.setAttribute("alt", "hombre haciendo ejercicios con mancuernas")
                activeElement1300 = "../assets/images/gym-main-img-2-1300p.webp"
            }else if(activeElement1300 == "../assets/images/gym-main-img-2-1300p.webp"){
                homeMain_slider_img768p.setAttribute("src", "../assets/images/gym-main-img-3-1300p.webp")
                homeMain_slider_img768p.setAttribute("alt", "mujer haciendoejercicios con mancuernas en gimnasio")
                activeElement1300 = "../assets/images/gym-main-img-3-1300p.webp"
            }else if(activeElement1300 == "../assets/images/gym-main-img-3-1300p.webp"){
                homeMain_slider_img1300p.setAttribute("src", "../assets/images/gym-main-img-4-1300p.webp")
                homeMain_slider_img1300p.setAttribute("alt", "mujer con ropa deportiva saltando")
                activeElement1300 = "../assets/images/gym-main-img-4-1300p.webp"
            }else if(activeElement1300 == "../assets/images/gym-main-img-4-1300p.webp"){
                homeMain_slider_img1300p.setAttribute("src", "../assets/images/gym-main-img-5-1300p.webp")
                homeMain_slider_img1300p.setAttribute("alt", "personas haciendo ejercicio en eliptica en gimnasio")
                activeElement1300 = "../assets/images/gym-main-img-5-1300p.webp"
            }
    }

    if (display1920.getPropertyValue("display") == "block" ) {
        if (activeElement1920 == "../assets/images/gym-main-img-5-1920p.webp") {
                homeMain_slider_img1920p.setAttribute("src", "../assets/images/gym-main-img-1-1920p.webp")
                homeMain_slider_img1920p.setAttribute("alt", "mujer con ropa deportiva saltando")
                activeElement1920 = "../assets/images/gym-main-img-1-1920p.webp"
            }else if(activeElement1920 == "../assets/images/gym-main-img-1-1920p.webp"){
                homeMain_slider_img1920p.setAttribute("src", "../assets/images/gym-main-img-2-1920p.webp")
                homeMain_slider_img1920p.setAttribute("alt", "hombre haciendo ejercicios con mancuernas")
                activeElement1920 = "../assets/images/gym-main-img-2-1920p.webp"
            }else if(activeElement1920 == "../assets/images/gym-main-img-2-1920p.webp"){
                homeMain_slider_img1920p.setAttribute("src", "../assets/images/gym-main-img-3-1920p.webp")
                homeMain_slider_img1920p.setAttribute("alt", "mujer haciendoejercicios con mancuernas en gimnasio")
                activeElement1920 = "../assets/images/gym-main-img-3-1920p.webp"
            }else if(activeElement1920 == "../assets/images/gym-main-img-3-1920p.webp"){
                homeMain_slider_img1920p.setAttribute("src", "../assets/images/gym-main-img-4-1920p.webp")
                homeMain_slider_img1920p.setAttribute("alt", "mujer con ropa deportiva saltando")
                activeElement1920 = "../assets/images/gym-main-img-4-1920p.webp"
            }else if(activeElement1920 == "../assets/images/gym-main-img-4-1920p.webp"){
                homeMain_slider_img1920p.setAttribute("src", "../assets/images/gym-main-img-5-1920p.webp")
                homeMain_slider_img1920p.setAttribute("alt", "personas haciendo ejercicio en eliptica en gimnasio")
                activeElement1920 = "../assets/images/gym-main-img-5-1920p.webp"
            }
    }
    
})


  
    












