function showBreakdownValue()
{
  
  var filter = $('#breakDownValue').val();
  var filterId;

	
  if(filter.trim() !== 'default')
   {
	var fil = filter.replace(/\,/g,"");
	newfilter = fil.replace(/\s/g, '');
	filterId = newfilter.replace(/\./g,'')
	 var filter_tag = '<span class="tag label label-warning" id="'+filterId+'"><a  name="'+filterId+'" onclick="removeFilter(this.name)" style="color:black;">'+filter+' <i class="remove glyphicon glyphicon-remove-sign glyphicon-white"></i></a></span> ';
	   //var filter_tag = '<a id="'+filterId+'" name="'+filterId+'" onclick="removeFilter(this.name)" style="color:black;">'+filter+' <i class="remove glyphicon glyphicon-remove-sign glyphicon-white"></i></a>';
	   $('#divForFilterValues').append(filter_tag);
    }
			
  
}

function removeFilter(id)
{
	
	$('#'+id).remove();
	
}

function setMetric()
{
  var metric = $('#metricSelection').val();
  if (metric !== 'default')
   {
    	$('#metricSelected').val(metric);
        if((metric === 'impressions') || (metric === 'totalViewedTime') || (metric === 'reach'))
        {
          $('#selMetric').val('impressions');
          document.getElementById('graphTitle').innerHTML='Awareness';
        }
	else if((metric === 'clicks') || (metric === 'ctr'))
        {
          $('#selMetric').val('clicks');		
          document.getElementById('graphTitle').innerHTML='Clicks';   
        }
        else
        {
	  $('#selMetric').val('interactions');	
          document.getElementById('graphTitle').innerHTML='Engagement';
        } 
        
   }
 
}

function getBreakdownMetric()
{
   var breakdown= $('#breakdownType').val();
   $('#breakdownTypeSelected').val(breakdown);
   $('#divForFilterValues').empty();
   if(breakdown === 'cpmVscpd')
   {
	$('#breakDownValue').val("");
       $('#breakDownValue').css("display",'none');
        
   }
   else if(breakdown === 'advertiser')
   {
       $('#breakDownValue').css("display",'');
       getAdvertisersList();
   } 	
   else if(breakdown === 'website')
   {
       $('#breakDownValue').css("display",'');
       getWebsiteList();
   }
   else if(breakdown === 'status')
   {
       $('#breakDownValue').css("display",'');
       getStatusList();
   }
   else if(breakdown === 'lineItem')
   {
       $('#breakDownValue').css("display",'');
       getLineItemList();
   }
   else if(breakdown === 'creativeType')
   {
       $('#breakDownValue').css("display",'');
       getCreativeTypeList();
   }  	 
   	
}

function getAdvertisersList()
{
   
   var target = $('#productSel').val();
   var jsonObj = {
      target : target,
      siteId : $('#siteId').val(),
      metric : $('#selMetric').val()
   }
   $('#breakDownValue').empty();
   $('#breakDownValue').append($('<option>', {value: 'default', text: 'Choose Breakdown Value' }));
   $.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"listAdvertisers",
		data :jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
                     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
                                        var addname = objData["advertisername"]; 
                                        $('#breakDownValue').append($('<option>', {value: addname, text: addname }));
					
				}
							
	
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		  console.log('Error : ' + responseData)
		}

	    });

}

function getWebsiteList()
{
  var target = $('#productSel').val();
   var jsonObj = {
      target : target,
      siteId : $('#siteId').val(),
      metric : $('#selMetric').val()
      
   }
   $('#breakDownValue').empty();
   $('#breakDownValue').append($('<option>', {value: 'default', text: 'Choose Breakdown Value' }));
   $.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"listWebsites",
		data :jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
                     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
                                        var addname = objData["website"]; 
                                        $('#breakDownValue').append($('<option>', {value: addname, text: addname }));
					
				}
							
	
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		 console.log('Error : ' + responseData)
		}

	    });

}

