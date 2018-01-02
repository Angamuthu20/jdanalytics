<?php

/* @var $this \yii\web\View */
/* @var $content string */

use app\widgets\Alert;
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>

<?php 
$data=$_SERVER['REQUEST_URI'];
$urls=explode('?',$data);
if(isset($_SESSION['user'])  and $urls[0]!='/dashboard/downloadpdf' )
{?>

 <link href="../customCSS/bootstrap.min.css" rel="stylesheet">

<?php }?>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
   
</head>
<body>
<?php $this->beginBody() ?>
<div>

<?php if(isset($_SESSION['user'])  and $urls[0]!='/dashboard/downloadpdf')
{?>
  <div id="preloader2" class="toppreloader2" style='display:none'>
     <div class="loader">Loading...</div>
  </div>
 
<nav class="navbar navbar-static-top" role="navigation">

        <div class="jd-innerWrap">
        <div class="navbar-header">
          <a class="btn btn-nav" href="#">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </a>
          <div class="sideMenu">
            <ul class="nav metismenu" id="side-menu">
              <li><a href="dashboard/dashboard"><i class="fa fa-dashboard"></i> <span class="nav-label">Dashboard</span> <span class="fa arrow"></span></a></li>
              <li><a href="campaign/campaign"><i class="fa fa-bullhorn"></i> <span class="nav-label">Campaigns</span> <span class="fa arrow"></span></a></li>
              <li><a href="campaign/dashborad"><i class="fa fa-bullhorn"></i> <span class="nav-label">Sales</span> <span class="fa arrow"></span></a></li>
            </ul>
          </div>
          <span class="nav-logo"><img src="../img/NMG.png" alt="Newsquest" title="Newsquest"></span>
          <ul class="jd-navLinks">
              <li><a href="/" id="dash_list" class="active activeads">Dashboard</a></li>
              <!--li><a href="sources.html" class="">Sources</a></li-->
              <li><a href="#" id="camp_list" class="createjob">Campaigns</a></li>
              <li><a href="#sales" id="sales_list" class="">Sales</a></li>
              <!-- <li><a href="#" class="analytics">INSIGHTS</a></li> -->
              <!-- <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">JDX APPS</a>
                <ul class="dropdown-menu">
                  <li><a href="#">JDflow <img src="assets/images/jd-flow.png" alt=""></a></li>
                  <li><a href="#"> JDtraffic <img src="assets/images/jd-traffic.png" alt=""></a></li>
                  <li><a href="#">JDvault <img src="assets/images/jd-vault.png" alt=""></a></li>
                </ul>
              </li> -->
          </ul>
        </div>
		<div class="powered-txt">POWERED BY <span class="green-txt">JD</span><span class="orange-txt">X</span></div>
        <ul class="nav navbar-top-links navbar-right">
          <li>
            <div class="navRightWrap">
              <div class="timeZoneContainer" id="clock-zone">
                <div class="clock-animation">
                  <p><input value="" class="timezone active" type="text"></p>
                  <div class="jd-clock-dropdown" style="display: none;">
                    <span class="timezone " timeattr="IST,330,0">IST <em>01:33</em></span>
                    <span class="timezone" timeattr="GMT,0,0">GMT <em>20:03</em></span>
                    <span class="timezone" timeattr="EST,-300,0">EST <em>15:03</em></span>
                    <span class="timezone" timeattr="CST,-360,0">CST <em>14:03</em></span>
                    <span class="timezone" timeattr="MST,-420,0">MST <em>13:03</em></span>
                    <span class="timezone" timeattr="PST,-480,0">PST <em>12:03</em></span>
                  </div>
                  <span class="timezone activeclock" timeattr="IST,330,0">IST <em>01:33</em></span>
                </div>
              </div>
            </div>
          </li>

          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="userLogged" name="userLogged">
              <img src="../../img/profile-img.jpeg" alt="" class="profile-img">
            <?php echo $_SESSION["username"];?></a>
            <ul class="dropdown-menu">
              <!--<li class="user-header"><a href="" id="profile">Profile Settings</a></li>
              <li class="user-header"><a href="" id="user">User Settings</a>
                <li>-->
                  <li class="user-header"><a onclick="logout()">Logout</a></li>
            </ul>
            </li>
        </ul>
      </div>
      
      </nav>
      
       <div class="filter-block">
                <div class="clearfix">
                  <input type="hidden" id="siteId" name="siteId" value=<?php echo $_SESSION["site_Id"];?> />
                  <input type="hidden" id="role" name="role" value=<?php echo $_SESSION["role"];?>>
                  <input type="hidden" id="usrname" name="role" value=<?php echo $_SESSION["username"];?>/>
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 col-xl-6">
                    <div id="reportrange" class="pull-left">
                      <i class="glyphicon glyphicon-calendar fa fa-calendar"></i>&nbsp;
                      <span></span> <b class="caret"></b>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 col-xl-6">
                    <select class="select2_demo_2 form-control select2-hidden-accessible" id="jd-regions" onchange="showSelectedRegions();">
                    </select>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 xs-txt-rgt col-xl-12">
                    <button type="button" class="btn btn-default" id="submitFilter" onclick="submitFilters()"> Apply</button>
                  </div>
                  <!--<div class="col-lg-5">
                    <div id="selectedRegions">
                    </div>
                    </div>-->
                </div>
                <div class="col-lg-12">
                  <div id="selectedRegions">
                  </div>
                </div>
          </div>
        </div>
        
        <?php }?>

<div class="wrap">
   

    <div class="container">
        <?= Breadcrumbs::widget([
            'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
        ]) ?>
        <?= Alert::widget() ?>
        <?= $content ?>
    </div>
</div>


<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
