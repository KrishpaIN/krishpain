$(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {	
      var $carousel = $('.carousel ');  
      var $items = $carousel.find('.item');
      if($items.length <= 1) {
        $items.addClass('active');
        $('.carousel-indicators,.carousel-control', $carousel).remove();
      }
    });
	
	
	 $("#resources-search-form").css('display','block');	
	
  });


$(document).ready(function () {	
var deviceAgent = navigator.userAgent.toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
	if (agentID) {		
	$(".masthead").css({'background-attachment':'scroll'});	
	//if ($(window).width() > 320) {	
//  $(".custom-indicators .carousel-indicators li:nth-of-type(5)").css({'margin-top':'26px'});
//}
//else {
//   $(".custom-indicators .carousel-indicators li:nth-of-type(5)").css({'margin-top':'36px'});
//}	       
	}
	



		
    $('.rrssb-buttons').each(function () {
       var title = $(this).parent().attr('data-title');
       var url = $(this).parent().attr('data-url');
       $(this).find('li.rrssb-facebook a').attr('href','https://www.facebook.com/sharer/sharer.php?u='+url);
       $(this).find('rrssb-googleplus a').attr('href','https://plus.google.com/share?url='+url);       
       $(this).find('li.rrssb-twitter a').attr('href','http://twitter.com/home?status='+title+' '+url);
       $(this).find('li.rrssb-linkedin a').attr('href','http://www.linkedin.com/shareArticle?mini=true&amp;url='+url);
//       $(this).find('li.rrssb-googleplus a').attr('href', text);
//       $(this).find('li.rrssb-googleplus a').attr('href', text);
        var text = $(this).find('li.rrssb-twitter a').attr('href');
        text = text.replace('%2Fresources', '%2Fresource');
    });

//	var animate = new Animate({
//            target: '[data-animate]',
//            animatedClass: 'visible',
//            offset: [0.5, 0.5],
//            delay: 0,
//            remove: false,		 
//            reverse: true,
//            scrolled: false,
//            debug: true,
//            onLoad: true,
//            onScroll: true,
//            onResize: false,
//            callbackOnInit: function() {
//                console.log('Initialised');
//            },
//            callbackOnInView: function(element) {
//                var animationType = element.getAttribute('data-animation-classes').replace('animated', '').trim();
//                console.log(animationType + ' in view.');
//            },
//            callbackOnAnimate: function(element) {
//                console.log(element);
//            }
//        });
//
//        animate.init();	

    
  $(".iconwrapper").hover(function(){	 
        $(this).find(".circleimg").toggleClass("hidden");
		$(this).find(".imghover").toggleClass("hidden");	
    });					

//$('#social').hover(function() {
//  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
//}, function() {
//  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
//});

//commented by vikas due to open this on back button

//$(".mew").on("mouseover", function () {
//    this.checked = ! this.checked;
//});
//
//$(".checkbox-toggle").on("mouseover", function () {
//    this.checked = ! this.checked;
//});


 $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('.jump').offset().top }, 'slow');
      return false;
    });	
	
  });


//  $(".share").hover(function(){
//         $('.sharebox').show();		 
//        }, function(){
//         $('.sharebox').hide();
//    });
	
$('#urbantab').tabCollapse();	
$('#sptab1').tabCollapse();
$('#govtab').tabCollapse();
$('#adolescent').tabCollapse();		
$('#knowledge-creation').tabCollapse();				


//read more...

//$(".wedrivebox p").text(function(index, currentText) {	
//  var maxLength = $(this).parent().attr('data-maxlength');
//  if(currentText.length >= maxLength) {
//    return currentText.substr(0, maxLength) + "...";
//  } else {
//    return currentText;
//  } 
//});



 $('.ourvaluesaccor .panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.ourvaluesaccor .panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });  





});


$(window).scroll(function(){ 
var a = 50;
var pos = $(window).scrollTop();
if(pos > a) {                 
	// $(".navwrapper").css({'box-shadow': '0px 0px 8px #ccc', 'background': 'white'});
	  //$(".navbar-brand img").css({'width':'60%'});
	   $('.navbar-brand img').fadeOut();
	  $(".navbar-brand img").addClass('logoani');	
	  $(".navwrapper").removeClass('padt20');	
}
else {
	  $(".navbar-brand img").addClass('logoani');	
  //$(".navwrapper").css({'box-shadow': '0px 0px 0px transparent', 'background': 'transparent'}); 
  if($(window).width() <= 1400)  
{	
   $(".navbar-brand img").css({'width':'60%'});
    $('.navbar-brand img').fadeIn();
  
} else {
   $('.navbar-brand img').fadeIn();
   $(".navbar-brand img").css({'width':'auto'});
}
  
    $(".navwrapper").addClass('padt20');		
}

 var currentScrollTop = $(window).scrollTop();
        $('#blackOverlay').css('opacity',currentScrollTop/$('#blackOverlay').height());		
		var b = 50;		
		
var scroll = $(window).scrollTop();
if(scroll > b) {                 
	// $(".navwrapper").css({'box-shadow': '0px 0px 8px #ccc', 'background': 'white'});
	  $(".mbr-arrow").css({'opacity':'0'});	   
}
else{
	$(".mbr-arrow").css({'opacity':'1'});	
	}
});


