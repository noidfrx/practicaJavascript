
// Para evitar que se ejecute antes de cargar todo el HTML
$(function(){

    // Cambiaremos el contenido de los elementos con la clase "start" a "go"
    $(".start").html("GO!");
    
    // Se ocultan todas las etiquetas div
    $("div").hide();

    // Se muestran todas las etiquetas div
    $("div").show();

    $("body").hide();

});