$(".success").click(function () {
    $.bootstrapGrowl('Invite sent!', {
        type: 'success',
        delay: 1000,
        offset: { from: 'top', amount: 65 },
        align: "center"
    });
});

$(".friends").click(function () {
    $('.root').load("views/recreation/friends.html");
    $('.header').load("views/recreation/header-back-games.html");
});

$(".fa-arrow-left").click(function () {
    $('.root').load("views/recreation/games.html");
    $('.footer').load("views/main-footer.html");
    $('.header').load("views/main-header.html", function () {
        $('h5.title-txt').text("Recreation");
    });
});