<?php

?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>2adpro</title>
<script type="text/javascript" src="/Script/graphicalReport.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"></script>


<style>
displayClass {
	display: none;
}
.tooltip {
	background: rgba(0,0,0,0.7);
	color: #fff;
	padding: 10px;
	border-radius: 5px;
	font-family: 'Lato-Regular';
	font-weight: normal;
}
#advTab li{  
    width: auto !important;
    padding: 0;
    margin: 16px 20px 0 20px;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    float: left;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0.2px;
    background-position: 0px 20px;
    position: relative;
    text-transform: uppercase;
    list-style: none;
}
#advTab li a {
    color: #4c4c4c;
}
#advTab li:hover a {
   color:#80c142;
}
#advTab li a:after {
    content: '';
    height: 2px;
    width: 0px;
    background: #4c4c4c;
    position: absolute;
    left: 0;
    bottom: -5px;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
}
#advTab li a:hover:after, #advTab li a.active:after {
    width: 18px;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
}
</style>
</head>

<body>
<!-- Preloader -->
<div id="preloader" class="toppreloader"> 
  <!--<div id="status">asdsad</div>-->
  <div class="loader">Loading...</div>
</div>
<div id="content-wrapper" class="white-bg">
<div class="row">

</div>
<div class="wrapper wrapper-content animated fadeInRight graphical-report mt10" >
  <div class="right-links"> <a  target="_self"  id="pdfdownload" / >
    <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
</a> <a onclick="viewMailmodal()">
    <i class="fa fa-envelope-o" aria-hidden="true"></i>
  </a> </div>
  <div id="pdfDiv" class="jd-innerContent">
    <div class="row campaign-name">
      <div class="col-lg-8">
        <div class="form-group pull-left">
          <button type="button" class="btn btn-icon" id="refresh-btn" onclick="moveBack()"><i class="fa fa-chevron-left "></i> </button>
        </div>
        <h1>Campaign Info <!--span id="orderNameId"></span--> </h1>
      </div>
      <!--<div class="col-lg-4 text-right pr35">
				<a onclick="pdfGenerator()" ><img src="../img/pdf1.png" alt="Download pdf" /></a>
				<a onclick="viewMailmodal()"><img src="../img/mail1.png" alt="Download pdf" /></a>
			</div>--> 
    </div>
    <div class="clearfix campaign-view-top">
      <div class="row campain-row">
        <div class="col-lg-2">
          <div class="bg-gray">
            <h3>URN</h3>
            <p id="trackingno"></p>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="bg-gray">
            <h3>Campaign Name</h3>
            <p id="ordername"></p>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="bg-gray">
            <h3>Advertiser</h3>
            <p id="adv"></p>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="bg-gray">
            <h3>Sales Rep</h3>
            <p id="salesrep"></p>
          </div>
        </div>
      </div> 
	  
      <div class="row campain2-row">
        <div class="col-lg-2">
          <div class="bg-gray adserve-first-block">
            <h3>Start Date</h3>
            <p id="ostartdate"></p>
          </div>
          
        </div>
		<div class="col-lg-2">
		<div class="bg-gray adserve-first-block adserve-end-date">
            <h3>End Date</h3>
            <p id="oenddate"></p>
          </div>
		</div>
        <div class="col-lg-2">
          <div class="bg-gray adserve-second-block">
            <h3>Region</h3>
            <p id="region_name"></p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="bg-gray clearfix adserver-block">
            <h3 class="title-adserver pull-left">Ad servers</h3>
            <div class="pull-left dfp-img" style="display:none"><img src="../img/title-dfp.png" alt=""></div>
            <div class="pull-left fb-img" style="display:none"><img src="../img/title-facebook.png" alt=""></div>
          </div>
        </div>
      </div>	  
	  
      <div class="row">
        <div class="ibox float-e-margins">
          <div class="ibox-title">
            <div class="ibox-content adserve-list" >
              <div class="row sum-five-col">
                <div class="col-lg-2">
                  <div class="info-box"> <span class="info-box-icon bg-green"><img src="../img/views.png" alt="Total Impressions"></span>
                    <div class="info-box-content"> <span class="info-box-text">Total Impressions</span> <span class="info-box-number" id="totalImpressions" ></span> </div>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="info-box"> <span class="info-box-icon bg-green"><img src="../img/clicks.png" alt="Total Clicks"></span>
                    <div class="info-box-content"> <span class="info-box-text">Total Clicks</span> <span class="info-box-number" id="totalClicks" ></span> </div>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="info-box"> <span class="info-box-icon bg-green"><img src="../img/rate.png" alt="Click Through Rate"></span>
                    <div class="info-box-content"> <span class="info-box-text">Click Through Rate</span> <span class="info-box-number" id="clickRate" ></span> </div>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="info-box"> <span class="info-box-icon bg-green"><img src="../img/target.png" alt="Average eCPM"></span>
                    <div class="info-box-content"> <span class="info-box-text text-trans-none">AVERAGE eCPM</span> <span class="info-box-number" id="eCPMRate" ></span> </div>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="info-box"> <span class="info-box-icon bg-green"><img src="../img/amount.png" alt="Amount Spent"></span>
                    <div class="info-box-content"> <span class="info-box-text">Amount Spent</span> <span class="info-box-number" id="AmountSpent" ></span> </div>
                  </div>
                </div>
              </div>
			  
			  </div>
			  </div>
			  </div>
			  </div>
