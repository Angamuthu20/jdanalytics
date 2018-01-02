<?php

namespace app\controllers;


use Yii;

use \app\models\RestClient;

class DashboardController extends \yii\web\Controller
{
	
	public function actionDashboard()
	{
		if(isset($_SESSION["user"]) && $_SESSION["user"] != '')
		{
			return $this->render('dashboard');
		}
		else
		{
			return $this->redirect(['/']);
		}
		
	}
	public function actionExport()
	{
	    //ini_set('display_errors',1); error_reporting(E_ALL);
	    ini_set('max_exection_time','18000');
	    ini_set('memory_limit','1024M');
	    $this->layout               = false;
	    
	  
	   $params=json_decode($_REQUEST['camrefs']);
	   
	   $restObj = new \RestClient("https://api-analytics-qc.2adpro.com","","");
	   $restObj->requestName = "orderReportAll";
	   $restObj->responseType = "json";
	   $requestData = array();
	   
	   $requestData[] = $params;
	   
	   $restObj->requestParams= $requestData;
	   $response=$restObj->createData();
	   
	   $result=json_decode($restObj->responseText);
	   
	   $order_info=$result->rows;
	   header("Pragma: no-cache");
	   header("Content-Type: application/vnd.ms-excel");
	   header("Content-Disposition: attachment; filename=CampaignReport.xls");
	   header("Expires: 0");
	    
	   
	   $header = "Region\t";
	   $header .= "Urn\t";
	   $header .= "Advertiser\t";
	   $header .= "Startdate\t";
	   $header .= "Enddate\t";
	   $header .= "Impressions\t";
	   $header .= "Clicks\t";
	   $header .= "CTR(%)\t";
	   $header .= "Server\t";
	   $header .= "Budget\t";
	   
	   
	   $header .= "\n";
	   
	   echo $header;
	  
	   foreach ($order_info as $data){
	       $dataRow =$data->region."\t";
	       $dataRow .= $data->urn."\t";
	       $dataRow .=$data->advertiser."\t";
	       $dataRow .= date("d-M-Y", strtotime( $data->start_date))."\t";
	       $dataRow .= date("d-M-Y", strtotime( $data->end_date))."\t";
	       $dataRow .= $data->impressions."\t";
	       $dataRow .= $data->clicks."\t";
	       $dataRow .= $data->ctr."\t";
	       $dataRow .=$data->server."\t";
	       $dataRow .= $data->budget."\t";
	      
	       $dataRow .= "\n";
	       
	       echo $dataRow;
	   }
	   exit();
	}
	
	public function actionCampaign()
	{
		
	
		if((isset($_SESSION["user"]) && $_SESSION["user"] != '') || isset($_GET['lineItem']))
		{
			
			return $this->render('campaign');
		}
		else
		{
			return $this->redirect(['/']);
		}
			
		
		
		
	}
	

