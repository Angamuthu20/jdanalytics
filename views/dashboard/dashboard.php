<?php

?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>2adpro</title>
 <script type="text/javascript" src="https://cdn.datatables.net/tabletools/2.2.4/js/dataTables.tableTools.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/tabletools/2.2.2/swf/copy_csv_xls_pdf.swf"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.1.2/js/dataTables.buttons.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.1.2/js/buttons.flash.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/pdfmake.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/vfs_fonts.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.1.2/js/buttons.html5.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.1.2/js/buttons.print.min.js"></script>
 
</head>

<body>

  <p class="msgtop"> all campaigns listed here ended in the time period chosen</p>
  <div id="preloader" class="toppreloader" style='display:none'>

  
    <!--<div id="status">asdsad</div>-->
     <div class="loader">Loading...</div>
  </div>
  <div id="content-wrapper" class="white-bg" id="dash_list_div">
      
    <div class="wrapper wrapper-content animated fadeInRight overview-content" >
       
          <div class="ibox mb0">
            <div class="ibox-title">
          <!-- Custom Tabs -->
         
              <div class="row">
            <div class="col-lg-12">
          <div class="ibox float-e-margins">
            <div class="ibox-title no-padding">
             
              <div class="ibox-tools clearfix">
                <a class="collapse-link">
                <i class=""></i>
                </a>
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                <i class=""></i>
                </a>
              </div>
              <!-- /.tab-pane -->
              <div class="tab-pane" id="overview">
                  <!-- Overview Page-->
      <div id="overviewReport">
        <div class="row five-col">
		<div class="col-sm-12">
            <h2 class="dashboard-title dfp-title clearfix"><img src="../../img/rsz_dfp_old.png" alt=""><span class="hide">Doubleclick </span></h2>
			</div>
      </div>
      
      <div class="row five-col">
      <div class="col-md-4 col-lg-3 col-sm-4 col-xs-12">
        <a href="#campaigns" class="showCampaigns">
          <div class="info-box js-inbox1">
            <span class="info-box-icon bg-green"><img src="../img/total-campaigns.png" alt="Total Campaigns"></span>
            <div class="info-box-content">
              <span class="info-box-text">Total Campaigns</span>
                <span id="preloader"><span class="loader">Loading...</span>
              </span>
              <span class="info-box-number" id="totalCampaigns" style="color:#676a6c"></span>
            </div>         
          </div>
        </a>
      </div>

      <div class="col-md-4 col-lg-3 col-sm-4 col-xs-12 col-xl-6">
          <a href="" class="showAdvertiserDetails">
          <div class="info-box js-inbox2">
            <span class="info-box-icon bg-green"><img src="../img/advertise.png" alt="Advertisers"></span>

            <div class="info-box-content">
              <span class="info-box-text">Advertisers</span>
			           <span id="preloader"><span class="loader">Loading...</span></span>
              <span class="info-box-number" id="advertisers" style="color:#676a6c"></span>
            </div>
            <!-- /.info-box-content -->
          </div>
          </a>
          <!-- /.info-box -->
      </div>

      <div class="col-md-4 col-lg-3 col-sm-4 col-xs-12 col-xl-6">
        <a href="" class="showTotalWebsiteDetails">

        <div class="info-box js-inbox3">
          <span class="info-box-icon bg-green"><img src="../img/web.png" alt="Total WebSites"></span>
          <div class="info-box-content">
            <span class="info-box-text">Total WebSites</span>
              <span id="preloader"><span class="loader">Loading...</span></span>
              <span class="info-box-number" id="websites" style="color:#676a6c"></span>
          </div>
          <!-- /.info-box-content -->
        </div>
        </a>
          <!-- /.info-box -->
      </div>


    </div>

    </div>
   <div class="row five-col">

        <div class="col-md-4 col-lg-3 col-sm-4 col-xs-12">
        <a href="" class="showtotalImpressions">

          <div class="info-box js-inbox4">
            <span class="info-box-icon bg-green"><img src="../img/views.png" alt="Total Impressions"></span>
            <div class="info-box-content">
              <span class="info-box-text">Total Impressions</span>
                <span id="preloader"><span class="loader">Loading...</span></span>
              <!-- <span id="impressions"></span> -->
                <span class="info-box-number" id="impressions" style="color:#676a6c"></span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </a>
        </div>


        <div class="col-md-4 col-lg-3 col-sm-4 col-xs-12 col-xl-6">
          <div class="info-box js-inbox5">
            <span class="info-box-icon bg-green"><img src="../img/target.png" alt="Total Average eCPM"></span>

            <div class="info-box-content">
              <span class="info-box-text" style="text-transform:none;">TOTAL AVERAGE eCPM</span>

			  <span id="preloader"><span class="loader">Loading...</span></span>
              <span class="info-box-number" id="eCPM"  style="color:#676a6c"></span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>

        <div class="col-md-4 col-lg-3 col-sm-4 col-xs-12 col-xl-6">
          <div class="info-box js-inbox6">
            <span class="info-box-icon bg-green"><img src="../img/amount.png" alt="Total Value"></span>

            <div class="info-box-content">
              <span class="info-box-text">Total Value</span>
			  <span id="preloader"><span class="loader">Loading...</span></span>
              <span class="info-box-number" id="amount_spent"  style="color:#676a6c"></span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
