

$(document).ready(function(){
  
var arr1 = ['1','2','3','4','5','6','7','8','9']

var spot1 =[]


for (i = 0 ; i < arr1.length ; i ++){
  console.log(arr1[i])

}

  
  $("#1").html(arr1[i,0]);
$('#1').on('click', function (event) {
  $("#1").text("X");

  if($("#1:contains('X')").length) {
  
      alert("this spot is X")
  }
  
  
  
  
});

});
