var iteracion = 0;
var form = document.getElementById('formulario__input');
function FbotonOn() {
    var texto = document.getElementById('botonOn');
    switch (iteracion) {
        case 0:
            texto.innerHTML = "Bienvenid@.";
        break;
        case 1:
            document.getElementById("botonOn").innerHTML= "<p style = 'width: 60%;'>Bienvenid@.</p><span>Este es un espacio </span><span style='color: gold;'>CL4N_D35T1NO.</span>";
        break;
        case 2:
            texto.innerHTML = "<div style = 'text-align: left;'><span>" + "Si quieres acabar con la corrupción y los\n abusos, te puede interesar lo que estamos\n haciendo.</span></div>";
        break;
        case 3:
            texto.innerText = "¿Cómo quieres que te llamemos?";
            document.getElementById("formulario__siguiente").style.display = "none";
            document.getElementById("formulario__datos").style.display = "inline-block"; 
            document.getElementById('caja').style.display = "inline-block"           
        break;
    }
    iteracion++;
}
function escribe() {
    document.getElementById('formulario__datos').style.display = "none";
    document.getElementById('botonOn').style.display = "none";
    escribir = document.getElementById("caja")
    miTitulo = document.rellenar.titulo.value
    escribir.innerHTML = "<span>Hola, </span><span style='color: gold;'>"+"@"+ miTitulo +".</span>";
    }
window.onload = function() {
document.rellenar.ver.onclick = escribe
FbotonOn();
} 