</div>
              
              <!-- h3 class="content-head">&nbsp;&nbsp;Line Item: <span id="lineItemSpanId"></span></h3--> 
              
              <!--<div class="col-lg-6">
									<div class="ibox float-e-margins">
					    			    <div class="ibox-title"><h4><b>LINEITEMS COUNT PER DAY</b></h4></div>
								    	<div class="ibox-content">
											
													<canvas  class="" id="adsGraph" name="adsGraph"></canvas>
												
										</div>
									</div>
								</div>
									</div>-->
									
									
									
              <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <ul id="advTab">
                    <li id="infoBtn"><a class="active">Line Item Info</a></li>
                    <li id="creativeBtn"><a>Creatives</a></li>
                  </ul>
                </div>
              </div>
			  
              <div class="row">
                <div id="infoWrap">
				<div class="col-lg-12 col-md-12 col-sm-12" >
                 <div id="d_linitems">
                 </div>
				<div id="d_facebook">
				</div>
				</div>
              </div>           
            <div id="creativeWrap" style="display:none;">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div  class="line-item-cont">
                    <div class="ibox float-e-margins">
                      <div class="ibox-title text-uppercase">
                        <h4>Line Item Analytics</h4>
                      </div>
                      <div id="tables">
                  </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 col-md-5 col-sm-5" id="preview_line">
                 <div class="ibox-title text-uppercase"><h4>Creative Preview</h4>
					</div>
              </div>
            </div>
			</div>

        </div>
      </div>
    </div>
 </div>
      </div>
     
      <div class="push"></div>
    </div>
<div class="footer">
  <div> <img src="../img/jdanalytics-footer-ad2pro.jpg"/> </div>
</div>
<!-- Mainly scripts --> 

<script>


	        
function pdfGenerator() {

	
/*
	

var quotes = document.getElementById('pdfDiv');
    $('#line-item-box').css("height","auto");
    $('#line-item').css("height","auto"); 
       html2canvas(quotes, {
        onrendered: function(canvas) {
	var filename = $('#orderNameId').text();
	//console.log('filename' +filename);	
        var pdf = new jsPDF('l', 'pt','letter');
	
        for (var i = 0; i <= quotes.clientHeight/2000; i++) {
           
            var srcImg  = canvas;
            var sX      = 0;
            var sY      = 2000*i; 
            var sWidth  = 3000;
            var sHeight = 2000;
            var dX      = 0;
            var dY      = 0;
            var dWidth  = 2500;
            var dHeight = 980;

            window.onePageCanvas = document.createElement("canvas");
            onePageCanvas.setAttribute('width', 3000);
            onePageCanvas.setAttribute('height', 2000);
            var ctx = onePageCanvas.getContext('2d');
            ctx.drawImage(srcImg,sX,sY,sWidth,sHeight,dX,dY,dWidth,dHeight);

            var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);

            var width         = onePageCanvas.width;
            var height        = onePageCanvas.clientHeight;

            if (i > 0) {
                pdf.addPage(1000, 1000); //8.5" x 11" in pts (in*72)
            }
    
            pdf.setPage(i+1);
        
            pdf.addImage(canvasDataURL, 'PNG', 30, 40, (width*.62), (height*.62));

        }
    
        pdf.save(filename+'.pdf');
    }
  });
   $('#line-item-box').css("height","");
    $('#line-item').css("height","");
*/

}

function validate(email)
{
	 var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            if (reg.test(email) === true) 
            {
                
                return true;
            }
            else{
                return false;
            }
}

