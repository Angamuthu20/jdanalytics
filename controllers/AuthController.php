<?php

namespace app\controllers;


use Yii;

use \app\models\RestClient;

class AuthController extends \yii\web\Controller
{
	
	public function beforeAction($action) {
		if (in_array($action->id, ['example'])) {
			$this->enableCsrfValidation = false;
		}
		return parent::beforeAction($action);
	}
	
	
    public function actionLogin()
    {

    	
    	
        $username=$_POST["username"];
        $pwd=$_POST["password"];
   
        $restObj = new \RestClient("https://api-analytics-qc.2adpro.com","","");

        $requestData = array();	

        $restObj->requestName = "loginAuth";
        $restObj->responseType = "json";

        $requestData['username'] = $username;
        $requestData['password'] = md5($pwd);

        $restObj->requestParams = $requestData;
        $response=$restObj->createData();
        $result=json_decode($restObj->responseText);

        $status= $result->Status ;


        if($status=='Success')
        {
        	session_start();
            $firstname = $result->FirstName;
            $lastname = $result->LastName;
            $_SESSION["username"] = $firstname.' '.$lastname;
        	$_SESSION["user"]= $username;
        	
        	$_SESSION["site_Id"] ="4";
        	
        	if($firstname=='Joseph'){
        		$_SESSION["role"]="RegionalAdmin";
        	}else if ($firstname=='Gemma')
        	{
        		$_SESSION["role"]="SalesRep";
        	}
        	
        	return $this->redirect(['/dashboard/dashboard']);
        }
        else 
        {
        	return $this->redirect(['/','error']);
        }
        exit();

       
    }
    public function actionLogout()
    {
        session_unset();
        session_destroy();
        $_SESSION = array();
        return $this->redirect(['/']);
    }
}
?>