$(".fa-arrow-left.messaging").click(function () {
    $('.root').load("views/messaging/messaging.html");
    $('.footer').load("views/main-footer.html");
    $('.header').load("views/header-back.html", function () {
        $('h5.title-txt').text("Messaging");
    });
});

$(".media.border").click(function () {
    $('.root').load("views/messaging/fullmessage.html");
    $('.footer').load("views/messaging/message-footer.html");
    $('.header').load("views/messaging/header-back-messaging.html");
});