function sendmail()
{

	

var filename = $('#orderNameId').text();         
var to = $('#toMail').val();
var subject = $('#subject').val();
var mailbody = $('#mailbody').val();

if(to.length <= 0)
{

	swal({title: '', text: 'Please enter mail id', type: '', showCancelButton: false, confirmButtonColor: "#1ab394", confirmButtonText: 'Ok', closeOnConfirm: true, customClass: 'swal-wide'}, function ()
						{
						   

						});
	return;

}

if(subject.length <= 0)
{

	swal({title: '', text: 'Please enter Subject', type: '', showCancelButton: false, confirmButtonColor: "#1ab394", confirmButtonText: 'Ok', closeOnConfirm: true, customClass: 'swal-wide'}, function ()
						{
						   

						});
	return;

}

if(mailbody.length <= 0)
{

	swal({title: '', text: 'Please enter Subject', type: '', showCancelButton: false, confirmButtonColor: "#1ab394", confirmButtonText: 'Ok', closeOnConfirm: true, customClass: 'swal-wide'}, function ()
						{
						   

						});
	return;

}
  var validmail = validate(to);
  if(validmail === true)
    {
	 
	swal({title: '', text: 'Mail will be sent shortly to ' +to, type: '', showCancelButton: false, confirmButtonColor: "#1ab394", confirmButtonText: 'Ok', closeOnConfirm: true, customClass: 'swal-wide'}, function ()
						{
		 $('#maildetails').modal('hide');

						});

	

	var jsonObj1 = {
			
			"id" : $("#trackingno").html(),
			"mail":'yes',
			
	}


	var jsonObj = {
			"filename" :'BB3615256.pdf',
			"to":to,
			"subject":subject ,
			"txt":mailbody
	}

	console.log(jsonObj);
	
	
	$.ajax({
		type: "GET",
		url:"/dashboard/download",
		data :jsonObj1,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {

			var jsonObj = {
					
					"filename" : responseData,
					"to":to,
					"subject":subject,
					"txt":mailbody
			}

			
			$.ajax({
				type: "POST",
				async :"true",
				url:apiUrl+"generatePdf",
				data : jsonObj,
				cache: false,
				crossDomain: true,
				success: function (responseData, textStatus, jqXHR) {
					console.log(responseData);
			
				},
				error: function (responseData, textStatus, errorThrown) {
				  	console.log(responseData)	
				 }

			    });

	
		},
		error: function (responseData, textStatus, errorThrown) {
		  	console.log(responseData)	
		 }

	    });

	
	
	    }
		    
    else
     {
	swal({title: '', text: 'Enter valid mail Id', type: '', showCancelButton: false, confirmButtonColor: "#1ab394", confirmButtonText: 'Ok', closeOnConfirm: true, customClass: 'swal-wide'}, function ()
						{
						   

						});
     }			
	
}

function viewMailmodal()
{
	var fname = $.cookie("adPro_fname");
        var lname = $.cookie("adPro_lname");
	var campaignName = $('#orderNameId').text();
        var subjecttxt = "Summary of " +$("#ordername").html();
        var bodyTxt = "Please find the attachment for the campaign summary in this email\n\n\n" + "Cheers,\n" +'<?php echo   $_SESSION["username"] ;?>';
        $('#toMail').val("");
        $('#subject').val(subjecttxt);
	$('#mailbody').val(bodyTxt);
	$('#maildetails').modal('show');
	
}


      $('#dash_list').on('click', function(){
        window.location.href="../dashboard";
      })
      $('#sales_list').on('click', function(){
        window.location.href="../dashboard";
      })
      
      function moveBack()
      {
          window.location.href="../dashboard";
          
      }