</div>


  <div class="row">
   <div class="col-md-10" style="text-align: right;">
      <span class="lastUpdated" style="display:none">
        Last updated:
        <span id="lastUpdateDfp" style="padding-left: 7px;">12-OCT-2017</span>
      </span>
    </div>
  </div>



    <div class="row five-col">
		  <div class="col-sm-12">
            <h2 class="dashboard-title facebook-title clearfix"><img src="../img/title-facebook.png" alt=""><span class="hide">Facebook</span></h2>
			</div>
      </div>
      
      <div class="row five-col">


		  <div class="col-md-4 col-lg-3 col-sm-4 col-xs-12">
          <div class="info-box js-inbox1">
            <span class="info-box-icon bg-fb"><img src="../img/total-campaigns.png" alt="Total Campaigns"></span>

            <div class="info-box-content">
              <span class="info-box-text">Total Campaigns</span>
			  <span id="preloader"><span class="loader">Loading...</span></span>
              <span class="info-box-number" id="totalFbCampaigns"></span>
          </div>
          </div>
      </div>


        <div class="col-md-4 col-lg-3 col-sm-4 col-xs-12">
          <div class="info-box js-inbox4">
            <span class="info-box-icon bg-fb"><img src="../img/views.png" alt="Total Impressions"></span>
            
            <div class="info-box-content">
              <span class="info-box-text">Total Impressions</span>
			           <span id="preloader"><span class="loader">Loading...</span></span>
              <span class="info-box-number" id="Fbimpressions" ></span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>

        <div class="col-md-4 col-lg-3 col-sm-4 col-xs-12">
          <div class="info-box js-inbox4">
            <span class="info-box-icon bg-fb"><img src="../img/reach.png" alt="Total Reach"></span>
            
            <div class="info-box-content">
              <span class="info-box-text">Total Reach</span>
        <span id="preloader"><span class="loader">Loading...</span></span>
              <span class="info-box-number" id="Fbreach" ></span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
		</div>


		<div class="row five-col">
        <div class="col-md-4 col-lg-3 col-sm-4 col-xs-12 col-xl-6">
          <div class="info-box js-inbox5">
            <span class="info-box-icon bg-fb"><img src="../img/engage.png" alt="Total Engagements"></span>
           
            <div class="info-box-content">
              <span class="info-box-text" style="text-transform:uppercase;">Total Engagements</span>
        <span id="preloader"><span class="loader">Loading...</span></span>
              <span class="info-box-number" id="Fbengagement"></span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <div class="col-md-4 col-lg-3 col-sm-4 col-xs-12 col-xl-6">
          <div class="info-box js-inbox5">
            <span class="info-box-icon bg-fb"><img src="../img/target.png" alt="eCPM"></span>
           
            <div class="info-box-content">
              <span class="info-box-text" style="text-transform:none;">eCPM</span>
			  <span id="preloader"><span class="loader">Loading...</span></span>
              <span class="info-box-number" id="FbeCPM"></span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        
        <div class="col-md-4 col-lg-3 col-sm-4 col-xs-12 col-xl-6">
          <div class="info-box js-inbox6">
            <span class="info-box-icon bg-fb"><img src="../img/amount.png" alt="Total Value"></span>

            <div class="info-box-content">			  
              <span class="info-box-text">Total Value</span>
			  <span id="preloader"><span class="loader">Loading...</span></span>
              <span class="info-box-number" id="Fbamount_spent" ></span>
        </div>
            <!-- /.info-box-content -->
      </div>
          <!-- /.info-box -->
        </div>
</div>


  <div class="row">
   <div class="col-md-10" style="text-align: right;">
      <span class="lastUpdated" style="display:none">
        Last updated:
        <span id="lastUpdateFb" style="padding-left: 7px;">12-OCT-2017</span>
      </span>
    </div>
  </div>




                  <!-- dbm -->
      <div id="dbm">
        <div class="row five-col">
    <div class="col-sm-12">
            <h2 class="dashboard-title dbm-title clearfix"><img src="../../img/title-dbm.png" alt=""><span class="hide">Doubleclick </span></h2>
      </div>
      </div>
      
      <div class="row five-col">

      <div class="col-md-4 col-lg-3 col-sm-4 col-xs-12">
          <div class="info-box js-inbox1">
            <span class="info-box-icon bg-green"><img src="../img/total-campaigns.png" alt="Total Campaigns"></span>
            <div class="info-box-content">
              <span class="info-box-text">Total Campaigns</span>
                <span id="preloader"><span class="loader">Loading...</span>
              </span>
              <span class="info-box-number" id="dbmtotalCampaigns" style="color:#676a6c"></span>
            </div>         
          </div>
      </div>

      <div class="col-md-4 col-lg-3 col-sm-4 col-xs-12 col-xl-6">
          <div class="info-box js-inbox2">
            <span class="info-box-icon bg-green"><img src="../img/advertise.png" alt="Advertisers"></span>

            <div class="info-box-content">
              <span class="info-box-text">Advertisers</span>
                 <span id="preloader"><span class="loader">Loading...</span></span>
              <span class="info-box-number" id="dbmadvertisers" style="color:#676a6c"></span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
      </div>

      <div class="col-md-4 col-lg-3 col-sm-4 col-xs-12 col-xl-6">
        <div class="info-box js-inbox3">
          <span class="info-box-icon bg-green"><img src="../img/web.png" alt="Total WebSites"></span>
          <div class="info-box-content">
            <span class="info-box-text">Total WebSites</span>
              <span id="preloader"><span class="loader">Loading...</span></span>
              <span class="info-box-number" id="dbmwebsites" style="color:#676a6c"></span>
          </div>
          <!-- /.info-box-content -->
        </div>
          <!-- /.info-box -->
      </div>


    </div>

    </div>
   <div class="row five-col">

        <div class="col-md-4 col-lg-3 col-sm-4 col-xs-12">
          <div class="info-box js-inbox4">
            <span class="info-box-icon bg-green"><img src="../img/views.png" alt="Total Impressions"></span>
            <div class="info-box-content">
              <span class="info-box-text">Total Impressions</span>
                <span id="preloader"><span class="loader">Loading...</span></span>
              <span class="info-box-number" id="dbmimpressions"  style="color:#676a6c"></span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>


        <div class="col-md-4 col-lg-3 col-sm-4 col-xs-12 col-xl-6">
          <div class="info-box js-inbox5">
            <span class="info-box-icon bg-green"><img src="../img/target.png" alt="eCPM"></span>

            <div class="info-box-content">
              <span class="info-box-text" style="text-transform:none;">eCPM</span>
        <span id="preloader"><span class="loader">Loading...</span></span>
              <span class="info-box-number" id="dbmeCPM"  style="color:#676a6c"></span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>

        <div class="col-md-4 col-lg-3 col-sm-4 col-xs-12 col-xl-6">
          <div class="info-box js-inbox6">
            <span class="info-box-icon bg-green"><img src="../img/amount.png" alt="Total Value"></span>

            <div class="info-box-content">
              <span class="info-box-text">Total Value</span>
        <span id="preloader"><span class="loader">Loading...</span></span>
              <span class="info-box-number" id="dbmamount_spent"  style="color:#676a6c"></span>
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
</div>


  <div class="row">
   <div class="col-md-10" style="text-align: right;">
      <span class="lastUpdated" style="display:none">
        Last updated:
        <span id="lastUpdateDbm" style="padding-left: 7px;">12-OCT-2017</span>
      </span>
    </div>
  </div>




          </div>
        </div>
        
        </div>
      </div>
      <!--Overview Page Ends -->
      
      <div id="camp_list_div" style="display:none;">

      <div class="" id="reg_report">
          
              <div class="sticky-table sticky-headers sticky-ltr-cells">
              <table class="table table-striped table-bordered table-hover dataTables-example" id="regional_report" >
            <thead>
                <tr>
		            <th class="sticky-cell">Region</th>
                  <th class="sticky-cell">URN</th>
                   <th class="sticky-cell">Advertiser</th>
                   <th>Ad Server</th>
              <th>Start Date</th>
              <th>End Date</th>
               
              <th>Impressions</th>
              <th>Clicks</th>
              <th>CTR</th>
              <th>Total Amount</th>
                </tr>
            </thead>
            <tbody id="regional_report_tbody">                                                   
            </tbody>                                         
              </table>
            </div>

      </div>
      </div>



      <div class="tab-pane" id="sales" style="display:none">
        <div class="col-xs-12">
          <p style="text-transform:uppercase;font-size:13px;text-align:center;margin-top:15px;">
            Sales performance will be enabled soon
          </p>
        </div>

         
      </div>

      <div class="info-box-content">
          <span class="info-box-number" id="note" ></span>
      </div>
             
    
      </div>



