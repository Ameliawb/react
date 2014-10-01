$(document).ready(function() {
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
    });
    $(".button4").click(function() {
        $(".box").animate({
            height: '300px',
            width: '50px'
        });
        /* add after the curly bracket},1000); to set the timing of the animation*/
    });

    /* reset all boxes to the original starting position and style*/

    $(".button6").click(function() {
        $('.box').removeAttr('style'); 
    }); 
        $(".button5").click(function() {
            $(".box").css({ opacity: 0.8 });
            var h = $(window).height();
            var w = $(window).width();
            $('.box').each(function() {
                var originalOffset = $(this).position(),
                    $this = $(this),
                    tLeft = w - Math.floor(Math.random() * 900),
                    tTop = h - Math.floor(Math.random() * 900);

                $(this).animate({
                    "left": tLeft,
                    "top": tTop
                }, 3000, function() {
                    $this.animate({
                        "left": originalOffset.left,
                        "top": originalOffset.top+50
                    }, 5000);
                });
            });
        });
    });


