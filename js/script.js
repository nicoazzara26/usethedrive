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