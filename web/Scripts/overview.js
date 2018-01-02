function getAllRegions(user)
{
	
	
     $('#jd-regions').empty();
	var role = $('#role').val();
	var name =$('#usrname').val();
	$('#jd-regions').append($('<option>', {value: 'ALL REGION', text: 'ALL REGIONS' }));
	$("#jd-regions").select2().val("ALL REGION").trigger('change.select2');
	
	var jsonObj = {
		siteId :4
	}
	
	console.log(jsonObj);
	$.ajax({
		type: "POST",
		async :false,
		url:apiUrl +"listAllRegions",
		data : jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
			var result = JSON.parse(responseData);
			var dt = result["rows"]	
			
			if(role === 'RegionalAdmin')
				{
					$('#jd-regions').append($('<option>', {value: "Berkshire Bucks", text: "Berkshire Bucks" }));
					$('#jd-regions').append($('<option>', {value: "Clyde and Fort", text: "Clyde and Fort" }));
					$('#jd-regions').append($('<option>', {value: "Hampshire and Dorset", text: "Hampshire and Dorset" }));
					$('#jd-regions').append($('<option>', {value: "North East", text: "North East" }));
					$('#jd-regions').append($('<option>', {value: "North London", text: "North London" }));
					
				}
			else if (role==='SalesRep')
				{
				$('#jd-regions').append($('<option>', {value: "Hampshire and Dorset", text: "Hampshire and Dorset" }));
				}
			else if(role === 'RegionAdmin')
			{
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
						var region = objData["region"];
						if (region === 'Digital S1')
						{
							
						}
						else
						{	
							$('#jd-regions').append($('<option>', {value: region, text: region }));
						}				
					}		
			}
			else
			{
				
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
						var region = objData["region"];
								$('#jd-regions').append($('<option>', {value: region, text: region }));
								
					
					}
			}
			
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		  console.log('Error : ' + responseData)
		}

	    });
}	

function getAmountspentOverview(jsonObj)
{
	showPreLoader();
	$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"amountspentOverview",
		data : jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
			hidePreLoader6();
			var result = JSON.parse(responseData);
			var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					finalResult = objData["sum"];	
					if (finalResult !== null)
					{
						finalResult = parseFloat(objData["sum"].toFixed(2)).toLocaleString("en");
						document.getElementById('amount_spent').innerHTML = "£ " +finalResult; 
						
					}
					else
					{
						document.getElementById('amount_spent').innerHTML = "£ " +0;
					}						
				}
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		  console.log('Error : ' + responseData)
		}

	    });

}



function getCPMOverview1(jsonObj)
{
	showPreLoader();
	$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"ecpmOverview",
		data : jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
			hidePreLoader5();
			var result = JSON.parse(responseData);
			var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					finalResult = objData["ecpm"];	
					if (finalResult !== null)
					{
						finalResult = parseInt(objData["ecpm"]);
						document.getElementById('eCPM').innerHTML = "£ " +finalResult.toLocaleString("en");	
					}
					else
					{
						document.getElementById('eCPM').innerHTML = "£ " +0;
					}						
				}
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		  console.log('Error : ' + responseData)
		}

	    });

	

}
function getCampaigncount(jsonObj)
{
	showPreLoader();
	$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"campaignCount",
		data : jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
			hidePreLoader1();
			var result = JSON.parse(responseData);
			var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					finalResult = objData["count"];	
					if (finalResult !== null)
					{
						finalResult = parseInt(objData["count"]);
						document.getElementById('totalCampaigns').innerHTML = finalResult.toLocaleString("en");	
					}
					else
					{
						document.getElementById('totalCampaigns').innerHTML = 0;
					}						
				}
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		  console.log('Error : ' + responseData)
		}

	    });

	

}



function getwebsitesOverview(jsonObj)
{
	showPreLoader();
	$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"websiteOverview",
		data : jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
			hidePreLoader3();
			hidePreLoader1();
			var result = JSON.parse(responseData);
			var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					finalResult = objData["sum"];	
					if (finalResult !== null)
					{
						finalResult = parseInt(objData["count"]);
						document.getElementById('websites').innerHTML = finalResult.toLocaleString("en");	
					}
					else
					{
						document.getElementById('websites').innerHTML = 0;
					}						
				}
		},		
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		  console.log('Error : ' + responseData)
		}
	    });

	

}

var impressN = 0;

