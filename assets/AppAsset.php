<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * Main application asset bundle.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
    		//"customCSS/bootstrap.min.css",
            'css/jdx-login.css',
    		"css/plugins/select2/select2.min.css",
    		"customCSS/font-awesome.css",
    		"customCSS/animate.css",
    		"customCSS/responsive.css",
    		"css/plugins/dataTables/datatables.min.css",
            "css/datatables/jquery.dataTables.min.css",
            "css/datatables/buttons.dataTables.min.css",
            "css/datatables/select.dataTables.min.css",
            "css/datatables/editor.dataTables.css",
    		"css/daterangepicker.css",
    		"css/jquery.timepicker.css",
            "css/sweetalert/sweetalert.css",
            "customCSS/style.css",
    ];
    public $js = [
        "js/jquery_all.js",
		"js/jquery-2.1.1.js.download",
		"js/bootstrap.min.js.download",
		"js/jquery.cookie.js.download",
		"js/jquery.metisMenu.js.download",
		"js/jquery.slimscroll.min.js.download",
		"js/inspinia.js.download",
		"js/plugins/sweetalert/sweetalert.min.js",
		"js/jquery-ui.min.js.download",
		"js/plugins/select2/select2.full.min.js",
		"js/plugins/pace/pace.min.js",
		"js/moment.js",
        "js/datatablejs/jquery.dataTables.min.js",
        "js/datatablejs/dataTables.buttons.min.js",
        "js/datatablejs/dataTables.select.min.js",
        "js/datatablejs/dataTables.editor.min.js ",
		"js/plugins/chartJs/cloudflare.js",
		"js/daterangepicker.js",
		"js/jquery.nicescroll.min.js",
		"js/jquery.timepicker.js",
		"Scripts/genericScripts.js",
		"Scripts/overview.js",
		"Scripts/orderReport.js",
		"/Scripts/graphicalReports.js"
        
           
            
    ];
    public $depends = [
        'yii\web\YiiAsset',
        //'yii\bootstrap\BootstrapAsset',
    ];
    public $jsOptions = array(
        'position' => \yii\web\View::POS_HEAD
    );
}
