$(document).ready(function () {
var formbutton = $(".jsbutton");
var newFolder = $(".jsnewfolder");
var backmodal = $(".m-background");
var modal = $(".modal");
var formonpage = $(".form1");

/*show/hide*/
newFolder.click(function(){
showmodal();
  });

backmodal.click(function(){
hidemodal();
hideErrors();
});
/*FIN show/hide*/

/*Enviar submit*/
$(formbutton).click(function (){
hideErrors();
var form = function () {                      //La clase formulario obtiene la cant de items, y la cantidad de inputs
this.length = formonpage[0].elements.length;//obtengo el tamaño que le envio a getinputs
this.inputs = getinputs(this.length);//recibo los inputs en una propiedad
}

var pageform = new form();  //Se crea el objeto formulario de pagina
var input = [];//creo un vector para cargar los inputs como variables Jquery por que sino no puedo usar .attr() .after() .focus()

for (item in pageform.inputs){//Recorro la lista de inputs
if (pageform.inputs[item].value == ""){//Evaluo si el campo esta vacio IMPORTANTE

  input = $("."+pageform.inputs[item].className+"");// cargo las variables Jquery
}
if(input.length !=0){
showerror(input);
}
}

/*functions*/
function getinputs(j){//Se obtienen solo los inputs del formulario
  var inputsonpage = new Array();
  j = formonpage[0].elements.length

  for(var i = 0; i<j ; i++){
    if(formonpage[0][i].tagName == "INPUT"){// se validan solo los elementos de tag input
      inputsonpage[i] = formonpage[0][i];
    }
  }
return inputsonpage//devuelvo los inputs de la pagina
}

function showerror(input){//Muestra los errores a partir de la clase recibida

  var errorcampo = '<span class="error"> Ingrese ' + input.attr("placeholder") + '</span>';
  input.focus().after(errorcampo);

}

});
/*Fin submit*/

function showmodal(){
backmodal.fadeIn(1000);
modal.fadeIn(1500);
}

function hidemodal(){
backmodal.fadeOut(1000);
modal.fadeOut(1500);

}

function hideErrors(){
var error = $(".error");
if(error.length!=0){
error.fadeOut();
}
}

});