function getImpressionOverview(jsonObj)
{
	showPreLoader();
	$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"impressionOverview",
		data : jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
			hidePreLoader4();
			
			var result = JSON.parse(responseData);
			var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					finalResult = objData["sum"];	
					if (finalResult !== null)
					{	
						finalResult = parseInt(objData["sum"]);
						impressN = parseInt(objData["sum"]);
						goals = parseInt(objData["units"]);
						document.getElementById('ovGraph').innerHTML = '<div class="progress" style="background:#ddd;height: 32px;margin-bottom: 0;"><span id="ovProgressData2">'+parseFloat((finalResult/goals)*100).toFixed(2)+'%</span><span id="ovProgressData" style="width:'+pBar(finalResult,goals)+'">'+parseFloat((finalResult/goals)*100).toFixed(2)+'%</span><div class="progressbar progress-bar progress-bar-analytics progress-bar-striped ovProgressBar" role="progressbar" aria-valuenow='+finalResult+' aria-valuemin="0" aria-valuemax='+goals+' style="width:'+pBar(finalResult,goals)+';background-color:'+pColor(finalResult,goals)+'"></div></div>';
						document.getElementById('impressions').innerHTML = parseInt(finalResult).toLocaleString("en");
						document.getElementById('impGoal').innerHTML = parseInt(goals).toLocaleString("en");
						document.getElementById('impActual').innerHTML = parseInt(finalResult).toLocaleString("en");
						// ww = $(".progressbar").css("width");
						// $("#ovProgressData").css("width",ww);


						//document.getElementById('impressions').innerHTML = finalResult.toLocaleString("en");	
						
						finalResult = parseInt(objData["count"]);
						document.getElementById('totalCampaigns').innerHTML = finalResult.toLocaleString("en");	
						calculateCpm();
					}
					else
					{
						document.getElementById('impressions').innerHTML = 0;
					}

					/*function myFunction() {
					  if(!$('#eCPM').html()=='') {
					    clearInterval(for_ecpm);
					    return;
					  }
					  else{
					  	calculateCpm();
					  }
					}
					var for_ecpm = setInterval(function(){myFunction()}, 1000);
					*/

					console.log('imp:'+impressN);
					
				}

		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		  console.log('Error : ' + responseData)
		}

	    });

	//console.log(year+" || "+month);

}



      function pBar(aMin,aMax){
      var progressBarWidth;
      progressBarWidth=(((aMin/aMax)*100)+"%");
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
      return progressBarColor;
       }

function getAdvertisersOverview(jsonObj)
{
   showPreLoader();   
	$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"advertiserOverview",
		data : jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
			hidePreLoader2();
			
			var result = JSON.parse(responseData);
			var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					finalResult = objData["sum"];	
					if (finalResult !== null)
					{		
						finalResult = parseInt(objData["count"]);
						document.getElementById('advertisers').innerHTML = finalResult.toLocaleString("en");
					}
					else
				        {
						document.getElementById('advertisers').innerHTML = 0;
					}
										
				}
                  
				
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		  console.log('Error : ' + responseData)
		}

	    });

	
}

function getFacebookMetrics(jsonObj)
{
    showPreLoader();
    $.ajax({
        type: "POST",
        async :true,
        url:apiUrl+"fbOverview",
        data : jsonObj,
        cache: false,
        crossDomain: true,
        success: function (responseData, textStatus, jqXHR) {
            hidePreLoader2();
            var result = JSON.parse(responseData);
            var dt = result["rows"]
            for (var i=0 ; i<dt.length; i ++)
            {
                var objData = dt[i];
                finalResult = objData["sum"];
                if (finalResult !== null)
                {
                   // finalResult = parseInt(objData["count"]);
                    tot_campaign = parseInt(objData["tot_campaign"]);
                    imp = parseInt(objData["imp"]);
                    amount = parseFloat(objData["amount"].toFixed(2));
                    ecpm = parseFloat(objData["ecpm"].toFixed(2));
                    reach = parseInt(objData["reach"]);
                   var engagement = parseInt(objData["engagement"]);
                    
                    console.log(objData);
                    document.getElementById('FbeCPM').innerHTML = "£ "+ecpm.toLocaleString("en"); 
                    document.getElementById('Fbamount_spent').innerHTML = "£ "+amount.toLocaleString("en"); 
                    document.getElementById('Fbimpressions').innerHTML = imp.toLocaleString("en");
                    document.getElementById('totalFbCampaigns').innerHTML = tot_campaign.toLocaleString("en");
                    document.getElementById('Fbreach').innerHTML = reach.toLocaleString("en");
                    document.getElementById('Fbengagement').innerHTML = engagement.toLocaleString("en");
                    console.log('fb metrics =>'+tot_campaign,imp,amount,ecpm,engagement);


                }
                else
                {
                    // document.getElementById('advertisers').innerHTML = 0;
                    document.getElementById('FbeCPM').innerHTML = 0;
                    document.getElementById('Fbamount_spent').innerHTML = 0;
                    document.getElementById('Fbimpressions').innerHTML = 0;
                    document.getElementById('totalFbCampaigns').innerHTML = 0;
                }

            }


        },
        error: function (responseData, textStatus, errorThrown) {
            console.log(responseData)
            console.log('Error : ' + responseData)
        }

    });


}


