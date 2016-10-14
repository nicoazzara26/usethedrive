$(document).ready(function() {

    $("#busqueda").on("keyup", buscar);

    function buscar() {
        var carpetas = $(".carpetas");
        var texto = $("#busqueda").val();
        texto = texto.toLowerCase();
        carpetas.show();
        for (var i = 0; i < carpetas.length; i++) {
            var contenido = carpetas.eq(i).text();
            contenido = contenido.toLowerCase();
            var index = contenido.indexOf(texto);
            if (index == -1) {
                carpetas.eq(i).hide();
            }
        }
    }

});

/*Cambiar fondo login*/

$(document).ready(function(e) {
    $.backstretch([
        "img/wall1.jpg",
        "img/wall2.jpg",
        "img/wall3.jpg"
    ],{
        fade:758,
        duration:8666
    });
});
