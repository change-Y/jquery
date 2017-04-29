$(document).ready(function (){
    $("#btn").click(function() {
        startMove(10);
    });

    function startMove(speed) {
        var timer = null;
        clearInterval(timer);
        timer = setInterval(function() {
            if ($("#first").offset().left >= 520) {
                clearInterval(timer);
            } else {
                $("#first").css("left", $("#first").offset().left + speed + "px");
            };
        }, 30);
    }
});
