$(document).ready(function(){
    $("#designP").click(function(){
        $("#designImage").toggle();
        $("#design").toggle();
    });
});

$("#port1").mouseover(function () {
    $("#p1").show();
})
$("#port1").mouseout(function () {
    $("#p1").hide();
})

let form = document.querySelector("#form")
let username = form.username
form.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Hello " + username.value + "! data has been submitted successfully")
})