	public function actionDownloadpdf()
	{
		ini_set('display_errors',0);
		error_reporting(E_ALL);
		set_time_limit(90);
		$line_item_id = $_GET['id'];
		
		
		$creative_info='';
		$website_info='';
		$lineitem_info='';
		$fb_info='';
		$budget_info='';
		$order_info='';
		$click_info='';
		$ctr_info='';
		
		$restObj = new \RestClient("https://api-analytics-qc.2adpro.com","","");
		$restObj->requestName = "reportImpressions";
		$restObj->responseType = "json";
		$requestData = array();
		
		$requestData['lineItem'] = $line_item_id;
		
		$restObj->requestParams= $requestData;
		$response=$restObj->createData();
		
		$result=json_decode($restObj->responseText);
		
		$order_info=$result->rows[0];
		
		
		
		$restObj_click = new \RestClient("https://api-analytics-qc.2adpro.com","","");
		$restObj_click ->requestName = "reportClicks";
		$restObj_click ->responseType = "json";
		$requestData_click = array();
		
		$requestData_click ['lineItem'] = $line_item_id;
		
		$restObj_click ->requestParams= $requestData_click;
		$response_click =$restObj_click ->createData();
		
		$result_click =json_decode($restObj_click ->responseText);
		
		$click_info=$result_click->rows[0];
		
		
		$restObj_ctr = new \RestClient("https://api-analytics-qc.2adpro.com","","");
		$restObj_ctr->requestName = "reportCtr";
		$restObj_ctr->responseType = "json";
		$requestData_ctr= array();
		
		$requestData_ctr['lineItem'] = $line_item_id;
		
		$restObj_ctr->requestParams= $requestData_ctr;
		$response_ctr=$restObj_ctr->createData();
		
		$result_ctr=json_decode($restObj_ctr->responseText);
		
		$ctr_info=$result_ctr->rows[0];
		
		
		$restObj_budget = new \RestClient("https://api-analytics-qc.2adpro.com","","");
		$restObj_budget ->requestName = "orderBudget";
		$restObj_budget ->responseType = "json";
		$requestData_budget = array();
		
		$requestData_budget ['lineItem'] = $line_item_id;
		
		$restObj_budget ->requestParams= $requestData_budget ;
		$response_budget =$restObj_budget ->createData();
		
		$result_budget =json_decode($restObj_budget ->responseText);
		
		$budget_info=$result_budget ->rows[0];
		
		
		$restObj_lineitem = new \RestClient("https://api-analytics-qc.2adpro.com","","");
		$restObj_lineitem->requestName = "ByAllLineitem";
		$restObj_lineitem->responseType = "json";
		$requestData_lineitem= array();
		
		$requestData_lineitem['lineItem'] = $line_item_id;
		
		$restObj_lineitem->requestParams= $requestData_lineitem;
		$response_lineitem=$restObj_lineitem->createData();
		
		$result_lineitem=json_decode($restObj_lineitem->responseText);
		
		$lineitem_info=$result_lineitem->rows;
		
		
		
		$restObj_fb = new \RestClient("https://api-analytics-qc.2adpro.com","","");
		$restObj_fb->requestName = "FacebookLineitem";
		$restObj_fb->responseType = "json";
		$requestData_fb= array();
		
		$requestData_fb['lineItem'] = $line_item_id;
		
		$restObj_fb->requestParams= $requestData_fb;
		$response_fb=$restObj_fb->createData();
		
		$result_fb=json_decode($restObj_fb->responseText);
		
		$fb_info=$result_fb->rows;
		
		if(count($fb_info)<0){$fb_info='';}
		
		
		$restObj_website = new \RestClient("https://api-analytics-qc.2adpro.com","","");
		$restObj_website->requestName = "websiteByOrderName";
		$restObj_website->responseType = "json";
		$requestData_website= array();
		
		$requestData_website['lineItem'] = $line_item_id;
		
		$restObj_website->requestParams= $requestData_website;
		$response_website=$restObj_website->createData();
		
		$result_website=json_decode($restObj_website->responseText);
		
		$website_info=$result_website->rows;
		
		
		$website_array=json_decode(json_encode($website_info), True);
		
		
		$web_deatils = array();
		if(count($website_array)>1) {
		foreach ($website_array as $value)
		{
			$web_deatils[$value['li_name']][]=$value;
		}
		}else
		{
		$web_deatils=$website_array;
		}
		
		
		$restObj_creative = new \RestClient("https://api-analytics-qc.2adpro.com","","");
		$restObj_creative->requestName = "lineItemCreatives";
		$restObj_creative->responseType = "json";
		$requestData_creative= array();
		
		$requestData_creative['lineItem'] = $line_item_id;
		
		$restObj_creative->requestParams= $requestData_creative;
		$response_creative=$restObj_creative->createData();
		
		$result_creative=json_decode($restObj_creative->responseText);
		
		$creative_info=$result_creative->rows;
		
		
		$creative_array=json_decode(json_encode($creative_info), True);
		
		$creative_deatils = array();
		
		
		
		if(count($creative_array)>1) {
		foreach ($creative_array as $value)
		{
			$creative_deatils[$value['name']][]=$value;
		}
		}
		else 
		{
			$creative_deatils=$creative_array;
		
		}
		
		$creative_deatils='';
		
		
		

		
		
		return $this->render('campaignsummarypdf',['order_info'=>$order_info,
													'click_info' =>$click_info,
				'ctr_info' =>$ctr_info,'budget_info'=>$budget_info,'lineitem_info'=>$lineitem_info,'fb_info'=>$fb_info,'website_info'=>$web_deatils,
				'creative_info' =>$creative_deatils
		]);
				
		
		
	}
	
	public function actionDownload()
	{
		
		ini_set('display_errors',1);
		
		error_reporting(E_ALL & ~E_NOTICE);
		
		
		
		//http://jdanalytics.localhost/dashboard/campaign?lineItem=SLG0304418&lineItemNew=SLG0304418
		$httpurl = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] && !in_array(strtolower($_SERVER['HTTPS']),array('off','no'))) ? 'https' : 'http';
		//$url = $httpurl.'://' . $_SERVER['HTTP_HOST'] ."/workflow/index.php?r=metrics/download&id=".$get_params['id'];
		
		$url = $httpurl.'://' . $_SERVER['HTTP_HOST'] ."/dashboard/downloadpdf?id=".$_GET['id'];
		
		
		
		$path = realpath(dirname(__FILE__)."/../web/tmp/");
		
		
		
		// If it exist, check if it's a directory
		if(!is_dir($path)){
			mkdir(dirname(__FILE__)."/../web/tmp/",0777);
		}
		
		
		
		
		$filename =$path.'/'.$_GET['id'].'.pdf';
		
		$cmd = '/usr/bin/wkhtmltopdf --encoding utf-8  --page-size A1 "'.$url.'" '.$filename;
		
		
		
		
		exec($cmd);
		
	
		
		if($_GET['mail']=='yes')
		{
		    echo   $_GET['id'].'.pdf';
		}
		else
		{
		
		header ("Content-Type:application/pdf");
		header('Content-Disposition: attachment; filename='.$filename);
		
		//output the XML data
		readfile($filename);
		// if you want to directly download then set expires time
		header("Expires: 0");
		}
		exit();
		
	}
	
	
}

	
	
	
	?>