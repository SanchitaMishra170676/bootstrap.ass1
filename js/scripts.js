$("#carouselButton").click(function(){
     if ($("#carouselButton").children("span").hasClass('fa-pause')) {
         $("#mycarousel").carousel('pause');
         $("#carouselButton").children("span").removeClass('fa-pause');
         $("#carouselButton").children("span").addClass('fa-play');
     }
     else if ($("#carouselButton").children("span").hasClass('fa-play')){
       $("#mycarousel").carousel( { interval: 2000 } );
         $("#mycarousel").carousel('cycle');
         $("#carouselButton").children("span").removeClass('fa-play');
         $("#carouselButton").children("span").addClass('fa-pause');
     }
 });

 $("#btn1").click(function(){
   $('#reserve').modal('toggle')

 });



 $("#btn2").click(function(){
   $('#loginModal').modal('toggle')

 });
