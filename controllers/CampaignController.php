<?php

namespace app\controllers;


use Yii;

use \app\models\RestClient;

class CampaignController extends \yii\web\Controller
{
    
    
    
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
    
    
   
     
    
}




?>