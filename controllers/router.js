$(".home").click(function(){
   $('.root').load("views/home/home.html");
    $('.footer').load("views/main-footer.html");
    $('.header').load("views/main-header.html", function() {
       $('h5.title-txt').text("BabyBreathe"); 
    });
});

$(".community").click(function(){
   $('.root').load("views/community/community.html");
    $('.footer').load("views/main-footer.html");
    $('.header').load("views/main-header.html", function() {
        $('h5.title-txt').text("Community");
    });
});

$(".consult").click(function(){
   $('.root').load("views/consultation/consult0.html");
    $('.footer').load("views/main-footer.html");
    $('.header').load("views/main-header.html", function() {
        $('h5.title-txt').text("Consultations");
    });
});

$(".monitor").click(function(){
   $('.root').load("views/monitor/monitor.html");
    $('.footer').load("views/main-footer.html");
    $('.header').load("views/main-header.html", function() {
        $('h5.title-txt').text("Monitor");
    });
});

$(".games").click(function(){
   $('.root').load("views/recreation/games.html");
    $('.footer').load("views/main-footer.html");
    $('.header').load("views/main-header.html", function() {
        $('h5.title-txt').text("Recreation");
    });
});

$(".messaging").click(function(){
   $('.root').load("views/messaging/messaging.html");
    $('.footer').load("views/main-footer.html");
    $('.header').load("views/header-back.html", function() {
        $('h5.title-txt').text("Messaging");
    });
});

$(".profile").click(function(){
   $('.root').load("views/profile/profile.html");
    $('.footer').load("views/main-footer.html");
    $('.header').load("views/main-header.html", function() {
        $('h5.title-txt').text("Profile");
    });
});

$(".settings").click(function(){
   $('.root').load("views/settings/settings.html");
    $('.footer').load("views/main-footer.html");
    $('.header').load("views/main-header.html", function() {
        $('h5.title-txt').text("Settings");
    });
});