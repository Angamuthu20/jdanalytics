function getAllRegions()
{	
    $('#jd-regions').empty();
	var role = $('#role').val();
	$('#jd-regions').append($('<option>', {value: 'ALL REGION', text: 'ALL REGIONS' }));
	$("#jd-regions").select2().val("ALL REGION").trigger('change.select2');
	
	var jsonObj = {
		siteId : $('#siteId').val()
	}
	
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
						finalResult = parseFloat(objData["sum"]);
						document.getElementById('amount_spent').innerHTML = "£ " +finalResult.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}); 
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
						finalResult = parseFloat(objData["ecpm"]);
						document.getElementById('eCPM').innerHTML = "£ " +finalResult.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}); 
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
						document.getElementById('impressions').innerHTML = finalResult.toLocaleString("en");
						
						finalResult = parseInt(objData["count"]);
						document.getElementById('totalCampaigns').innerHTML = finalResult.toLocaleString("en");	
					}
					else
					{
						document.getElementById('impressions').innerHTML = 0;
					}
					
					calculateCpm();
				}

		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		 console.log('Error : ' + responseData)
		}

	    });

	//alert(year+" || "+month);

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
                    amount = parseFloat(objData["amount"]);
                    ecpm = parseFloat(objData["ecpm"]);
                    document.getElementById('FbeCPM').innerHTML = "fasdf";//+ecpm.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}); 
                    document.getElementById('Fbamount_spent').innerHTML = "fasdf"+amount.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}); 
                    document.getElementById('Fbimpressions').innerHTML = imp.toLocaleString("en");
                    document.getElementById('totalFbCampaigns').innerHTML = tot_campaign.toLocaleString("en");
                    console.log('fb metrics =>'+tot_campaign,imp,amount,ecpm);


                }
                else
                {
                    // document.getElementById('advertisers').innerHTML = 0;
                    document.getElementById('FbeCPM').innerHTML = "£hdfg " + 0;
                    document.getElementById('Fbamount_spent').innerHTML = "£ hdg" + 0;
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



