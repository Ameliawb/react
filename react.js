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

/*make duplicates for crazy shizzz to happen....*/
$(".button7").click(function() {
$( ".box" ).clone().prependTo( ".container" );
$('#blue').css({"background":"none"});// remove existing
$('#blue').css({"background":"#662277"});// add new color here.
$( "#blue" ).click(function() {
  $( this ).remove();
});
$('#red').css({"background":"none"});// remove existing
$('#red').css({"background":"#3355ff"});// add new color here.
$( "#red" ).click(function() {
  $( this ).remove();
});
$('#green').css({"background":"none"});// remove existing
$('#green').css({"background":"#99ffaa"});
$( "#green" ).click(function() {
  $( this ).remove();
});

// add new color here.
 });

    /* reset all boxes to the original starting position and style*/

    $(".button6").click(function() {
     /*   $('.box').removeAttr('style'); */
      $(".container").remove();
      $("<div></div>").attr('class','container').appendTo('.instruction');
       $("<div></div>").attr('class','box').appendTo('.container');
        $("<div></div>").attr('id','red').appendTo('.box');
        $("<div></div>").attr('id','blue').appendTo('.box');
        $("<div></div>").attr('id','green').appendTo('.box');



        
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