function getDbmMetrics(jsonObj)
{
    showPreLoader();
    $.ajax({
        type: "POST",
        async :true,
        url:apiUrl+"dbmmetrics",
        data : jsonObj,
        cache: false,
        crossDomain: true,
        success: function (responseData, textStatus, jqXHR) {
            hidePreLoader2();
            var result = JSON.parse(responseData);
            var dt = result["rows"]
            for (var i=0 ; i<dt.length; i ++)
            {
                var objData = dt[i];
                finalResult = objData["sum"];
                if (finalResult !== null)
                {
                   // finalResult = parseInt(objData["count"]);
                    tot_campaign = parseInt(objData["campaigns"]);
                    imp = parseInt(objData["impressions"]);
                    amount = parseFloat(objData["amount"].toFixed(2));
                    ecpm = parseFloat(objData["ecpm"]);
                    website = parseInt(objData["websites"]);
                   var adv = parseInt(objData["advertisers"]);
                    
         

                  var ecpm=(amount/imp)*1000;

                  ecpm=parseFloat(ecpm.toFixed(2)); 
                  
                    document.getElementById('dbmeCPM').innerHTML = "£ "+ecpm.toLocaleString("en"); 
                    document.getElementById('dbmamount_spent').innerHTML = "£ "+amount.toLocaleString("en"); 
                    document.getElementById('dbmimpressions').innerHTML = imp.toLocaleString("en");
                    document.getElementById('dbmtotalCampaigns').innerHTML = tot_campaign.toLocaleString("en");
                    document.getElementById('dbmadvertisers').innerHTML = adv.toLocaleString("en");
                    document.getElementById('dbmwebsites').innerHTML = website.toLocaleString("en");
                    console.log('fb metrics =>'+tot_campaign,imp,amount,ecpm,engagement);


                }
                else
                {
                    // document.getElementById('advertisers').innerHTML = 0;
                    document.getElementById('FbeCPM').innerHTML = 0;
                    document.getElementById('Fbamount_spent').innerHTML = 0;
                    document.getElementById('Fbimpressions').innerHTML = 0;
                    document.getElementById('totalFbCampaigns').innerHTML = 0;
                }

            }


        },
        error: function (responseData, textStatus, errorThrown) {
            console.log(responseData)
            console.log('Error : ' + responseData)
        }

    });


}


function getdfpImpression(jsonObj)
{
	showPreLoader();
$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"dfpImpressions",
		data : jsonObj,		
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
			hidePreLoaderS1();
			var result = JSON.parse(responseData);
			var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					finalResult = objData["sum"];	
					if (finalResult !== null)
					{
						finalResult = parseInt(objData["sum"]);
						document.getElementById('dc_impressions').innerHTML = finalResult.toLocaleString("en");	
					}
					else
					{
						document.getElementById('dc_impressions').innerHTML =  0;
					}
				
				}
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		  console.log('Error : ' + responseData)
		}

	    });
}	

function getdfpClick(jsonObj)
{
$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"dfpClick",
		data : jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
			var result = JSON.parse(responseData);
			var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					finalResult = objData["sum"];	
					if (finalResult !== null)
					{
						finalResult = parseInt(objData["sum"]);
						document.getElementById('dc_click').innerHTML = finalResult.toLocaleString("en");	
					}
					else
					{
						document.getElementById('dc_click').innerHTML =  0;
					}
				
				}
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		  console.log('Error : ' + responseData)
		}

	    });
} 

function getdfpInteraction(jsonObj)
{
$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"dfpInteractions",
		data : jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
			var result = JSON.parse(responseData);
			var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					finalResult = objData["sum"];	
					if (finalResult !== null)
					{
						finalResult = parseInt(objData["sum"]);
						document.getElementById('dc_interact').innerHTML = finalResult.toLocaleString("en");	
					}
					else
					{
						document.getElementById('dc_interact').innerHTML =  0;
					}
				
				}
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		  console.log('Error : ' + responseData)
		}

	    });

}

function getfbImpression(jsonObj)
{
$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"fbImpressions",
		data : jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
			var result = JSON.parse(responseData);
			var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					finalResult = objData["sum"];	
					if (finalResult !== null)
					{
						finalResult = parseInt(objData["sum"]);
						document.getElementById('fb_impressions').innerHTML = finalResult.toLocaleString("en");	
					}
					else
					{
						document.getElementById('fb_impressions').innerHTML =  0;
					}
				
				}
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		  console.log('Error : ' + responseData)
		}

	    });
}

function getfbClick(jsonObj)
{
$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"fbClick",
		data : jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
			var result = JSON.parse(responseData);
			var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					finalResult = objData["sum"];	
					if (finalResult !== null)
					{
						finalResult = parseInt(objData["sum"]);
						document.getElementById('fb_click').innerHTML = finalResult.toLocaleString("en");	
					}
					else
					{
						document.getElementById('fb_click').innerHTML =  0;
					}
				
				}
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		  console.log('Error : ' + responseData)
		}

	    });
}

function getfbInteraction(jsonObj)
{
$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"fbInteractions",
		data : jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
			var result = JSON.parse(responseData);
			var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					finalResult = objData["sum"];	
					if (finalResult !== null)
					{
						finalResult = parseInt(objData["sum"]);
						document.getElementById('fb_interact').innerHTML = finalResult.toLocaleString("en");	
					}
					else
					{
						document.getElementById('fb_interact').innerHTML =  0;
					}
				
				}
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		  console.log('Error : ' + responseData)
		}

	    });
}



