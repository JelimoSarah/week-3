$(document).ready(function(){
    $("#designP").click(function(){
        $("#designImage").toggle();
        $("#design").toggle();
    });
});

$(document).ready(function(){
    $("#developmentP").click(function(){
        $("#developmentImg").toggle();
        $("#development").toggle();
    });
});

$(document).ready(function(){
    $("#productManagementP").click(function(){
        $("#productManagementImg").toggle();
        $("#productManagement").toggle();
    });
});



$("#port1").mouseover(function () {
    $("#p1").show();
})
$("#port1").mouseout(function () {
    $("#p1").hide();
})

$("#port2").mouseover(function () {
    $("#p2").show();
})
$("#port2").mouseout(function () {
    $("#p2").hide();
})

$("#port3").mouseover(function () {
    $("#p3").show();
})
$("#port3").mouseout(function () {
    $("#p3").hide();
})

$("#port4").mouseover(function () {
    $("#p4").show();
})
$("#port4").mouseout(function () {
    $("#p4").hide();
})

$("#port5").mouseover(function () {
    $("#p5").show();
})
$("#port5").mouseout(function () {
    $("#p5").hide();
})

$("#port6").mouseover(function () {
    $("#p6").show();
})
$("#port6").mouseout(function () {
    $("#p6").hide();
})

$("#port7").mouseover(function () {
    $("#p7").show();
})
$("#port7").mouseout(function () {
    $("#p7").hide();
})

$("#port8").mouseover(function () {
    $("#p8").show();
})
$("#port8").mouseout(function () {
    $("#p8").hide();
})



let form = document.querySelector("#form")
let username = form.username
form.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Hello " + username.value + "! data has been submitted successfully")
})