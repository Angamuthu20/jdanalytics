<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head><title>2ADPRO PASSWORD RESET</title>
<meta name="viewport" content="width=device-width, user-scalable=no" />	
<link href="css/jdx-login.css" rel="stylesheet" type="text/css">
<link href="css/sweetalert/sweetalert.css" rel="stylesheet">
<style type="text/css">
.jdx-loginform{
	min-height: 248px;
}
.resetMessage{
    color: #f17337;
}
.jdx-login-content{
    margin: 0;
}
</style>
</head>
<body>
	<div class="jdx-login-content">
		<div class="jdx-login-main">
			<div class="jdx-main-content-wrapper">
				<div class="jdx-login-wrapper clearfix"><div class="jdx-loginform">
						<form class="jdx-form-reset">
							<h3>Jdanalytics</h3>
							<div class="input password" style="position:relative">
								<label for="loginUsername">NEW PASSWORD</label>
								<input type="password" id="resetPassword" placeholder="New password">
								<span class="viewpassword"></span>
							</div>
							<div class="input password" style="position:relative">
								<label for="loginPassword">CONFIRM PASSWORD</label>
								<input type="password" id="confirmPassword" placeholder="Confirm password">
								<span class="viewpassword"></span>
							</div>
							<div class="submit">
								<input  type="submit" value="RESET" id="submitPwd"> 
							</div>
							<p><span class="resetMessage" style="display:none" href="#" >We&#39;ve reset your password.</span></p>
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
<script src="js/jquery-2.1.1.js.download"></script> 
    	
    <script src="js/jquery.md5.js"></script>	
    <script src="js/bootstrap.min.js.download"></script>
    <script src="js/jquery.cookie.js.download"></script>
    <script src="js/jquery.metisMenu.js.download"></script>
    <script src="js/jquery.slimscroll.min.js.download"></script>
    <script src="js/inspinia.js.download"></script>
    <script src="js/plugins/sweetalert/sweetalert.min.js"></script>	
    <script src="js/Scripts/genericScripts.js"></script>	
    <!-- jQuery UI -->
    <script src="js/jquery-ui.min.js.download"></script>
    	
    	<script>
    
		    $(document).ready(function(){
		        vertAlign();
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

		        $('.viewpassword').on('mousedown',function(){
		        	$(this).prev('input').attr('type','text');
		        	$(this).css('background-image','url("img/viewpwdhold.png")')
		        })
		        $('.viewpassword').on('mouseup',function(){
		        	$(this).prev('input').attr('type','password');
		        	$(this).css('background-image','url("img/viewpwd.png")')
		        })

		</script>

<script>

	
$('#resetPassword, #confirmPassword').keypress(function(e){
    if(e.which == 13){
        $('#submitPwd').click();
    }
});

// $('div.checkbox input').on('click', function(){
// 	if($('div.checkbox input').prop('checked')==true)

// })

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


    $('form').submit(function(e){
         var pwdPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
         var newPwd = $('#resetPassword').val();
         var cnfPwd = $('#confirmPassword').val();
         if(pwdPattern.test(newPwd))
          {
            if(newPwd==cnfPwd){
                $('.resetMessage').hide();
                return true;
            }
            else{
                $('.resetMessage').show();
                $('.resetMessage').html('<strong>New password</strong> and <strong>Confirm password</strong> do not match.');
                vertAlign();
                return false;
            }
          }
        else
          {
            $('.resetMessage').show();
            $('.resetMessage').html('Passwords must have,<ul style="padding-left:30px"><li>- minimum 5 characters</li><li>- atleast 1 alphabet and 1 digit</li>');
            e.preventDefault();
            vertAlign();
           return false;
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
