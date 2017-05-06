$(function() {
    var timer = setInterval(next, 5000)
    $("ul").css("left", "-520px"); //初始化为第一张。
    var num = 1; //定义页面数值，从0开始。
    function next() {
        clearInterval(timer);
        if (!$("ul").is(":animated")) { //防止多次点击导致连续动画
            num++;
            $("ul").animate({ left: "+=-520px" }, 500, function() { //动画结束后的回调函数
                if (num == 6) {
                    $("ul").css("left", "-520px"); //即当为最后一张时恢复初始状态。
                    num = 1;
                }
            });
        }
        timer = setInterval(next, 5000)
    }

    function prev() {
        clearInterval(timer);
        if (!$("ul").is(":animated")) {
            num--;
            $("ul").animate({ left: "+=520px" }, 500, function() {
                if (num == 0) {
                    $("ul").css("left", "-2600px");
                    num = 5;
                }
            });
        }
        timer = setInterval(next, 5000)
    }
    $(".next").click(next);
    $(".prev").click(prev);
});
