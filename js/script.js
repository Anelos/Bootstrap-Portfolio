var viewportHeight = $(window).height();

function scrollBarHideAndSeek() {
    if ($(window).scrollTop() > 50) {
        $("#scrollBox").show();
    } else {
        $("#scrollBox").hide();
    }
}
$(document).ready(function () {
    scrollBarHideAndSeek();
    $(window).scroll(function () {
        scrollBarHideAndSeek();
    });
    $(window).resize(function () {
        viewportHeight = $(window).height();
        scrollBarHideAndSeek();
    });
    $("#pageUp").click(function () {
        $(window).scrollTop($(window).scrollTop() - viewportHeight);
    });
    $("#pageDown").click(function () {
        $(window).scrollTop($(window).scrollTop() + viewportHeight);
    });
    $(".item img").click(function () {
        var currentIndex = $('div.active').index();
        var item = $(".item img")[currentIndex];
        var image = $(item).attr('src');
        $("#imageZoomBox").css('visibility', 'visible');
        $("#pictureBox").css("background-image", "url(" + image + ")");
        $("#description p:eq(" + currentIndex + ")").css("visibility", "visible");
        $("#imageZoomBox").click(function () {
            $("#imageZoomBox").css("visibility", "hidden");
            $("#description p:eq(" + currentIndex + ")").css("visibility", "hidden");
        });
    });
    $("#coordonneeButton").click(function () {
        $(this).hide();
        $("#coordonnee").append("<h3>Ludovic Soret</h3><p>1144, rue de Neufchatel</p><p>62830</p><p>SAMER</p><p>tel: 06 32 20 99 95</p><p>Mail: civodul.teros@gmail.com</p>");
    });
});
