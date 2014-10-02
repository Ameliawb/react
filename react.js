$(document).ready(function() {
    $("#pink").hide();
    $("#purple").hide();
    $("#yellow").hide();
    $(".button").click(function() {
        $("#green").animate({
            height: "300px"
        });
        $("#blue").animate({
            height: "400px"
        });
        $("#red").animate({
            height: "500px"
        });
        $("#purple").animate({
            height: "600px"
        });
        $("#yellow").animate({
            height: "700px"
        });
        $("#pink").animate({
            height: "800px"
        });
    });
    $(".button2").click(function() {
        $(".box").animate({
            height: '50px',
            width: '300px'
        });
    });

    $(".button3").click(function() {
        $("#green").animate({
            width: "500px"
        });
        $("#blue").animate({
            width: "600px"
        });
        $("#red").animate({
            width: "700px"
        });
         $("#purple").animate({
            width: "800px"
        });
        $("#yellow").animate({
            width: "900px"
        });
        $("#pink").animate({
            width: "1000px"
        });
    });
    $(".button4").click(function() {
        $(".box").animate({
            height: '300px',
            width: '50px'
        });
        /* add after the curly bracket},1000); to set the timing of the animation*/
    });

    /*make duplicates for crazy shizzz to happen....*/
    $(".button7").click(function() {
       $("#pink").show();
    $("#purple").show();
    $("#yellow").show();
    });


    /* reset all boxes to the original starting position and style*/
    var wide = 165;
    var high = 165;

    $(".button6").click(function() {
       $(".box").width(wide).height(high);
       $(".box").animate({
        top: 5,
        left: 3
    });
        $("#pink").hide();
        $("#yellow").hide();
        $("#purple").hide();
    });


    /*animation....*/
    $(".button5").click(function() {
        $(".box").css({
            opacity: 0.8
        });
        var h = $(window).height();
        var w = $(window).width();
        $('.box').each(function() {
            var originalOffset = $(this).position(),
                $this = $(this),
                tLeft = w - Math.floor(Math.random() * 500),
                tTop = h - Math.floor(Math.random() * 500);

            $(this).animate({
                "left": tLeft,
                "top": tTop
            }, 2000, function() {
                $this.animate({
                    "left": originalOffset.left+100,
                    "top": originalOffset.top -30
                }, 3000);
            });
        });

    });
});