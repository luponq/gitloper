var el_1 = document.getElementById("some-block")
var el_2 = document.getElementsByTagName("mytext")


function changeSingle(element) {
    element.innerHTML = item.email;
    element.style.color = "green"
}

function changeCollection(elements) {
   for (var i = 0; i < elements.length; i++) {
       elements[i].innerHTML = "We all changed"
   }
}