function getStatusList()
{
  var target = $('#productSel').val();
   var jsonObj = {
      target : target,
      siteId : $('#siteId').val(),
      metric : $('#selMetric').val()
   }
   $('#breakDownValue').empty();
   $('#breakDownValue').append($('<option>', {value: 'default', text: 'Choose Breakdown Value' }));
   var value ="";
   $.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"listStatus",
		data :jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
                     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
   					var objData = dt[i];
                                        var addname = objData["status"];
				         if (addname === "A")
						{
						   value = "Approved";
						}
						else if (addname === "C")
						{
						  value = "Completed";	
						}	
						else if (addname === "D")
						{
						  value = "Cancelled";
						}
						else if (addname === "E")
						{
						  value = "Amend";
						}
						else if (addname === "H")
						{
						  value = "Hold";
						}
						else if (addname === "I")
						{
						  value = "Queued";
						}
						else if (addname === "L")
						{
						  value = "Delivering";
						}
						else if (addname === "O")
						{
						  value = "Order Entry";
						}
						else if (addname === "R")
						{
						  value = "Ready";
						}
						else if (addname === "S")
						{
						  value = "Submitted";
						}
						else if (addname === "V")
						{
						  value = "Ad Served";
						}
						else if (addname === "W")
						{
						  value = "Revised";
						}
						else if (addname === "X")
						{
						  value = "Deleted";
						}
						else if (addname === "Z")
						{
						  value = "Archived";
						}
						else if (addname === "B")
						{
						  value = "Reserved";
						}
						else if (addname === "Y")
						{
						   value = "Query";
						}
						else if (addname === "P")
						{
						  value = "Paused";
						}
						else if (addname === "U")
						{
						  value = "Updated";
						}
						else if (addname === "K")
						{
				                  value = "Overbooked";
						}
					 
                                        $('#breakDownValue').append($('<option>', {value: addname, text: value }));
					
				}
							
	
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		 console.log('Error : ' + responseData)
		}

	    });

}

function getLineItemList()
{
	
   var jsonObj = {
         siteId : $('#siteId').val(),
         metric : $('#selMetric').val()
   }
   $('#breakDownValue').empty();
   $('#breakDownValue').append($('<option>', {value: 'default', text: 'Choose Breakdown Value' }));
   $.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"listLineitemType",
		data :jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
   		     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
                                        var addname = objData["line_item_type"]; 
                                        $('#breakDownValue').append($('<option>', {value: addname, text: addname }));
					
				}
							
	
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		 console.log('Error : ' + responseData)
		}

	    });

}

function getCreativeTypeList()
{
  var jsonObj = {
 	siteId : $('#siteId').val(),
        metric : $('#selMetric').val()
   }
   $('#breakDownValue').empty();
   $('#breakDownValue').append($('<option>', {value: 'default', text: 'Choose Breakdown Value' }));
   $.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"listCreativeType",
		data :jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
   		     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
                                        var addname = objData["creative_type"]; 
                                        $('#breakDownValue').append($('<option>', {value: addname, text: addname }));
					
				}
							
	
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		 console.log('Error : ' + responseData)
		}

	    });
}

