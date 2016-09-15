$(document).ready(function(){

    $('#submit').click(function(){

        var nombre = $('#nombre').val();
        var apellido = $('#apellido').val();
        var correo = $('#usr').val();
        var contraseña = $('#psw').val();

        $.post("conexion.php",{nombre:nombre, apellido:apellido, correo:correo, contraseña:contraseña},
        function(data){
            $('#submit').val();
            if(data){
                $("#result").html(data);
            }
        });
    });
});
