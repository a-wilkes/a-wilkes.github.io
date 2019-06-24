$("li.show-more-inner").click(function () {
    $('.root').load("views/home/article.html");
});

$(document).ready(function () {
    $('.carousel').carousel({
        interval: 6000
    })
});

$(".showmore-news").click(function () {
    $('.root').load("views/home/showmore.html");
    $('.header').load("views/header-back.html");
});

$(".showmore-com").click(function () {
    $('.root').load("views/community/community.html");
});

$(".discover li.media").click(function () {
    $('.root').load("views/home/article.html");
    $('.header').load("views/header-back.html");
});

$(".community-section li.media").click(function () {
    $('.root').load("views/community/fullpost.html");
    $('.header').load("views/header-back.html");
});