function submitFilters()
{
		$('#submitFilter').children().removeClass("fa fa-filter");
		$('#submitFilter').children().addClass("fa fa-circle-o-notch fa-spin");
		
		//$this.children().addClass("fa fa-filter");
	//$('#submitFilter').addClass('disabledClass');
        $('#submitFilter').prop("disabled",true);
        var allData = 'all';
		var metric = $('#metricSelected').val();
        var target = $('#productSel').val();
        var breakdownType = $('#breakdownTypeSelected').val();
        var dataArray = new Array();
	var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
	var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");
	var list = document.getElementById('divForFilterValues').children;
	var regList = $("#divForFilterValues").children().length;
        if (regList === 0)
        {
           dataArray.push(allData);
        }
        else
        {
		for(var i=0 ; i<regList ; i++)
		{			
			var divContent = list[i].innerHTML;
			//var reg = divContent.substring(0, divContent.indexOf('<'));
                        var reg = divContent;
                        var regSel = $(reg).text();
			dataArray.push(regSel);
		
		}
	}	
	
        var metricLength = metric.length;
        var breakdownTypeLength = breakdownType.length;
	
        if(regList > 3)
	{
		swal({title: '', text: "Cannot select more than 3 breakdown values", type: '', showCancelButton: false, confirmButtonText: 'Ok', confirmButtonColor: "#1ab394", closeOnConfirm: true, customClass: 'swal-wide'}, function ()
                    {
			$('#submitFilter').prop("disabled",false);
			$('#submitFilter').children().removeClass("fa fa-circle-o-notch fa-spin");
			$('#submitFilter').children().addClass("fa fa-filter");
			
                    });
                 return;
	}        

        if ((metricLength >0)&&(breakdownTypeLength >0)&&(regList > 0))
        {
          
              var jsonObj = {
		      //dataArray: dataArray,
		      siteId : $('#siteId').val(),
		      metric : $('#selMetric').val(),
                      target : target,
		      from : startDate,
		      to : endDate
		   }

            if (breakdownType === 'advertiser')
                {
			graphByAdvertiser(jsonObj,metric,dataArray);
                }
                else if (breakdownType === 'website')
                {
                  	graphBywebsite(jsonObj,metric,dataArray);
                } 
                else if (breakdownType === 'status')
                {
                  	graphBystatus(jsonObj,metric,dataArray)
                }
		else if (breakdownType === 'lineItem')
                {
                  	graphBylineItem(jsonObj,metric,dataArray);
                }
                else 
                {
                        
                  	graphBycreativeType(jsonObj,metric,dataArray);
                }	
        } 
        else if ((metricLength >0)&&(breakdownTypeLength >0)&&(regList < 1))
        {
           

               if (breakdownType === 'cpmVscpd')
                {
			showCPMvsCPD();
                }
                else if (breakdownType === 'advertiser')
                {
			advertiserGraph();
                }
                else if (breakdownType === 'website')
                {
                  	websiteGraph();
                } 
                else if (breakdownType === 'status')
                {
                  	statusGraph();
                }
		else if (breakdownType === 'lineItem')
                {
                  	lineItemGraph();
                }
                else 
                {
                        
                  	creativeTypeGraph();
                }		
        }
	else
	{
		if (metric === 'impressions')
                {
			impressionInLine();
                        
                }
                else if (metric === 'clicks')
                {
			clicksInLine();
                }
                else if(metric === 'interactions')
                {
                  	interactionInLine();
                } 		
		else if (metric === 'totalViewedTime')
		{
			totalViewedTimeInLine();
		}
		else if (metric === 'reach')
		{
			reachInLine();
		}
		else if (metric === 'interactionRate')
		{
			interactionRateInLine();
		}
		else if (metric === 'engagements')
		{
			post_engagementInLine();
		}
		else if (metric === 'reactions')
		{
			post_reactionInLine();
		}
		else if (metric === 'shares')
		{
			post_sharesInLine();
		}
		else if (metric === 'comments')
		{
			post_commentsInLine();
		}
		else
		{
			ctrInLine();
		}

	}
        //$('#submitFilter').removeClass('disabledClass');
  	
}

function impressionInLine()
{
	var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
	var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");
	var target = $('#productSel').val();
        var jsonObj = {
		siteId : $('#siteId').val(),
		target : target,
		from : startDate,
		to : endDate,
		}
	var dateArray = new Array();
        var impression = new Array();
	var dataArray = new Array();
	$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"impressionForLine",
		data :jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
		     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					dateArray.push(moment.utc(objData["date"]).format('DD-MMM-YYYY'));
					impression.push(objData["impressions"]);
                                        
				}
				drawLineGraph(impression,dateArray,'Impression');	
				//$('#submitFilter').removeClass('disabledClass');
                                $('#submitFilter').prop("disabled",false);
                                $('#submitFilter').children().removeClass("fa fa-circle-o-notch fa-spin");
								$('#submitFilter').children().addClass("fa fa-filter");		
	
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		 console.log('Error : ' + responseData)
		}

	    });

	
}

function clicksInLine()
{
	var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
	var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");
	var target = $('#productSel').val();
        var jsonObj = {
		siteId : $('#siteId').val(),
		target : target,
		from : startDate,
		to : endDate,
		}
	var dateArray = new Array();
        var impression = new Array();
	var dataArray = new Array();
	$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"clicksForLine",
		data :jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
		     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					dateArray.push(moment.utc(objData["date"]).format('DD-MMM'));
					impression.push(objData["clicks"]);
                                        
				}
			   drawLineGraph(impression,dateArray,'Clicks');	
                           $('#submitFilter').prop("disabled",false);
                           $('#submitFilter').children().removeClass("fa fa-circle-o-notch fa-spin");
						   $('#submitFilter').children().addClass("fa fa-filter");		
	
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		 console.log('Error : ' + responseData)
		}

	    });

		

}


