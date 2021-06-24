var el_1 = document.getElementById("some-block")
var el_2 = document.getElementsByTagName("divs")
var divs = document.getElementsByTagName("div")

el_1.style.color = "rgb(161, 95, 223)"

function changeSingle(element) {
    element.innerHTML = "Content";
    element.style.color = "green"
}

function changeCollection(elements) {
   for (var i = 0; i < elements.length; i++) {
       elements[i].innerHTML = "HOBA"
   }
}
