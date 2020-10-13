var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
var vvertical = 'vertical'.split("").join("<br/>")
$('#vvertical').html(vvertical);



// $(function () {

//   $(window).bind("resize", function () {
//       console.log($(this).width())
//       if ($(this).width() < 500) {
//           $('div').removeClass('col').addClass('none')
//        } else {
//           $('div').removeClass('none').addClass('col')
//        }
//   })
// })