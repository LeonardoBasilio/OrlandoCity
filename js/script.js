$(document).ready(function(){

			

			$("#input-search").on("focus",function(){

				$("li.search").addClass("ativo");

			}).on("blur",function(){
				$("li.search").removeClass("ativo");

			});

			$('.owl-carousel').owlCarousel({
   				 loop:true,
    			margin:10,
    			nav:true,
    			responsive:{
        				0:{
            			   items:1
       				 },
        			600:{
            			items:3
        			},
       			    1000:{
            			items:4
       				 }
    			}
			})

});