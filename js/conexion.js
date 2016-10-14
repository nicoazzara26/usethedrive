$(document).ready(function(){

    $('#submit').click(function(){

        var name = $('#name').val();
        var surname = $('#surname').val();
        var email = $('#email').val();
        var psw = $('#psw').val();

        $.post("conexion.php",{name:name, surname:surname, email:email, psw:psw},
            function(data){
                $('#submit').val();
                if(data){
                    $("#result").html(data);
                }
            });
    });
});