// var divs = $('.annualreport .col-sm-4');
//   if ($(window).width() > 991) {
//      for (var i = 0; i < divs.length; i += 3) {
//           divs.slice(i, i + 3).wrapAll('<div class="row"></div>');
//       }
//    } else {
//       for (var i = 0; i < divs.length; i += 3) {
//           divs.slice(i, i + 3).wrapAll('<div class="row"></div>');
//      }
//   }

 

// var divs = $('.reportwrapper .col-sm-4');
//    if ($(window).width() > 991) {
//        for (var i = 0; i < divs.length; i += 3) {
//            divs.slice(i, i + 3).wrapAll('<div class="row"></div>');
//        }
//    } else {
//        for (var i = 0; i < divs.length; i += 3) {
//            divs.slice(i, i + 3).wrapAll('<div class="row"></div>');
//        }
//    }


 var divs = $('.thumbnailwrapper .col-sm-6');
    if ($(window).width() > 768) {
        for (var i = 0; i < divs.length; i += 4) {
            divs.slice(i, i + 4).wrapAll('<div class="row"></div>');
        }
    }	
	 else {
        for (var i = 0; i < divs.length; i += 2) {
            divs.slice(i, i + 2).wrapAll('<div class="row"></div>');
        }
    }
	
	
//	 var divs = $('.thumbnailwrapper .col-sm-6');
//    if ($(window).width() > 768) {
//        for (var i = 0; i < divs.length; i += 4) {
//            divs.slice(i, i + 4).wrapAll('<div class="row"></div>');
//        }
//    }		
//	 else if ($(window).width() == 768) {
//        for (var i = 0; i < divs.length; i += 2) {
//            divs.slice(i, i + 2).wrapAll('<div class="row"></div>');
//        }
//    }	
//	 else {
//        for (var i = 0; i < divs.length; i += 1) {
//            divs.slice(i, i + 1).wrapAll('<div class="row"></div>');
//        }
//    }
//	


 var divs = $('.finanYear .col-sm-4');
    if ($(window).width() > 991) {
        for (var i = 0; i < divs.length; i += 3) {
            divs.slice(i, i + 3).wrapAll('<div class="row"></div>');
        }
    } else {
        for (var i = 0; i < divs.length; i += 3) {
            divs.slice(i, i + 3).wrapAll('<div class="row"></div>');
        }
    }





 var divs = $('.benefits .col-lg-4');
   if ($(window).width() > 991) {
      for (var i = 0; i < divs.length; i += 3) {
           divs.slice(i, i + 3).wrapAll('<div class="col-sm-12 sm-mt-40 xs-mt-30"></div>');
       }
    } else {
       for (var i = 0; i < divs.length; i += 3) {
           divs.slice(i, i + 3).wrapAll('<div class="col-sm-12 sm-mt-40 xs-mt-30"></div>');
      }
   }

 
// if ($(window).width() <= 767) {
// $('#impactCarousel.carousel').carousel({
//		interval: false
//	});
// }     

  
$(document).on("mouseover",".circle-text",function(event) {
	var id = $(this).attr("data-id");
	if(event.type==="mouseover"){
		$(".networkcontent:not(."+id+")").fadeOut();
		$('.'+id).fadeIn();
		$('.circle-text').not(this).removeClass('active');
		$(this).addClass('active');
	}		
	 
});	

$(document).ready(function () {
    //console.log();
    $(".custom-indicators .item-class > div").on("click", function () {
        // console.log($(this).find("a"));
        $(".custom-indicators .item-class > div").removeClass("active");
        $(this).addClass("active");
    });
	
	 $('[data-toggle="tooltip"]').tooltip();	
});

$('#dacvideo').bind('slid.bs.carousel', function (e) {
    var ytdId = $('.item').not('.active').find('iframe').attr('id');
   $('#'+ytdId)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*'); 
});


//$(document).on('click','.owl-next,.owl-prev',function(event){
//	event.preventDefault();	
//	  $('.flip').toggleClass('flipped');
//	   $('.flip2').toggleClass('flipped');	
//	    $('.flip3').toggleClass('flipped');	  	 
//});
