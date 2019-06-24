$(".fa-bars").click(function () {
    $('#side-nav').load("views/sidenav.html");
});

$(".messaging").click(function () {
    $('.root').load("views/messaging/messaging.html");
    $('.footer').load("views/main-footer.html");
    $('.header').load("views/header-back.html", function () {
        $('h5.title-txt').text("Messaging");
    });
});