<span id="advertisers1" style="display:none"> 
  <div class="row"> 
    <div class="col-lg-8"> 
    <div class="form-group pull-left"> 
      <button type="button" class="btn btn-icon" id="refresh-btn" onclick="hideOtherDiv('advertisers1');">
        <i class="fa fa-chevron-left "></i> </button> 
      </div> 
      <h1 id="graphTitle">TOTAL ADVERTISERS</h1> 
    </div> 
    <div class="col-lg-4 text-right"> 
    
    </div> 
  </div>

<div class="horz-dvdr"></div>
<div class="table-responsive">          
  <div class="sticky-table sticky-headers sticky-ltr-cells">
    <table class="table table-bordered table-hover dataTables-example" id="advTable" >
      <thead>
        <tr>
          <th>ADVERTISERS</th>
          <th>IMPRESSIONS</th>
          <th>CTR</th>
          <th>CLICKS</th>
          <th>TOTAL VALUE</th>
        </tr>
      </thead>

      <tbody id="advTable-body">
                  
      </tbody>                                         
    </table>
  </div>
</div>  
</span> 



<span id="showtotalwebsites" style="display:none"> 
  <div class="row"> 
    <div class="col-lg-8"> 
    <div class="form-group pull-left"> 
      <button type="button" class="btn btn-icon" id="refresh-btn" onclick="hideOtherDiv('showtotalwebsites');">
        <i class="fa fa-chevron-left "></i> </button> 
      </div> 
      <h1 id="graphTitle">TOTAL WEBSITES</h1> 
    </div> 
    <div class="col-lg-4 text-right">
    </div> 
  </div>

<div class="horz-dvdr"></div>
<div class="table-responsive">          
  <div class="sticky-table sticky-headers sticky-ltr-cells">
    <table class="table table-bordered table-hover dataTables-example" id="advTableWebsites" >
      <thead>
        <tr>
          <th>WEBSITES</th>
          <th>IMPRESSIONS</th>
          <th>CTR</th>
          <th>CLICKS</th>
          <th>TOTAL VALUE</th>
        </tr>
      </thead>

      <tbody id="advTableWebsites-body">
                  
      </tbody>                                         
    </table>
  </div>
</div>  
</span> 




<span id="showtotalImpressions" style="display:none"> 


  <div class="row"> 

    <div class="col-lg-8"> 
      <div class="form-group pull-left"> 
        <button type="button" class="btn btn-icon" id="refresh-btn" onclick="hideOtherDiv('showtotalImpressions');">
          <i class="fa fa-chevron-left "></i> </button> 
      </div> 
      <h1 id="graphTitle">TOTAL IMPRESSIONS</h1> 
    </div>

    <div class="col-lg-4 text-right">  
    </div> 
  </div>

  <div class="row">
    <div class="col-lg-8">
      <div class="adserve-first-block" style="display:block;clear:both;float:none;margin-top:25px"><h3 style="font-size:14px">PROGRESS</h3></div>
    </div>
  </div>




  <div class="row"> 
    <div class="col-lg-12">
      <span id="ovGraph" class="clearfix" style="display:block">
      
      </span>
    </div> 
  </div>


  <div class="row adserve-list sum-five-col" style="margin-top: 30px;margin-bottom: 30px;"> 
    <div class="col-lg-2">
      <div class="info-box"> <span class="info-box-icon bg-green"><img src="../img/goal.png" alt="Total Impressions"></span>
        <div class="info-box-content"> <span class="info-box-text">GOAL</span> <span class="info-box-num" id="impGoal"></span> </div>
        </div>
    </div>
    <div class="col-lg-2">
     <div class="info-box"> <span class="info-box-icon bg-green"><img src="../img/actual.png" alt="Total Impressions"></span>
        <div class="info-box-content"> <span class="info-box-text">ACTUAL</span> <span class="info-box-num" id="impActual"></span> </div>
        </div>
    </div>
  </div>


  <div class="row">
    <div class="col-lg-8">
      <div class="form-group pull-left"></div>
      <h4 id="SSTable">STANDARD CAMPAIGNS</h4>
    </div>
  </div>

  <div class="horz-dvdr"></div>
  <div class="table-responsive">          
    <div class="sticky-table sticky-headers sticky-ltr-cells">
      <table class="table table-bordered table-hover dataTables-example" id="advTableStandardCampaign">
        <thead>
          <tr>
            <th>CREATIVE SIZE</th>
            <th>IMPRESSIONS</th>
            <th>CTR</th>
            <th>CLICKS</th>
            <th>TOTAL VALUE</th>
          </tr>
        </thead>

        <tbody id="advTableStandardCampaign-body">
                    
        </tbody>                                         
      </table>
    </div>
  </div> 


   <div class="row">
    <div class="col-lg-8">
      <div class="form-group pull-left"></div>
      <h4 id="SSTable">SPONSORSHIP CAMPAIGNS</h4>
    </div>
  </div>

  <div class="horz-dvdr"></div>
  <div class="table-responsive">          
    <div class="sticky-table sticky-headers sticky-ltr-cells">
      <table class="table table-bordered table-hover dataTables-example" id="advTableSponsoredCampaign" >
        <thead>
          <tr>
            <th>CREATIVE SIZE</th>
            <th>IMPRESSIONS</th>
            <th>CTR</th>
             <th>CLICKS</th>
                
            <th>TOTAL VALUE</th>
          </tr>
        </thead>

        <tbody id="advTableSponsoredCampaign-body">
                    
        </tbody>                                         
      </table>
    </div>
  </div> 


   <div class="row">
    <div class="col-lg-8">
      <div class="form-group pull-left"></div>
      <h4 id="SSTable">HOUSE CAMPAIGNS</h4>
    </div>
  </div>

  <div class="horz-dvdr"></div>
  <div class="table-responsive">          
    <div class="sticky-table sticky-headers sticky-ltr-cells">
      <table class="table table-bordered table-hover dataTables-example" id="advTableHouseCampaign" >
        <thead>
          <tr>
            <th>CREATIVE SIZE</th>
            <th>IMPRESSIONS</th>
            <th>CTR</th>
                       <th>CLICKS</th>
            <th>TOTAL VALUE</th>
          </tr>
        </thead>

        <tbody id="advTableHouseCampaign-body">
                    
        </tbody>                                         
      </table>
    </div>
  </div>

