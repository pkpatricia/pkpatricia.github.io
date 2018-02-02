

$(document).ready(function() {
	
	"use strict";
  
	$(".cont").hide();
	
      /*$('.toggle-nav').click(function(e) {

        $(this).toggleClass('active');
        $('.menu ul').toggleClass('active');

        e.preventDefault();
      });*/
			
	
	
		$("#dot").mouseleave(function() {
			$(".cont").hide();
			$("#dot").stop().animate(
					{
						minWidth: '20em',
						minHeight: '20em'
					},
					1000,
					'easeOutSine');
			
		});
	
		$("#dot").mouseenter(function(){
			$(".cont").show();
			$("#dot").stop().animate(
			
					{
						minWidth: '30em',
  					minHeight: '30em'
						
					},
					3000,
					'easeInSine');
			
			});
	
	  
});