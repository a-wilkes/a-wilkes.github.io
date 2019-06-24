$(".c-schedule").click(function () {
    $('.root').load("views/consultation/consult0.html");
    $('.footer').load("views/main-footer.html", function() {
        $(".consult").addClass("active");
    });
    $('.header').load("views/main-header.html", function () {
        $('h5.title-txt').text("Consultation");
    });
});

$(".schedule").click(function () {
    $('.root').load("views/consultation/consult.html");
    $('.header').load("views/consultation/header-back-consult.html");
});

$(".fa-arrow-left").click(function () {
    $('.root').load("views/consultation/consult0.html");
    $('.footer').load("views/main-footer.html", function() {
        $(".consult").addClass("active");
    });
    $('.header').load("views/main-header.html", function () {
        $('h5.title-txt').text("Consultation");
    });
});