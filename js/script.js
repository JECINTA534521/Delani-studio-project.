$("document").ready(function(){
$(".design-image").click(function(){
    $(".design").show();
    $(".design-image").hide();
});
$(".dev-image").click(function(){
    $(".development").show();
    $(".dev-image").hide();
});
$(".prod-image").click(function(){
    $(".product").show();
    $(".prod-image").hide();
});

$(".design").click(function(){
    $(".design-image").show();
    $(".design").hide();
});
$(".development").click(function(){
    $(".dev-image").show();
    $(".development").hide();
});
$(".product").click(function(){
    $(".prod-image").show();
    $(".product").hide();
});

$("#button").click(function(){
    event.preventDefault();
});
$("#forms").submit(function(){
    alert("Thanks for contacting us")
    event.preventDefault();

});





  




});   