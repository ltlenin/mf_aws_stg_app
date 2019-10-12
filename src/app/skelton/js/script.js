
import $ from 'jquery'; 
import '../css/bootstrap.min.css'
import '../css/styles.css'
import '../css/perfect-scrollbar.css' 

 
$(document).ready(function() {
	menuWrapperHghtCalc();
	contentPartHghtCal();
	//  ps = new PerfectScrollbar('.menuWrapper');
	//  ps1 = new PerfectScrollbar('.contentPart');

    $(".menuArrow").on("click", function(){
		if(!$(this).hasClass("menuAct")){
			$(this).addClass("menuAct");
			$("body").addClass("leftMenuAct");
		} else {
			$(this).removeClass("menuAct");
			$("body").removeClass("leftMenuAct");
		}
	});
	
	$("aside").on("mouseenter", function(){
		if($("body").hasClass("leftMenuAct")){
			$("body").addClass("leftMenuActHover");
		}
	}).on("mouseleave", function() {
		$("body").removeClass("leftMenuActHover");
	});
	
	$("#moreBtn").on("click", function(){
		$(".topBar").toggleClass("topBarAct");
	});
	
	$("#mobileMenuBtn").on("click", function(){
		$("aside").toggleClass("asideMobileAct");
	});
	$(".mobileMenuCloseBtn").on("click", function(){
		$("aside").removeClass("asideMobileAct");
	});
	$("#globalSearch").on("click", function(){
		$(".tabBarInput").addClass("tabBarInputAct").focus();
	});
	
	$(".tabBarInput").on("blur", function(){
		if($(this).val()==""){
			$(this).removeClass("tabBarInputAct");
		}
	});
	$("#emailId").on("blur", function(){
		debugger;
	     var email = $("#emailId").val();
	     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	     if (!filter.test(email)) {
	       $("#emailId").addClass('is-invalid');
	       $("#emailId").removeClass('is-valid');
	       //email.focus;
	    } else {
	    	$("#emailId").removeClass('is-invalid');
	    	$("#emailId").addClass('is-valid');
	    }

	 });

	$('#mobileNumber1').add('#mobileNumber2, #pincode').keypress(function(event){
        if(event.which != 8 && isNaN(String.fromCharCode(event.which))){
            event.preventDefault();
        }
    });

	 


});

$(window).resize(function(){
    menuWrapperHghtCalc();
	contentPartHghtCal();
	// ps.update();
	// ps1.update();
});

function menuWrapperHghtCalc(){
	var menuWrapperHght = $(window).height() - $(".logoWrap").outerHeight() - 10;
	$(".menuWrapper").css("height", menuWrapperHght);
}
function contentPartHghtCal(){
	var contentPartHght = $(window).height() - ( $(".topBar").outerHeight() + $(".breadCrumb").outerHeight() + 45);
	$(".contentPart").css("height", contentPartHght);
}