function interactionInLine()
{
	var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
	var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");
	var target = $('#productSel').val();
        var jsonObj = {
		siteId : $('#siteId').val(),
		target : target,
		from : startDate,
		to : endDate,
		}
	var dateArray = new Array();
        var impression = new Array();
	var dataArray = new Array();
	$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"interactionsForLine",
		data :jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
		     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					dateArray.push(moment.utc(objData["date"]).format('DD-MMM'));
					impression.push(objData["totalinteractions"]);
                                        
				}
				drawLineGraph(impression,dateArray,'Interaction');			
				$('#submitFilter').prop("disabled",false);
				$('#submitFilter').children().removeClass("fa fa-circle-o-notch fa-spin");
				$('#submitFilter').children().addClass("fa fa-filter");
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		 console.log('Error : ' + responseData)
		}

	    });

		

}

function totalViewedTimeInLine()
{
	var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
	var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");
	var target = $('#productSel').val();
        var jsonObj = {
		siteId : $('#siteId').val(),
		target : target,
		from : startDate,
		to : endDate,
		}
	var dateArray = new Array();
        var impression = new Array();
	var dataArray = new Array();
	$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"totalViewedTime",
		data :jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
		     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					dateArray.push(moment.utc(objData["eventdate"]).format('DD-MMM'));
					impression.push(objData["totalactiveviewavgviewabletime"]);
                                        
				}
				drawLineGraph(impression,dateArray,'Total Viewed Time');	
				//$('#submitFilter').removeClass('disabledClass');
                                $('#submitFilter').prop("disabled",false);
                                $('#submitFilter').children().removeClass("fa fa-circle-o-notch fa-spin");
								$('#submitFilter').children().addClass("fa fa-filter");		
	
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		 console.log('Error : ' + responseData)
		}

	    });

	
}

function reachInLine()
{
	var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
	var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");
	var target = $('#productSel').val();
        var jsonObj = {
		siteId : $('#siteId').val(),
		target : target,
		from : startDate,
		to : endDate,
		}
	var dateArray = new Array();
        var impression = new Array();
	var dataArray = new Array();
	$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"reach",
		data :jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
		     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					dateArray.push(moment.utc(objData["eventdate"]).format('DD-MMM'));
					impression.push(objData["reach"]);
                                        
				}
				drawLineGraph(impression,dateArray,'Reach');	
				//$('#submitFilter').removeClass('disabledClass');
                                $('#submitFilter').prop("disabled",false);		
                                $('#submitFilter').children().removeClass("fa fa-circle-o-notch fa-spin");
			$('#submitFilter').children().addClass("fa fa-filter");
	
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		 console.log('Error : ' + responseData)
		}

	    });

	
}

function interactionRateInLine()
{
	var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
	var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");
	var target = $('#productSel').val();
        var jsonObj = {
		siteId : $('#siteId').val(),
		target : target,
		from : startDate,
		to : endDate,
		}
	var dateArray = new Array();
        var impression = new Array();
	var dataArray = new Array();
	$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"interactionRate",
		data :jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
		     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					dateArray.push(moment.utc(objData["eventdate"]).format('DD-MMM'));
					impression.push(objData["interactionrate"]);
                                        
				}
				drawLineGraph(impression,dateArray,'Interaction Rate');	
				//$('#submitFilter').removeClass('disabledClass');
                                $('#submitFilter').prop("disabled",false);	
                                $('#submitFilter').children().removeClass("fa fa-circle-o-notch fa-spin");
			$('#submitFilter').children().addClass("fa fa-filter");	
	
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		 console.log('Error : ' + responseData)
		}

	    });

	
}

function post_engagementInLine()
{
	var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
	var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");
	var target = $('#productSel').val();
        var jsonObj = {
		siteId : $('#siteId').val(),
		target : target,
		from : startDate,
		to : endDate,
		}
	var dateArray = new Array();
        var impression = new Array();
	var dataArray = new Array();
	$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"post_engagement",
		data :jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
		     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					dateArray.push(moment.utc(objData["eventdate"]).format('DD-MMM'));
					impression.push(objData["post_engagement"]);
                                        
				}
				drawLineGraph(impression,dateArray,'Post Engagement');	
				//$('#submitFilter').removeClass('disabledClass');
                                $('#submitFilter').prop("disabled",false);
                                $('#submitFilter').children().removeClass("fa fa-circle-o-notch fa-spin");
			$('#submitFilter').children().addClass("fa fa-filter");		
	
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		 console.log('Error : ' + responseData)
		}

	    });

	
}

