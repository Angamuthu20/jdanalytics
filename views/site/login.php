<?php

	

//exit();
ini_set('display_errors',1);
//error_reporting(E_ALL);
error_reporting(E_ALL & ~E_NOTICE);
//set_include_path(get_include_path() .PATH_SEPARATOR.realpath(dirname(__FILE__) . '/classes/')); 
?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head><title>2ADPRO LOGIN</title>
<?php 

   
?>
<meta name="viewport" content="width=device-width, user-scalable=no" />
<style type="text/css">
	.wrap{
		overflow: hidden;
	}
</style>

</head>
<body>
	<div class="jdx-login-content">
		<div class="jdx-login-main">
			<div class="jdx-main-content-wrapper">
				<div class="jdx-login-wrapper clearfix"><div class="jdx-loginform">
						<form  action="auth/login" method="post" >
							<h3>Jdanalytics</h3>
							<div class="input text">
								<label for="loginUsername">Username or ID</label>
								<input type="text" name="username" id="loginUsername" placeholder="Username or ID" required>
							</div>
							<div class="input password" style="position:relative">
								<label for="loginPassword">Password</label>
								<input type="password" name="password" id="loginPassword" placeholder="Password" required>
								<span id="viewpassword"></span>
							</div>
							<div class="input checkbox sg-replace-icons">
								<input type="checkbox"  id="loginRemember">
								<label for="loginRemember">Remember me</label>
							</div>
							<div class="submit">
							
								<input  type="submit" value="Login" id="submit" >
							</div>
							 
						<input type="hidden" name="<?php echo Yii::$app->request->csrfParam; ?>" value="<?php echo Yii::$app->request->getCsrfToken(); ?>">
							<p style="text-align:center;"><a id="forgotpwdlink" href="#" title="Forgot Password?">Forgot Password?</a></p>
						</form>

					</div><div class="jdx-loginform forgotpwd">
						<form class="jdx-form-login2">
							<h3 style="background:none"></h3>
							<div class="input text">
								<label for="email">Username or ID</label>
								<input type="email" id="email" placeholder="Email" required>
							</div>
							<div class="submit" style="margin: 5px 0;">
								<input  type="submit" value="RESET PASSWORD" id="submitmail" onclick="">
							</div>
							<p><span style="color:#717070;display:none" href="#" >We&#39;ve sent you an email with a link to reset your password.</span></p>
						</form>

					</div>
					<!--div class="jdx-login-announcement"><h2>Announcement</h2></div-->
				</div>
			</div>
		</div>
		<div class="jdx-login-footer">
			<h6>
				<a href="#" title="2ADPRO">2ADPRO LOGIN</a>
			</h6>
		</div>
	</div>


    	<script>

		    $(document).ready(function(){
		        vertAlign();
		        var status ='<?php echo $_REQUEST[1] ;?>';

				
				if(status === 'error')
				   { 
 							
		                localStorage.usrname = '';
		                localStorage.pass = '';
		                localStorage.chkbx = '';
					 swal({title: '', text:'Invalid username/password!', type: '', showCancelButton: false, confirmButtonColor: "#85bb40", confirmButtonText: 'OK', closeOnConfirm: true, customClass: 'swal-wide'}, function ()
 						{

 						});
				   }
		    });

		    $(window).on('resize',function(){
		        vertAlign();
		    });

		    function vertAlign(){
		        var spaceH = $(window).height()-52;

		        var secH = $('.jdx-login-main').height();

		        var mTop = ((spaceH - secH)/2);

		        if(mTop<7.5) mTop=7.5;
		        $('.jdx-login-main').css('padding-top', ((mTop-15)+'px'));
		        $('.jdx-login-main').css('padding-bottom', ((mTop+15)+'px'));
		        }

		        $('#forgotpwdlink').on('click',function(){
		        	$('.jdx-login-announcement').hide();
		        	$('.forgotpwd').show();
		        	vertAlign();
		        })

		        $('#viewpassword').on('mousedown',function(){
		        	$('#loginPassword').attr('type','text');
		        	$('#viewpassword').css('background-image','url("../img/viewpwdhold.png")')
		        })
		        $('#viewpassword').on('mouseup',function(){
		        	$('#loginPassword').attr('type','password');
		        	$('#viewpassword').css('background-image','url("../img/viewpwd.png")')
		        })

		</script>