</span> 


          </div>
        </div>
          
        </div>

    </div>
      </div>
      <div class="push"></div>
    </div>
    <div class="footer">
      <div>
        <img src="../img/jdanalytics-footer-ad2pro.jpg" />
      </div>
    </div>
    <input type="hidden" name="<?php echo Yii::$app->request->csrfParam; ?>" value="<?php echo Yii::$app->request->getCsrfToken(); ?>">
							<p style="text-align:center;"><a id="forgotpwdlink" href="#" title="Forgot Password?">Forgot Password?</a></p>
						</form>
    <script>

			
    

      function test()
  {
    var x = document.getElementById('jd-regions');
          var txt = "";
          var val = "";
          for (var i = 1; i < x.length; i++) {
      txt +=x[i].text + ",";
      val +=x[i].value + ",";
      console.log(x[i].value);
         }
  }

      function redirectToReport(opt) {
        var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
        var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");
        var list = $("#selectedRegions").children();
        var expDate = new Date();
        expDate.setTime(expDate.getTime() + (20 * 60 * 1000));
        $.cookie('startDate', startDate, {
          path: '/',
          expires: expDate
        });
        $.cookie('endDate', endDate, {
          path: '/',
          expires: expDate
        });
        $.cookie('regions', list.prop('outerHTML'), {
          path: '/',
          expires: expDate
        });
        if (opt === '1') {
          window.location.href = "complexview.html?metric=impressions&product=DFP&sd=" + startDate + "&ed=" + endDate;
        } else if (opt === '2') {
          window.location.href = "complexview.html?metric=clicks&product=DFP&sd=" + startDate + "&ed=" + endDate;
        } else if (opt === '3') {
          window.location.href = "complexview.html?metric=interactions&product=DFP&sd=" + startDate + "&ed=" + endDate;
        } else if (opt === '4') {
          window.location.href = "complexview.html?metric=impressions&product=Facebook&sd=" + startDate + "&ed=" + endDate;
        } else if (opt === '5') {
          window.location.href = "complexview.html?metric=clicks&product=Facebook&sd=" + startDate + "&ed=" + endDate;
        } else {
          window.location.href = "complexview.html?metric=interactions&product=Facebook&sd=" + startDate + "&ed=" + endDate;
        }


      }

      function submitFilters() {
        $('#impressions').empty();
		showPreLoader1();
         var region = new Array();
        var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
        var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");
        var list = document.getElementById('selectedRegions').children;
        var regList = $("#selectedRegions").children().length;
        var allReg = 'all';
        if (regList > 0) {
          for (var i = 0; i < regList; i++) {
            var divContent = list[i].innerHTML;
            //var reg = divContent.substring(0, divContent.indexOf('<'));
            var reg = divContent;
            var regSel = $(reg).text();
            if (regSel.trim() === "ALL REGION") {
              var x = document.getElementById('jd-regions');
               for (var i = 1; i < x.length; i++) {
              region.push(x[i].value);
               }
              
            } else {
              region.push(regSel);
            }
          }
        } else {
          region.push(allReg);
        }

        var jsonObj = {
          siteId: $('#siteId').val(),
          region: region,
          from: startDate,
          to: endDate,
        }

       var camp = $("#camp_list").attr('class');

        var activecls =camp.split(' ');
        if(activecls[1]=='active')
        {
        	getCampaignResults(jsonObj);
        }else
        {
        	getOverViewResults(jsonObj);
        }
        
     
      }

		function getObjects()
		{
			 var region = new Array();
		        var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
		        var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");
		        var list = document.getElementById('selectedRegions').children;
		        var regList = $("#selectedRegions").children().length;
		        var allReg = 'all';
		        if (regList > 0) {
		          for (var i = 0; i < regList; i++) {
		            var divContent = list[i].innerHTML;
		            //var reg = divContent.substring(0, divContent.indexOf('<'));
		            var reg = divContent;
		            var regSel = $(reg).text();
		            if (regSel.trim() === "ALL REGION") {
		              var x = document.getElementById('jd-regions');
		               for (var i = 1; i < x.length; i++) {
		              region.push(x[i].value);
		               }
		              
		            } else {
		              region.push(regSel);
		            }
		          }
		        } else {
		          region.push(allReg);
		        }

		        var jsonObj = {
		          siteId: $('#siteId').val(),
		          region: region,
		          from: startDate,
		          to: endDate,
		        }

		        return jsonObj;
		}


      
      function showSelectedRegions() {
        var region = $('#jd-regions').val();
        var regionId;
        if (region === 'ALL REGION') {
          regionId = 'all';
          $('#selectedRegions').empty();
        } else {

          var reg = region.replace(/\,/g, "");
          regionId = region.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/g,'')
          $('#all').remove();
        }

        var region_tag = '<span class="tag label label-default" id="' + regionId +  '">' + '<a name="' + regionId + '" onclick="removeRegion(this)" style="color:black;">' + region + ' <img src="../img/tag-close-icn.png" alt="" /></a></span>';

        //var region_tag = '<a id="'+regionId+'" name="'+regionId+'" onclick="removeRegion(this.name)" style="color:black;">'+region+' <i class="remove glyphicon glyphicon-remove-sign glyphicon-white"></i></a>';
        $("#selectedRegions").append(region_tag);

      }

      function removeRegion(elem) {
        $(elem).parent().remove();
      }

      function showOverView() {

        var region = new Array();
        var list = document.getElementById('selectedRegions').children;
        var regList = $("#selectedRegions").children().length;
        var allReg = 'all';
        if (regList > 0) {
          for (var i = 0; i < regList; i++) {
            var divContent = list[i].innerHTML;
            //var reg = divContent.substring(0, divContent.indexOf('<'));
            var reg = divContent;
            var regSel = $(reg).text();
            if (regSel.trim() === "ALL REGION") {
              var x = document.getElementById('jd-regions');
               for (var i = 1; i < x.length; i++) {
              region.push(x[i].value);
               }
            } else {
              region.push(regSel);
            }
          }
        } else {
          var x = document.getElementById('jd-regions');
               for (var i = 1; i < x.length; i++) {
              region.push(x[i].value);
               }
          
        }
        $('#overviewReport').removeClass('displayClass');
        $('#comparisonReport').addClass('displayClass');
        $("#overviewBtn").addClass('active');
        $("#sourcesBtn").removeClass('active');
        //var date = new Date();
       // var formattedDate = moment(date).format('YYYY-MM-DD');
       	
        var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
        var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");

      
        var jsonObj = {
          siteId: $('#siteId').val(),
          region: region,
          from: startDate,
          to: endDate,
        }
        
        getOverViewResults(jsonObj);

        //$("#jd-regions").select2().val("ALL REGION").trigger('change.select2');
        //showSelectedRegions();


      }

   
    </script>
    <script>
      getAllRegions();
     
      function calculateCpm()
      {
         
		
        var impressions =parseInt(impressN);

       

       
        var amount =$("#amount_spent").html();

        var ecpmvalue =$("#eCPM").html();

        

        if(impressions!='' && amount !='' )
        {
        	
            amount =amount.replace('£', '');
           
            amount= parseFloat(amount.replace(/,/g, ''), 10);

           var ecpm=(amount/impressions)*1000;

           ecpm=parseFloat(ecpm.toFixed(2));
          
           document.getElementById('eCPM').innerHTML = "£ " +ecpm.toLocaleString("en"); 
           hidePreLoader5();
        }else
        {
        	 window.setInterval(function(){
           	  calculateCpm();
           	}, 5000);
        	
        }
        

        
      }
      function getOverViewResults(jsonObj) {
          
    	
        if(jsonObj["region"].length === 0) {
//            console.log("No region for this user");

            hidePreLoader6();
            hidePreLoader5();
            hidePreLoader4();
            hidePreLoader3();
            hidePreLoader2();
            hidePreLoader1();
           // document.getElementById('note').innerHTML = "Note: No region assigned for this user ";
            document.getElementById('amount_spent').innerHTML = "£ " +0;
            document.getElementById('eCPM').innerHTML = "£ " +0;
            document.getElementById('totalCampaigns').innerHTML = 0;
            document.getElementById('websites').innerHTML = 0;
            document.getElementById('impressions').innerHTML = 0;
            document.getElementById('advertisers').innerHTML = 0;
            return true;
         }
		getFacebookMetrics(jsonObj); 
    getDbmMetrics(jsonObj); 
       // getCampaigncount(jsonObj);
        getImpressionOverview(jsonObj);
        getwebsitesOverview(jsonObj);
      /// getCPMOverview(jsonObj);
        getAmountspentOverview(jsonObj);
        getAdvertisersOverview(jsonObj);

      }

     function  getCampaignResults(jsonObj)
      {
        $('#preloader2').show();
        $('#impressions').empty();
    	 getdetails(jsonObj);
      }

      function responsive_regionalReport()
      {
          
           $('#regional_report').DataTable({
              dom: '<"html5buttons"B>lTfgitp',
              paging:true,
              buttons: [
                 
                  {extend: 'csv',title: 'Advertiser Report'},
                  {extend: 'excel', title: 'Advertiser Report'},
                  //{extend: 'pdf', title: 'Order Report'},               
              ]

             });
        
      }


      function responsive_regionalReport_1()
      {
          
           $('#advTableStandardCampaign').DataTable({
             dom: '<"html5buttons"B>lTfgitp',
             buttons: [
                
                 {extend: 'csv',title: 'Order Report'},
                 {extend: 'excel', title: 'Order Report'},
                 //{extend: 'pdf', title: 'Order Report'},

                
             ],
             columnDefs: [
                 { targets: [1,2,3], className: 'dt-body-right dt-head-right' }
               ],
              order:[[ 1, "desc" ]],
                        pageLength: 25

             });        
      }

    	 

      function responsive_regionalReport_2()
      {
          
           $('#advTableSponsoredCampaign').DataTable({
            dom: '<"html5buttons"B>lTfgitp',
            buttons: [

            {extend: 'csv',title: 'Order Report'},
            {extend: 'excel', title: 'Order Report'},
                 //{extend: 'pdf', title: 'Order Report'},               
             ],
             columnDefs: [
                 { targets: [1,2,3], className: 'dt-body-right dt-head-right' }
               ],
              order:[[ 1, "desc" ]],
                        pageLength: 25


             });        
      }


      function responsive_regionalReport_3()
      {
          
           $('#advTableHouseCampaign').DataTable({
                   dom: '<"html5buttons"B>lTfgitp',
             buttons: [
                
                 {extend: 'csv',title: 'Order Report'},
                 {extend: 'excel', title: 'Order Report'},
                 //{extend: 'pdf', title: 'Order Report'},
                
             ],
             columnDefs: [
                 { targets: [1,2,3,4], className: 'dt-body-right dt-head-right' }
               ],
              order:[[ 1, "desc" ]],
                        pageLength: 25


             });
        
      }

      function responsive_regionalReport_4()
      {
          
          $('#advTable').DataTable({
              dom: '<"html5buttons"B>lTfgitp',
              paging:true,
              buttons: [
                 
                  {extend: 'csv',title: 'Advertiser Report'},
                  {extend: 'excel', title: 'Advertiser Report'},
                  //{extend: 'pdf', title: 'Order Report'},               
              ],
              columnDefs: [
                  { targets: [1,2,3,4], className: 'dt-body-right dt-head-right' }
                ],
                    order: [[1, "desc"]],
                        pageLength: 25
            });

        
      }

      function responsive_regionalReport_5()
      {
        $('#advTableWebsites').DataTable({
            dom: '<"html5buttons"B>lTfgitp',
            paging:true,
            buttons: [
               
                {extend: 'csv',title: 'Advertiser Report'},
                {extend: 'excel', title: 'Advertiser Report'},
                //{extend: 'pdf', title: 'Order Report'},               
            ],
            columnDefs: [
                { targets: [1,2,3,4], className: 'dt-body-right dt-head-right' }
              ],
                    order: [[1, "desc"]],
                        pageLength: 25
          });
      }

  
      function hideOtherDiv(divEle)
      {
        $(divEle).hide();
        $('#advertisers1').hide();   
        $("#overview").show();
        $("#showtotalImpressions").hide();
        $("#showtotalwebsites").hide();
        $("#camp_list_div").hide();
        $("#camp_list").removeClass('active');
        $("#dash_list").addClass('active');
      }

	function ExportCam()
	{
		 var jsonObj = getObjects();

		 $('#campaign').attr('action','/dashboard/export');
		 $('#camref').val(JSON.stringify(jsonObj));
		 
		$('#campaign').submit();
		
	}


      $(document).ready(function() {

    

    	 
    	  $("#camp_list").click(function() {


        	  $('.showCampaigns').trigger('click');
/*

				  $("#overview").hide();
				  $("#camp_list_div").show();
				  $("#camp_list").addClass('active');
				  $("#dash_list").removeClass('active');
  				$obj=getObjects();
				  getdetails($obj);*/
			});


    	  $("#dash_list").click(function(e){
    		
      
  				e.preventDefault();
		          $("#camp_list_div").hide();
		          $('#advertisers1').hide(); 
		          $("#showtotalImpressions").hide();
		          $("#showtotalwebsites").hide();
            $("#sales").hide();
    				$("#overview").show();
    				$("#dash_list").addClass('active');
    				$("#camp_list").removeClass('active');
            $("#sales_list").removeClass('active');

  			});

        $("#sales_list").click(function(e){
          e.preventDefault();
              $("#camp_list_div").hide();
              $('#advertisers1').hide(); 
              $("#showtotalImpressions").hide();
              $("#showtotalwebsites").hide();
          $("#overview").hide();
          $("#sales").show();
          $("#sales_list").addClass('active');
          $("#dash_list").removeClass('active');
          $("#camp_list").removeClass('active');

        });


        /*  While clicking Advertiser Tile displaying detail Impression for Advertiser
         *
         */

        $('.showAdvertiserDetails').click(function(e)
        {
          e.preventDefault();       
          $('#overview').hide();
          $('.toppreloader').show();

          var jsonObj = getObjects();

                    
           $.ajax({
                type: "POST",
                async :true,
                url:apiUrl+"getAdvertiserDetails",
                data : jsonObj,
                cache: false,
                crossDomain: true,
                success: function (responseData, textStatus, jqXHR) 
                {
                 $('.toppreloader').hide();

                  var result = JSON.parse(responseData);

                  var dt = result["rows"]

                  table1 = $('#advTable').DataTable({
                    dom: '<"html5buttons"B>lTfgitp',
                    paging:true,
                    buttons: [
                       
                        {extend: 'csv',title: 'Advertiser Report'},
                        {extend: 'excel', title: 'Advertiser Report'},
                        //{extend: 'pdf', title: 'Order Report'},               
                    ],
                    order: [[1, "desc"]],
                        pageLength: 25
                  });
                  if (table1 !== null) {
                      table1.clear();
                      table1.destroy();
                    }

                  //table1 = $('#advTable').DataTable();

                  var reportTable = document.getElementById('advTable-body');

                  var rowcount =reportTable.rows.length;
                  for (var x = rowcount - 1; x >= 0; x--)
                  {
                    reportTable.deleteRow(x);
                  }

                 
                    count = 0;
                    var ctrcal=0;
                  for(var j=0;j<dt.length;j++)
                  {
                	  ctrcal=(dt[j]["clicks"]/dt[j]["impressions"])*100;
                	  
                    var newRow = reportTable.insertRow(count);
                    var newCell = newRow.insertCell(0);
                    newCell.innerHTML = dt[j]["name"]; 
                    var newCell = newRow.insertCell(1);
                    newCell.innerHTML = parseInt(dt[j]["impressions"]).toLocaleString("en");
                    var newCell = newRow.insertCell(2);
                    newCell.innerHTML = (parseFloat(ctrcal).toFixed(2)).toLocaleString("en")+"%";  
                    var newCell = newRow.insertCell(3);  
                    newCell.innerHTML = parseInt(dt[j]["clicks"]).toLocaleString("en");
                    var newCell = newRow.insertCell(4);
                    newCell.innerHTML = "£ "+parseFloat(dt[j]["amount"].toFixed(2)).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}); 

                }


                $('#advertisers1').show();
                responsive_regionalReport_4();
                window.dispatchEvent(new Event('resize'));

              },
              error: function (responseData, textStatus, errorThrown) {
                  console.log(responseData)
                 console.log('Error : ' + responseData)
                }

            });
            

        });


      

        $('.showCampaigns').click(function(e)
        {
          e.preventDefault();
          $('#preloader2').show();
          $('#advertisers1').hide();   
          $("#overview").hide();
          $("#showtotalImpressions").hide();
          $("#showtotalwebsites").hide();
          $("#sales").hide();
          $("#camp_list_div").show();
          $("#camp_list").addClass('active');
          $("#dash_list").removeClass('active');
          $("#sales_list").removeClass('active');
          $obj=getObjects();
          getdetails($obj);
          $('#preloader2').show();
        });


        $('.showTotalWebsiteDetails').click(function(e)
        {
          e.preventDefault();       
          $('#advertisers1').hide();   
          $("#overview").hide();
          $("#camp_list_div").hide();  
          $("#showtotalImpressions").hide();
          $('.toppreloader').show();
          var jsonObj = getObjects();

          $.ajax({
                type: "POST",
                async :true,
                url:apiUrl+"getTotalWebsiteDetails",
                data : jsonObj,
                cache: false,
                crossDomain: true,
                success: function (responseData, textStatus, jqXHR) 
                {
                  hidePreLoader4();
                  $('.toppreloader').hide();

                  var result = JSON.parse(responseData);

                  var dt = result["rows"];

                  table1 = $('#advTableWebsites').DataTable({
                    dom: '<"html5buttons"B>lTfgitp',
                    paging:true,
                    buttons: [
                       
                        {extend: 'csv',title: 'Advertiser Report'},
                        {extend: 'excel', title: 'Advertiser Report'},
                        //{extend: 'pdf', title: 'Order Report'},               
                    ],
                    order: [[1, "desc"]],
                        pageLength: 25
                  });


                  //table1 = $('#advTable').DataTable();

                  var reportTable = document.getElementById('advTableWebsites-body');

                  var rowcount =reportTable.rows.length;
                  for (var x = rowcount - 1; x >= 0; x--)
                  {
                    reportTable.deleteRow(x);
                  }

                  if (table1 !== null) {
                    table1.clear();
                    table1.destroy();
                  }
                    count = 0;

                    var ctrcal=0;
                  for(var j=0;j<dt.length;j++)
                  {
                	 ctrcal=(dt[j]["clicks"]/dt[j]["impressions"])*100;
                    var newRow = reportTable.insertRow(count);
                    var newCell = newRow.insertCell(0);
                    newCell.innerHTML = dt[j]["cm_adunit_name"]; 
                    var newCell = newRow.insertCell(1);
                    newCell.innerHTML = parseInt(dt[j]["impressions"]).toLocaleString("en");
                    var newCell = newRow.insertCell(2);
                    newCell.innerHTML = (parseFloat(ctrcal).toFixed(2)).toLocaleString("en")+"%";
                    var newCell = newRow.insertCell(3);
                    newCell.innerHTML = parseInt(dt[j]["clicks"]).toLocaleString("en");  
                    var newCell = newRow.insertCell(4);
                    newCell.innerHTML = "£ "+parseFloat(dt[j]["amount"].toFixed(2)).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});   

                }

                $("#showtotalwebsites").show();
                responsive_regionalReport_5();
                window.dispatchEvent(new Event('resize'));
        
              },
              error: function (responseData, textStatus, errorThrown) {
                  console.log(responseData)
                 console.log('Error : ' + responseData)
                }

            });

          
        });


        $('.showtotalImpressions').click(function(e)
        {

          e.preventDefault();       
          $('#advertisers1').hide();   
          $("#overview").hide();
          $("#camp_list_div").hide(); 
          $("#showtotalwebsites").hide();
          $('.toppreloader').show();

          var jsonObj = getObjects();
          jsonObj['type'] = 'STANDARD';

          $.ajax({
                type: "POST",
                async :true,
                url:apiUrl+"getTotalImpressionDetails",
                data : jsonObj,
                cache: false,
                crossDomain: true,
                success: function (responseData, textStatus, jqXHR) 
                {
                  $('.toppreloader').hide();

                  var result = JSON.parse(responseData);

                  var dt = result["rows"];

                  table1 = $('#advTableStandardCampaign').DataTable({
                    dom: '<"html5buttons"B>lTfgitp',
                    paging:true,
                    buttons: [
                       
                        {extend: 'csv',title: 'Advertiser Report'},
                        {extend: 'excel', title: 'Advertiser Report'},
                        //{extend: 'pdf', title: 'Order Report'},               
                    ],
                    order:[[1, "desc"]],
                        pageLength: 25
                  });

                  //table1 = $('#advTable').DataTable();

                  var reportTable = document.getElementById('advTableStandardCampaign-body');

                  var rowcount =reportTable.rows.length;
                  for (var x = rowcount - 1; x >= 0; x--)
                  {
                    reportTable.deleteRow(x);
                  }

                  if (table1 !== null) {
                    table1.clear();
                    table1.destroy();
                  }
                    count = 0;
                    var ctrcal=0;
                  for(var j=0;j<dt.length;j++)
                  {
                	  ctrcal=(dt[j]["clicks"]/dt[j]["impressions"])*100;
                    var newRow = reportTable.insertRow(count);
                    var newCell = newRow.insertCell(0);
                    newCell.innerHTML = dt[j]["cm_creative_size"]; 
                    var newCell = newRow.insertCell(1);
                    newCell.innerHTML = parseInt(dt[j]["impressions"]).toLocaleString("en");
                    var newCell = newRow.insertCell(2);
                    newCell.innerHTML = (parseFloat(ctrcal).toFixed(2)).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})+"%";
                    var newCell = newRow.insertCell(3);
                    newCell.innerHTML = parseInt(dt[j]["clicks"]).toLocaleString("en");  
                    var newCell = newRow.insertCell(4);
                    newCell.innerHTML = "£ "+parseFloat(dt[j]["amount"].toFixed(2)).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});   

                }

                $("#showtotalImpressions").show();

                 responsive_regionalReport_1();
                window.dispatchEvent(new Event('resize'));
                 },
              error: function (responseData, textStatus, errorThrown) {
                  console.log(responseData)
                 console.log('Error : ' + responseData)
                }
           
          });


           var jsonObj = getObjects();
          jsonObj['type'] = 'SPONSORSHIP';


          $.ajax({
                type: "POST",
                async :true,
                url:apiUrl+"getTotalImpressionDetails",
                data : jsonObj,
                cache: false,
                crossDomain: true,
                success: function (responseData, textStatus, jqXHR) 
                {
                  hidePreLoader4();

                  var result = JSON.parse(responseData);

                  var dt = result["rows"];

                  table2 = $('#advTableSponsoredCampaign').DataTable({
                    dom: '<"html5buttons"B>lTfgitp',
                    paging:true,
                    buttons: [
                       
                        {extend: 'csv',title: 'Advertiser Report'},
                        {extend: 'excel', title: 'Advertiser Report'},
                        //{extend: 'pdf', title: 'Order Report'},               
                    ],
                    order:[[1, "desc"]],
                        pageLength: 25
                  });

                  //table1 = $('#advTable').DataTable();

                  var reportTable = document.getElementById('advTableSponsoredCampaign-body');

                  var rowcount =reportTable.rows.length;
                  for (var x = rowcount - 1; x >= 0; x--)
                  {
                    reportTable.deleteRow(x);
                  }

                  if (table2 !== null) {
                    table2.clear();
                    table2.destroy();
                  }
                    count = 0;
                    var ctrcal=0;
                  for(var j=0;j<dt.length;j++)
                  {
                	  ctrcal=(dt[j]["clicks"]/dt[j]["impressions"])*100;
                    var newRow = reportTable.insertRow(count);
                    var newCell = newRow.insertCell(0);
                    newCell.innerHTML = dt[j]["cm_creative_size"]; 
                    var newCell = newRow.insertCell(1);
                    newCell.innerHTML = parseInt(dt[j]["impressions"]).toLocaleString("en");
                    var newCell = newRow.insertCell(2);

                    newCell.innerHTML = (parseFloat(ctrcal).toFixed(2)).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})+"%";
                    var newCell = newRow.insertCell(3);
                   newCell.innerHTML = parseInt(dt[j]["clicks"]).toLocaleString("en");  
                    var newCell = newRow.insertCell(4);
                    newCell.innerHTML = "£ "+parseFloat(dt[j]["amount"].toFixed(2)).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});   

                }

                $("#showtotalImpressions").show();

                 responsive_regionalReport_2();
                window.dispatchEvent(new Event('resize'));
                 },
                error: function (responseData, textStatus, errorThrown) {
                  console.log(responseData)
                 console.log('Error : ' + responseData)
                }
           
          });

         var jsonObj = getObjects();
        jsonObj['type'] = 'HOUSE';


          $.ajax({
                type: "POST",
                async :true,
                url:apiUrl+"getTotalImpressionDetails",
                data : jsonObj,
                cache: false,
                crossDomain: true,
                success: function (responseData, textStatus, jqXHR) 
                {
                  hidePreLoader4();

                  var result = JSON.parse(responseData);

                  var dt = result["rows"];

                  table3 = $('#advTableHouseCampaign').DataTable({
                    dom: '<"html5buttons"B>lTfgitp',
                    paging:true,
                    buttons: [
                       
                        {extend: 'csv',title: 'Advertiser Report'},
                        {extend: 'excel', title: 'Advertiser Report'},
                        //{extend: 'pdf', title: 'Order Report'},               
                    ],
                    order:[[1, "desc"]],
                        pageLength: 25
                  });

                  //table1 = $('#advTable').DataTable();

                  var reportTable = document.getElementById('advTableHouseCampaign-body');

                  var rowcount =reportTable.rows.length;
                  for (var x = rowcount - 1; x >= 0; x--)
                  {
                    reportTable.deleteRow(x);
                  }

                  if (table3 !== null) {
                    table3.clear();
                    table3.destroy();
                  }
                  var ctrcal=0;
                    count = 0;
                  for(var j=0;j<dt.length;j++)
                  {
                	  ctrcal=(dt[j]["clicks"]/dt[j]["impressions"])*100;
                	  
                    var newRow = reportTable.insertRow(count);
                    var newCell = newRow.insertCell(0);
                    newCell.innerHTML = dt[j]["cm_creative_size"]; 
                    var newCell = newRow.insertCell(1);
                    newCell.innerHTML = parseInt(dt[j]["impressions"]).toLocaleString("en");
                    var newCell = newRow.insertCell(2);

                    newCell.innerHTML = (parseFloat(ctrcal).toFixed(2)).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})+"%";
                    var newCell = newRow.insertCell(3);
                    newCell.innerHTML = parseInt(dt[j]["clicks"]).toLocaleString("en");  
                    var newCell = newRow.insertCell(4);
                    newCell.innerHTML = "£ "+parseFloat(dt[j]["amount"].toFixed(2)).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});   

                }

                $("#showtotalImpressions").show();

                 responsive_regionalReport_3();
                window.dispatchEvent(new Event('resize'));
                 },
                error: function (responseData, textStatus, errorThrown) {
                  console.log(responseData)
                 console.log('Error : ' + responseData)
                }
           
          });
  
        });

        $("html").niceScroll({cursorborder:"",cursorwidth: "7px",cursorcolor:"rgba(188,214,69,0.8)",boxzoom:true, cursorborderradius: "0px",autohidemode: true});


        $(".select2_demo_2").select2();


        // $('#regional_report').on('preDraw.dt', function(){
        //   $('#preloader2').show();
        // })
        
        

        $('#regional_report').on('draw.dt', function(){
          $('#preloader2').hide();
          window.dispatchEvent(new Event('resize'));
        })

        $('#advTable').on('draw.dt', function(){
          window.dispatchEvent(new Event('resize'));
        })
        
        $('#advTableWebsites').on('draw.dt', function(){
          window.dispatchEvent(new Event('resize'));
        })

        $('#advTableStandardCampaign').on('draw.dt', function(){
          window.dispatchEvent(new Event('resize'));
        })
        
        $('#advTableSponsoredCampaign').on('draw.dt', function(){
          window.dispatchEvent(new Event('resize'));
        })
        
        $('#advTableHouseCampaign').on('draw.dt', function(){
          window.dispatchEvent(new Event('resize'));
        })


        //console.log(moment().subtract(1, 'month').startOf('month')+":"+moment().subtract(1, 'month').endOf('month'));
        var start = moment().subtract(1, 'month').startOf('month');
        //var start = moment(); 
        var end = moment().subtract(1, 'month').endOf('month');

        function cb(start, end) {
          $('#reportrange span').html(start.format('DD MMM YYYY') + ' - ' + end.format('DD MMM YYYY'));
        }

        $('#reportrange').daterangepicker({
          autoApply: true,
          locale:{format:'DD MMM YYYY'},
          startDate: start,
          endDate: end,
          ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
          }
        }, cb);

        //cb(start, end);

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

        $('#line-item-report').DataTable({
         	dom: '<"html5buttons"B>lTfgitp',
         	
            buttons: [
               
                {extend: 'csv',title: 'Line Item Report'},
                {extend: 'excel', title: 'Line Item Report'},
                //{extend: 'pdf', title: 'Order Report'},

               
            ],
                        pageLength: 25

    });


        var searchParams = new URLSearchParams(window.location.search);
        var sources = searchParams.get('sources');

          cb(start, end);
          showOverView();
          

      });

    </script>
</body>

</html>