function post_reactionInLine()
{
	var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
	var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");
	var target = $('#productSel').val();
        var jsonObj = {
		siteId : $('#siteId').val(),
		target : target,
		from : startDate,
		to : endDate,
		}
	var dateArray = new Array();
        var impression = new Array();
	var dataArray = new Array();
	$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"post_reaction",
		data :jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
		     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					dateArray.push(moment.utc(objData["eventdate"]).format('DD-MMM'));
					impression.push(objData["post_reaction"]);
                                        
				}
				drawLineGraph(impression,dateArray,'Post Reaction');	
				//$('#submitFilter').removeClass('disabledClass');
                                $('#submitFilter').prop("disabled",false);
                                $('#submitFilter').children().removeClass("fa fa-circle-o-notch fa-spin");
			$('#submitFilter').children().addClass("fa fa-filter");		
	
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		 console.log('Error : ' + responseData)
		}

	    });

	
}

function post_sharesInLine()
{
	var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
	var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");
	var target = $('#productSel').val();
        var jsonObj = {
		siteId : $('#siteId').val(),
		target : target,
		from : startDate,
		to : endDate,
		}
	var dateArray = new Array();
        var impression = new Array();
	var dataArray = new Array();
	$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"post_shares",
		data :jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
		     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					dateArray.push(moment.utc(objData["eventdate"]).format('DD-MMM'));
					impression.push(objData["post_shares"]);
                                        
				}
				drawLineGraph(impression,dateArray,'Post Shares');	
				//$('#submitFilter').removeClass('disabledClass');
                                $('#submitFilter').prop("disabled",false);
                                $('#submitFilter').children().removeClass("fa fa-circle-o-notch fa-spin");
			$('#submitFilter').children().addClass("fa fa-filter");		
	
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		 console.log('Error : ' + responseData)
		}

	    });

	
}

function post_commentsInLine()
{
	var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
	var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");
	var target = $('#productSel').val();
        var jsonObj = {
		siteId : $('#siteId').val(),
		target : target,
		from : startDate,
		to : endDate,
		}
	var dateArray = new Array();
        var impression = new Array();
	var dataArray = new Array();
	$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"post_comments",
		data :jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
		     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					dateArray.push(moment.utc(objData["eventdate"]).format('DD-MMM'));
					impression.push(objData["post_comments"]);
                                        
				}
				drawLineGraph(impression,dateArray,'Post Comments');	
				//$('#submitFilter').removeClass('disabledClass');
                                $('#submitFilter').prop("disabled",false);
                                $('#submitFilter').children().removeClass("fa fa-circle-o-notch fa-spin");
			$('#submitFilter').children().addClass("fa fa-filter");		
	
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		 console.log('Error : ' + responseData)
		}

	    });

	
}

function ctrInLine()
{
	var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
	var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");
	var target = $('#productSel').val();
        var jsonObj = {
		siteId : $('#siteId').val(),
		target : target,
		from : startDate,
		to : endDate,
		}
	var dateArray = new Array();
        var impression = new Array();
	var dataArray = new Array();
	$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"ctr",
		data :jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
			
		     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					dateArray.push(moment.utc(objData["eventdate"]).format('DD-MMM'));
					impression.push(objData["avg"]);
                                        
				}
				drawLineGraph(impression,dateArray,'CTR');	
				//$('#submitFilter').removeClass('disabledClass');
                                $('#submitFilter').prop("disabled",false);
                                $('#submitFilter').children().removeClass("fa fa-circle-o-notch fa-spin");
			$('#submitFilter').children().addClass("fa fa-filter");		
	
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		 console.log('Error : ' + responseData)
		}

	    });

	
}

function showCPMvsCPD()
{
	var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
	var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");
        var metric = $('#metricSelected').val();
	var target = $('#productSel').val();
        var cpmjsonObj = {
		siteId : $('#siteId').val(),
		target : target,	
		type : 'CPM',
                metric : metric,
		from : startDate,
		to : endDate,
		}
	var cpdjsonObj = {
		siteId : $('#siteId').val(),
		target : target,
                metric : metric,
                type : 'CPD', 
		from : startDate,
		to : endDate,
		}

        var cpmDate = new Array();
	var cpmcost = new Array();
        var cpdDate = new Array();
	var cpdcost = new Array();
	$.ajax({
		type: "POST",
		async :false,
		url:apiUrl+"getCpmCpd",
		data : cpmjsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
		
		     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					cpmDate.push(moment.utc(objData["date"]).format('DD-MMM-YYYY'));
					cpmcost.push(objData[metric]);	
										
				}			
	
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		 console.log('Error : ' + responseData)
		}

	    });

	$.ajax({
		type: "POST",
		async :false,
		url:apiUrl+"getCpmCpd",
		data : cpdjsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
		     var result = JSON.parse(responseData);
		      var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
					cpdDate.push(moment.utc(objData["date"]).format('DD-MMM'));
					cpdcost.push(objData[metric]);	
										
				}	
			
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		 console.log('Error : ' + responseData)
		}

	    });
		
		showBarGraph(cpmDate,cpmcost,cpdDate,cpdcost,'CPM','CPD');
   		$('#submitFilter').prop("disabled",false);
   		$('#submitFilter').children().removeClass("fa fa-circle-o-notch fa-spin");
		$('#submitFilter').children().addClass("fa fa-filter");
			
}