<script>


	$(document).ready(function(){

		  // checkUserExist();

		$(function() {

		        if (localStorage.chkbx && localStorage.chkbx != "") {
		            $('#loginRemember').attr('checked', 'checked');
		            $('#loginUsername').val(localStorage.usrname);
		            $('#loginPassword').val(localStorage.pass);
		        } else {
		            $('#loginRemember').removeAttr('checked');
		            $('#loginUsername').val('');
		            $('#loginPassword').val('');
		        }

		        $('#submit').on('click', function() {

		            if ($('#loginRemember').is(':checked')) {
		                // save username and password
		                localStorage.usrname = $('#loginUsername').val();
		                localStorage.pass = $('#loginPassword').val();
		                localStorage.chkbx = $('#loginRemember').val();
		            } else {
		                localStorage.usrname = '';
		                localStorage.pass = '';
		                localStorage.chkbx = '';
		            }
		        });
		    });

	});

        function checkUserExist()
	{
		var checkCookie;
		checkCookie = $.cookie("adPro_Token");
		if(checkCookie !== undefined)
		{

			 window.location.href = redirection +"dashboard.php";
		}

	}
// 	function authenticateUser()
// 		{
// 			var username = $('#loginUsername').val().trim();
// 			var passwd = $('#loginPassword').val().trim();
// 			var userToken = '123456';


// 			var encryptPwd = $.md5(passwd);
//  			var jsonObj = {
// 					"username" : username,
// 					"password" : encryptPwd,
// 				      }
// 		    console.log(username);
// 			$.ajax({
// 				type: "POST",
// 				async :"true",
// 				url:"https://api-analytics-qc.2adpro.com/loginAuth/",
// 				data : jsonObj,
// 				cache: false,
// 				crossDomain: true,
// 				success: function (responseData, textStatus, jqXHR) {
// 					console.log(responseData);
// 					var jsonResp = JSON.parse(responseData);
// 					var status = jsonResp["Status"];
					
// 					else
// 					   {
// 						var userToken = jsonResp["Token"];
// 						var siteId = jsonResp["CorporateId"];
// 						var role = jsonResp["BaseRole"];
// 						var idForSite = jsonResp["SiteId"];
// 						var fname=jsonResp["FirstName"];
// 						var lname=jsonResp["LastName"];
// 						var expDate = new Date();
// 						expDate.setTime(expDate.getTime() + (60 * 60 * 1000)); // add 15 minutes
// 						$.cookie('adPro_Token', userToken, { path: '/', expires: expDate });
// 						$.cookie('adPro_User',username,{ path: '/', expires: expDate });					$.cookie('adPro_fname',fname,{ path: '/', expires: expDate });
// 						$.cookie('adPro_lname',lname,{ path: '/', expires: expDate });
// 						$.cookie('adPro_role',role,{path: '/', expires: expDate});
// //						$.cookie('adPro_User',username,{ path: '/', expires: expDate });
// 						$.cookie('adPro_siteId',siteId,{ path: '/', expires: expDate });
// 						$.cookie('adPro_siteid',idForSite,{ path: '/', expires: expDate });
// 						$.cookie('adPro_role',role,{path: '/', expires: expDate});
// 						window.location.href = redirection +"dashboard.php";

// 				   }

// 				},
// 				error: function (responseData, textStatus, errorThrown) {
// 				  		//console.log(responseData)
// 				  swal({title: '', text:'fasdf', type: '', showCancelButton: false, confirmButtonColor: "#1ab394", confirmButtonText: 'Ok', closeOnConfirm: true, customClass: 'swal-wide'}, function ()
// 						{
// 						 

// 						});
// 					  }

// 			    });

// 		}
$('#loginUsername, #loginPassword, #loginRemember').keypress(function(e){
    if(e.which == 13){
        $('#submit').click();
    }
});
/*$('#email').keypress(function(e){
    if(e.which == 13){
        $('#submitmail').click();
    }
});*/
</script>
</body>

</html>
