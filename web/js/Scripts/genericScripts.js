
var redirection = "http://jdanalytics.localhost/"
var redirectionurl = "http://jdanalytics.localhost/auth/logout";
var apiUrl ="http://localhost:5000/";

// var redirection = "https://jdanalytics-qc.2adpro.com/"
// var redirectionurl = "https://jdanalytics-qc.2adpro.com/index.html";
// var apiUrl ="https://api-analytics-qc.2adpro.com/";




function setRedirection()
{
	document.getElementById("profile").href = redirection +"dashboard.html";
	document.getElementById("user").href = redirection +"dashboard.html";
	
}

function logout()
	{		
		$.removeCookie('adPro_User', { path: '/' });
		$.removeCookie('adPro_Token', { path: '/' });
		$.removeCookie('adPro_fname',{ path: '/' });
		$.removeCookie('adPro_lname',{ path: '/' });
		$.removeCookie('adPro_siteId',{ path: '/' });
		$.removeCookie('adPro_siteid',{ path: '/' });
		$.removeCookie('adPro_role',{path: '/'});

		window.location.href = redirectionurl;
		
	}


function showClock()
{
setInterval( function() {
			var hours = new Date().getHours();
			var mins = new Date().getMinutes();
			var hdegree = hours * 30 + (mins / 2);
			var hrotate = "rotate(" + hdegree + "deg)";
	
			$("#hour").css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate});

		}, 1000 );


		setInterval( function() {
		var mins = new Date().getMinutes();
		var mdegree = mins * 6;
		var mrotate = "rotate(" + mdegree + "deg)";

		$("#min").css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate});
		

		}, 1000 );


		$(window).resize(function() {
			if($(document).width()< 765){
				if($(".menuIcon").css('display') == 'none'){
					$(".timeZoneWrap").show();
				}else {
					if($(".clockIcon").hasClass('openNav')){
						$(".timeZoneWrap").hide();
					}else if ($(".clockIcon").hasClass('closeNav')){
						$(".timeZoneWrap").show();
					}
				}
			}else {
				$(".timeZoneWrap").show();
			}
			logWrapCollapse = $(window).width()+20;
		});

		$(".clockIcon").click(function(){
			if($(".timeZoneWrap").css('display') == 'block'){
				$(".timeZoneWrap").hide();
				$(".clockIcon").removeClass('closeNav');
				$(".clockIcon").addClass('openNav');	
			}else {
				$(".timeZoneWrap").show();
				$(".clockIcon").removeClass('openNav');
				$(".clockIcon").addClass('closeNav');	

			}
		});

		$(".timeZoneWrap span.arrow").click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active')
			}else {
				$(this).addClass('active')
			}
			$('.clockDropdown').slideToggle();
	
		});

		updateTime = function(clock){
		  var date = new Date();
		  var hour = date.getHours();
		  var minutes = date.getMinutes();
			$("div[id='"+clock+"'] span[timeattr]").each(function(){
				timeattr=$(this).attr('timeattr');
				timezone_attr=timeattr.split(",");
				var t=new Date();
				
				t.setTime(t.getTime()+(t.getTimezoneOffset()*60000)+((parseInt(timezone_attr[1],10)+parseInt(timezone_attr[2],10))*60000));//the zone's time
				var Dy=t.getFullYear();
				var Dd=t.getDate()<10?'0'+t.getDate():t.getDate();
				var Dm=t.getMonth()<10?'0'+(t.getMonth()+1):t.getMonth()+1;
				var Dh=t.getHours()<10?'0'+t.getHours():t.getHours();
				var Di=t.getMinutes()<10?'0'+t.getMinutes():t.getMinutes();
				var Ds=t.getSeconds()<10?'0'+t.getSeconds():t.getSeconds();
				$(this).find('em').html(Dh+':'+Di);
			});
		}
		setInterval('updateTime("clock-zone");',1000);
		updateTime("clock-zone");

}

$('.btn-nav').click(function(){
	$('.sideMenu').toggleClass('expandMenu');
	$(this).toggleClass('navActive change');
})

$('.dropdown').each(function(){
  $(this).find('a.dropdown-toggle').click(function(){
  	$('.jd-clock-dropdown').slideUp(500);
    $(this).parent().find('.dropdown-menu').slideToggle(500);

  });
});

$(document).on("click",function() {
	$('.jd-clock-dropdown').slideUp(500);
	//$('.dropdown-menu').slideUp(500);
});
 // Filter Menu
$('a.dropdown-toggle.filter-menu').click(function(){
  $(this).toggleClass('active');
});
$('button#applyFilters').click(function(){
	$(this).parents().find('.dropdown-menu').slideUp(500);
	$(this).parents().find('.filter-menu').toggleClass('active');
})

var devHeight = $(window).height();

$('#content-wrapper').css("min-height", devHeight - 80);


$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(500).css({'overflow':'visible'});
});

$('.nav-tabs > li > a').click(function(){
  $('#preloader').show();
  setTimeout(function(){$('#preloader').fadeOut(); }, 3500); // call the loader after execution of function
});

function showPreLoader() {
	$('.info-box #preloader').show();
	$('.info-box-number').css('display' , 'none');
}
function showPreLoader1() {
	$('.info-box #preloader').fadeIn('fast');
	$('.info-box-number').css('display' , 'none');
}
function hidePreLoader1(){	
  $('.js-inbox1 #preloader').fadeOut('fast');
  $('.js-inbox1 .info-box-number').css('display' , 'block');
}
function hidePreLoader2(){	
  $('.js-inbox2 #preloader').fadeOut('fast');
  $('.js-inbox2 .info-box-number').css('display' , 'block');
}
function hidePreLoader3(){	
  $('.js-inbox3 #preloader').fadeOut('fast');
  $('.js-inbox3 .info-box-number').css('display' , 'block');
}
function hidePreLoader4(){	
  $('.js-inbox4 #preloader').fadeOut('fast');
  $('.js-inbox4 .info-box-number').css('display' , 'block');
}
function hidePreLoader5(){	
  $('.js-inbox5 #preloader').fadeOut('fast');
  $('.js-inbox5 .info-box-number').css('display' , 'block');
}
function hidePreLoader6(){	
  $('.js-inbox6 #preloader').fadeOut('fast');
  $('.js-inbox6 .info-box-number').css('display' , 'block');
}