function showBarGraph(label1,data1,label2,data2,title1,title2)
{

	$('#bargraphDiv').html("");
        $('#bargraphDiv').append('<canvas  class="ct-bar" id="groupedBar" name="groupedBar" width="100%" height="50%"></canvas>');	
	var canvasHTMLOpen=document.getElementById("groupedBar");
	var ctx = document.getElementById("groupedBar").getContext("2d");
	ctx.clearRect(0,0,canvasHTMLOpen.width,canvasHTMLOpen.height);
	ctx.beginPath();
        if((data1.length > 0)&&(data2.length > 0))
        {
		new Chart(document.getElementById("groupedBar"), {
					    type: 'bar',
					    data: {
					      labels: label1,
					      datasets: [
						{
						  label: title1,
						  backgroundColor: "#206020",
						  data: data1
						}, {
						  label: title2,
						  backgroundColor: "#00b300",
						  data: data2
						}
					      ]
					    },
					    options: {
					      title: {
						display: true,
						text: '',
					       },
					       scales: {
							xAxes: [{
							    barThickness : 10,
							    barPercentage: 0.75,
								categoryPercentage: 0.5,
							    gridLines: {
								    display:false
								},
						            ticks: {
									autoSkip: true,
									maxTicksLimit: 30
													
								    },
								type: 'time',
								time: {
								unit: 'day',
								displayFormats: {
								   'day': 'DD-MMM'
								}},
								    
		
							    	
							}],
							yAxes: [{
								gridLines: {
								    display:false
								}   
							    }]
						    }
					    }
					});
		ctx.closePath();
        }
        else
	{
		 swal({title: '', text: "No Data Found", type: '', showCancelButton: false, confirmButtonText: 'Ok', confirmButtonColor: "#1ab394", closeOnConfirm: true, customClass: 'swal-wide'}, function ()
                    {

                    });
                 return;
	}

	$('#barchart').removeClass('displayClass');
        $('#lineChart').addClass('displayClass');
}


function drawLineGraph(dataSet,label,title)
{
	
	$('#lineChart').html("");
        $('#lineChart').append('<canvas  class="ct-bar" id="lineGraph" name="lineGraph" width="100%" height="50%"></canvas>');	
	var canvasHTMLOpen=document.getElementById("lineGraph");
	var ctx = document.getElementById("lineGraph").getContext("2d");
	ctx.clearRect(0,0,canvasHTMLOpen.width,canvasHTMLOpen.height);
	ctx.beginPath();
        if(dataSet.length > 0)
        {
		new Chart(document.getElementById("lineGraph"), {
					    type: 'line',
					    data: {
					      labels: label,
					      datasets: [
						{
						  label: title,
						   data: dataSet,
						   responsive: true,
		                      		   maintainAspectRatio: true,
						   fill : false,
						   borderColor : '#a9e241'				
						}
					      ]
					    },
					    options: {
					      title: {
						display: true,
						text: '',
					       },
						scales: {
						    xAxes: [{
								gridLines: {
								    display:false
								},
								ticks: {
									autoSkip: true,
									maxTicksLimit: 30
													
								    },
								type: 'time',
								time: {
								unit: 'day',
								displayFormats: {
								   'day': 'DD-MMM'
								}},
								    

								
							    }],
						    yAxes: [{
								gridLines: {
								    display:false
								}   
							    }]
						    }
					       
					    }
					});
		ctx.closePath();
        }
	else
	{
		 swal({title: '', text: "No Data Found", type: '', showCancelButton: false, confirmButtonText: 'Ok', confirmButtonColor: "#1ab394", closeOnConfirm: true}, function ()
                    {

                    });
                  return;
	}
	$('#barchart').addClass('displayClass');
        $('#lineChart').removeClass('displayClass');

}
