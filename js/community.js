$(".media.card.outer-post").click(function () {
    $('.root').load("views/community/fullpost.html");
    $('.header').load("views/community/header-back-community.html");
});

$(".fa-arrow-left").click(function () {
    $('.root').load("views/community/community.html");
    $('.footer').load("views/main-footer.html");
    $('.header').load("views/main-header.html", function () {
        $('h5.title-txt').text("Community");
    });
});