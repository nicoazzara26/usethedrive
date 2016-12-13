$(document).ready(function () {
var formbutton = $(".jsbutton");
var newFolder = $(".jsnewfolder");
var backmodal = $(".m-background");
var modal = $(".modal");

/*show/hide*/
newFolder.click(function(){
showmodal();
  });

backmodal.click(function(){
hidemodal();
});
/**/

var subject = $(".subject");
var teacher = $(".teacher");
var level = $(".level");
var input_list = [];

/*validate*/
$(formbutton).click(function (){
validarinput(subject);
validarinput(teacher);
validarinput(level);
validarform();
cleanarray();
});

/*arreglar*/
hideErrors(subject);
hideErrors(teacher);
hideErrors(level);


/*functions*/
  function showmodal(){
  backmodal.fadeIn(1000);
  modal.fadeIn(1500);
  }

function hidemodal(){
  backmodal.fadeOut(1000);
  modal.fadeOut(1500);
}
/*arreglar*/
function hideErrors(campo){
$(campo).keydown(function(){
$(".error").fadeOut();
});
}

/*input*/
function validarinput(campo){

  if (input_list.length<=0 && campo.val() == ""){
input_list.push(campo);
console.log("ingreso");
return input_list;

}

if(input_list.length<=2 && campo.val() == ""){

  for(var i=0; i < input_list.length; i++){

if(input_list[i] == campo){
  console.log("ingreso repetido");
  break;
    }

    else if(input_list[i+1] == campo){
      console.log("repetido");
      break;
      }
      else{
      input_list.push(campo);
      return input_list;
      }
    }
  }
  if(input_list.length == 0){
    console.log("no hay nada en el array");
  }
}
/**/

/*FORM*/
  function validarform(){
    for (var i=0; i < input_list.length; i++){
      var errorcampo = "<span class='error'>Ingrese "+ input_list[i].attr("placeholder")+"</span>";
    input_list[i].focus().after(errorcampo);
    };
  }
  /**/

  /*clean*/
  function cleanarray(){
    input_list.pop();
    input_list.pop();
    input_list.pop();
  }


});/*Document END*/