</script> 
<script>
  function updateecpm()
  {
    
      var impressions =$("#totalImpressions").html();

        var amount =$("#AmountSpent").html();

        impressions= parseInt(impressions.replace(/,/g, ''), 10);

        amount =amount.replace('£', '');
       
        amount= parseInt(amount.replace(/,/g, ''), 10);


       var ecpm=(amount/impressions)*1000;

       if(ecpm!=="NaN")
       {      
       document.getElementById('eCPMRate').innerHTML = "£ " +parseFloat(ecpm.toFixed(2)).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});
       }
       
  }

	function checkUserExist()
	{	
		/*var checkCookie;
		var user = $.cookie("adPro_User");
		checkCookie = $.cookie("adPro_Token");
		var fname = $.cookie("adPro_fname");
                var lname = $.cookie("adPro_lname");
		if(checkCookie !== undefined)
		{*/
			//document.getElementById('userLogged').innerHTML = fname +" "+lname;
			var searchParams = new URLSearchParams(window.location.search);
			var sel_lineitem = searchParams.get('lineItem');
			var sel_lineItemNew=searchParams.get('lineItemNew');
			$('#orderNameId').html(sel_lineitem);
			$('#lineItemSpanId').html(sel_lineItemNew);
			//alert(sel_lineItemNew);
			//drawBarForADS(sel_lineitem);
		//	drawBarForImpression(sel_lineitem);
			showImpression(sel_lineitem);
			showClicks(sel_lineitem);
			showCtr(sel_lineitem);
		//	showInteractionRate(sel_lineitem);
			//showDwelledRate(sel_lineitem);
      getLineItemAnalytics(sel_lineitem);
      getLineItemCreatives(sel_lineitem);
      getOrderBudget(sel_lineitem);

      getAllLineItem(sel_lineitem);

      getFacebookLineItem(sel_lineitem);
      showFbImpression(sel_lineitem);

		//}
		//else
		//{
			//window.location.href = "https://pucadmin.s3-website.ap-south-1.amazonaws.com/index.html";
			//window.location.href = redirectionurl;
			//window.location.href = "/adPro/index.html";
		//}
		
	}
	
	$(document).ready(function(){
        $('#infoBtn').on('click', function(){
          $('#infoWrap').show();
          $('#creativeWrap').hide();
          $('#infoBtn a').addClass('active');
          $('#creativeBtn a').removeClass('active');
      window.dispatchEvent(new Event('resize'));
        })
        $('#creativeBtn').on('click', function(){
          $('#infoWrap').hide();
          $('#creativeWrap').show();
          $('#creativeBtn a').addClass('active');
          $('#infoBtn a').removeClass('active');
      window.dispatchEvent(new Event('resize'));
        })
		});

    	$(document).ready(function(){

        $(".filter-block").hide();
		
    		$("html").niceScroll({cursorborder:"",cursorwidth: "7px",cursorcolor:"rgba(188,214,69,0.8)",boxzoom:true, cursorborderradius: "0px",autohidemode: false});
    		 $("div#line-item").niceScroll({cursorborder:"",cursorcolor:"rgba(0,0,0,0.1)",cursorborderradius: "0px",boxzoom:true});
    		 
          
         
     
		checkUserExist();
		//setRedirection();
		
		// Header Clock Animation

        showClock();

        var zoneTime = $('span.timezone.activeclock em').text();
        $('input.timezone.active').val(zoneTime);
        $('.timezone').click(function() {
          zoneTime = $(this).find('em').text();
          $('input.timezone.active').val(zoneTime);
          $("input.timezone.active").trigger("change");
          $('.jd-clock-dropdown').slideUp();
        });
        $('input.timezone.active').timepicker();
        $(".jquery-timepicker").click(function(e) {
          e.stopPropagation();
          $('.dropdown-menu').slideUp();
          $('.jd-clock-dropdown').slideToggle();
        });




    
      $("#camp_list").addClass('active');
      $("#dash_list").removeClass('active');






 
	 });




      function pBar(aMin,aMax){
      console.log(aMin);
      console.log(aMax);
      var progressBarWidth;
      console.log((aMin/aMax)*100);
      console.log(aMax);
      progressBarWidth=(((aMin/aMax)*100)+"%");
      console.log(progressBarWidth);
      return progressBarWidth;
      }

      function pColor(aMin,aMax){
      var progressBarWidth;
      var progressBarColor;
      var someValueToCheck;
      progressBarWidth=(((aMin/aMax)*100)+"%");
      someValueToCheck = aMin/aMax;
      if(someValueToCheck <= 0.3) {progressBarColor = "#ea5b24";}
      else if(someValueToCheck <= 0.7) {progressBarColor = "#dece12";}
      else {progressBarColor = "#4dbb40";}
      console.log(progressBarColor);
      return progressBarColor;
       }



	function responsive_lineItemReport()
                 {
                     
                      $('#line-item-report').DataTable({
                             	dom: '<"html5buttons"B>lTfgitp',
				                buttons: [
				                   
				                    {extend: 'csv',title: 'Line Item Report'},
				                    {extend: 'excel', title: 'Line Item Report'},
				                    //{extend: 'pdf', title: 'Order Report'},

				                   
				                ],
                        pageLength: 25

                        });
                   
        	}
			
			
			

    </script>
<div class="modal inmodal fade" id="maildetails" tabindex="-1" role="dialog"  aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title"></h4>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-lg-12"> 
            <!--<div class="col-lg-3">
					  To Email Id :
                                       </div>-->
            <div class="col-lg-12">
              <input class="form-control" type="text" id="toMail" name="toMail" placeholder="To">
            </div>
          </div>
        </div>
        <br/>
        <div class="row">
          <div class="col-lg-12"> 
            <!--<div class="col-lg-3">
					  Subject :
                                       </div>-->
            <div class="col-lg-12">
              <input class="form-control" type="text" id="subject" name="subject" placeholder="Subject">
            </div>
          </div>
        </div>
        <br/>
        <div class="row">
          <div class="col-lg-12"> 
            <!--<div class="col-lg-3">
					  Body :
                                       </div>-->
            <div class="col-lg-12">
              <textarea class="form-control" rows="5" cols="50" id="mailbody" name="mailbody"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-white" data-dismiss="modal">CLOSE</button>
        <button type="button" class="btn btn-primary" onclick="sendmail()">SEND</button>
      </div>
    </div>
  </div>
</div>
</body>
</html>
