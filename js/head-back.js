$(".fa-arrow-left").click(function () {
    $('.root').load("views/home/home.html");
    $('.footer').load("views/main-footer.html", function() {
        $(".home").addClass("active");
    });
    $('.header').load("views/main-header.html");
});