$(document).ready(function () {
var formbutton =   $(".jsbutton");
var newFolder = $(".jsnewfolder");
var backmodal = $(".m-background");
var modal = $(".modal");

 $(newFolder).click(function(){
backmodal.fadeIn(1000);
modal.fadeIn(1500);
});

backmodal.click(function(){
  backmodal.fadeOut(1000);
  modal.fadeOut(1500);
});

  $(formbutton).click(function (){
    var subject = $(".subject");
    var teacher = $(".teacher");
    var level = $(".level");
    var spanerror = $(".error");
    var input_list = [subject, teacher, level];

for (var i=0; i < input_list.length; i++){
$(spanerror).fadeOut();
if ($(input_list[i]).val() == ""){
  input_list[i].focus().after("<span class='error'>Ingrese "+input_list[i].attr("placeholder")+"</span>");
            return false;
      }
    };
  });
});
