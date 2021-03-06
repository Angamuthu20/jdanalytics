function showTwoLineGraph(data1,label1,data2,label2,title1,title2)
{

var dt1 = new Array();
var dt2 = new Array();
var concatlabel = new Array();
concatlabel = label1.concat(label2);
 var finalLabel = [];
    $.each(concatlabel, function(i, el){
        if($.inArray(el, finalLabel) === -1) finalLabel.push(el);
    });
finalLabel.sort();
var x=0;
for(var i=0; i<finalLabel.length; i++)
{

	if(label1.indexOf(finalLabel[i])==-1)
           {
		dt1.push(""); 
           }
	else
	   {
		dt1.push(data1[x]);
		x++;
	   }
        
		
}

var k=0;
for(var j=0; j<finalLabel.length; j++)
{

    if(label2.indexOf(finalLabel[j])==-1)
           {
		dt2.push(""); 
           }
	else
	   {
		dt2.push(data2[k]);
                k++;
	   }
}



$('#bargraphDiv').html("");
$('#bargraphDiv').append('<canvas  class="ct-bar" id="groupedBar" name="groupedBar" width="100%" height="50%"></canvas>');	
var canvasHTMLOpen=document.getElementById("groupedBar");
var ctx = document.getElementById("groupedBar").getContext("2d");
ctx.clearRect(0,0,canvasHTMLOpen.width,canvasHTMLOpen.height);
ctx.beginPath();
if((data1.length>1) || (data2.length>1))
{
	new Chart(document.getElementById("groupedBar"), {
				    type: 'line',
				    data: {
				      labels: finalLabel,
				      datasets: [
					{
					  label: title1,
					  //backgroundColor: "#206020",
					  data: dt1,
					  responsive: true,
	                      		   maintainAspectRatio: true,
					   fill : false,
					   borderColor : '#206020'	
					},
					{
					  label: title2,
					  //backgroundColor: "red",
					  data: dt2,
					  responsive: true,
	                      		  maintainAspectRatio: true,
					  fill : false,
					  borderColor : 'red'	
					},
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
	 swal({title: '', text: "No Data Found", type: '', showCancelButton: false, confirmButtonText: 'Ok', confirmButtonColor: "#1ab394", closeOnConfirm: true, customClass: 'swal-wide'}, function ()
            {

            });
         return;
}
$('#barchart').removeClass('displayClass');
$('#lineChart').addClass('displayClass');
        
}

function showThreeLineGraph(data1,label1,data2,label2,data3,label3,title1,title2,title3)
{

var dt1 = new Array();
var dt2 = new Array();
var dt3 = new Array();
var concatlabel = new Array();
var templabel = new Array();
templabel = label1.concat(label2);
concatlabel = templabel.concat(label3);
 var finalLabel = [];
    $.each(concatlabel, function(i, el){
        if($.inArray(el, finalLabel) === -1) finalLabel.push(el);
    });
finalLabel.sort();
var x=0;
for(var i=0; i<finalLabel.length; i++)
{

	if(label1.indexOf(finalLabel[i])==-1)
           {
		dt1.push(""); 
           }
	else
	   {
		dt1.push(data1[x]);
		x++;
	   }
        
		
}

var k=0;
for(var j=0; j<finalLabel.length; j++)
{

    if(label2.indexOf(finalLabel[j])==-1)
           {
		dt2.push(""); 
           }
	else
	   {
		dt2.push(data2[k]);
                k++;
	   }
}

var y=0;
for(var j=0; j<finalLabel.length; j++)
{

    if(label3.indexOf(finalLabel[j])==-1)
           {
		dt3.push(""); 
           }
	else
	   {
		dt3.push(data3[y]);
                y++;
	   }
}

$('#bargraphDiv').html("");
$('#bargraphDiv').append('<canvas  class="ct-bar" id="groupedBar" name="groupedBar" width="100%" height="50%"></canvas>');	
var canvasHTMLOpen=document.getElementById("groupedBar");
var ctx = document.getElementById("groupedBar").getContext("2d");
ctx.clearRect(0,0,canvasHTMLOpen.width,canvasHTMLOpen.height);
ctx.beginPath();
if((data1.length>1) || (data2.length>1) || (data3.length))
{
	new Chart(document.getElementById("groupedBar"), {
				    type: 'line',
				    data: {
				      labels: finalLabel,
				      datasets: [
					{
					  label: title1,
					  //backgroundColor: "#206020",
					  data: dt1,
					  responsive: true,
	                      		   maintainAspectRatio: true,
					   fill : false,
					   borderColor : '#206020'	
					},
					{
					  label: title2,
					  //backgroundColor: "red",
					  data: dt2,
					  responsive: true,
	                      		  maintainAspectRatio: true,
					  fill : false,
					  borderColor : 'red'	
					},
					{
					  label: title3,
					  //backgroundColor: "red",
					  data: dt3,
					  responsive: true,
	                      		  maintainAspectRatio: true,
					  fill : false,
					  borderColor : 'blue'	
					},
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
	 swal({title: '', text: "No Data Found", type: '', showCancelButton: false, confirmButtonText: 'Ok', confirmButtonColor: "#1ab394", closeOnConfirm: true, customClass: 'swal-wide'}, function ()
            {

            });
         return;
}
$('#barchart').removeClass('displayClass');
$('#lineChart').addClass('displayClass');
        
}
function showOneLineGraph(data1,label1,title1)
{

	$('#bargraphDiv').html("");
        $('#bargraphDiv').append('<canvas  class="ct-bar" id="groupedBar" name="groupedBar" width="100%" height="50%"></canvas>');	
	var canvasHTMLOpen=document.getElementById("groupedBar");
	var ctx = document.getElementById("groupedBar").getContext("2d");
	ctx.clearRect(0,0,canvasHTMLOpen.width,canvasHTMLOpen.height);
	ctx.beginPath();
        if(data1.length>1)
        {
		new Chart(document.getElementById("groupedBar"), {
					    type: 'line',
					    data: {
					      labels: label1,
					      datasets: [
						{
						  label: title1,
						  backgroundColor: "#206020",
						  data: data1,
						  responsive: true,
			              		  maintainAspectRatio: true,
						  fill : false,
						  borderColor : '#206020'	
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
		 swal({title: '', text: "No Data Found", type: '', showCancelButton: false, confirmButtonText: 'Ok', confirmButtonColor: "#1ab394", closeOnConfirm: true, customClass: 'swal-wide'}, function ()
                    {

                    });
                 return;
	}
	$('#barchart').removeClass('displayClass');
        $('#lineChart').addClass('displayClass');
        
}



function advertiserGraph()
{

   var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
   var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");
   var metric = $('#selMetric').val();
   var target = $('#productSel').val();
   var jsonObj = {
      target : target,
      siteId : $('#siteId').val(),
      metric : metric,
      from : startDate,
      to : endDate
   }
  
   var dataArray = new Array();
   var labelArray = new Array();
 
   $.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"listAdvertisersByDate",
		data :jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
                     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
                                        dataArray.push(objData[metric]); 
                                        labelArray.push(moment.utc(objData["date"]).format('DD-MMM'));
                                        					

				}
	              showOneLineGraph(dataArray,labelArray,'By Advertiser');					
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

function statusGraph()
{
   var target = $('#productSel').val();
   var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
   var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");
    var metric = $('#selMetric').val();
   var jsonObj = {
      target : target,
      siteId : $('#siteId').val(),
      metric : metric,
      from : startDate,
      to : endDate   
   }

   var dataArray = new Array();
   var labelArray = new Array();

   $.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"listStatusByDate",
		data :jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
                     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
                                        dataArray.push(objData[metric]); 
                                        labelArray.push(moment.utc(objData["date"]).format('DD-MMM'));
					
				}
                       
	               showOneLineGraph(dataArray,labelArray,'By Status')	;						
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

function lineItemGraph()
{
  var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
  var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");
   var metric = $('#selMetric').val();
  var jsonObj = {
	 siteId : $('#siteId').val(),
	 metric :metric,
         from : startDate,
         to : endDate 
	}
   var dataArray = new Array();
   var labelArray = new Array();
   $.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"listLineitemTypeByDate",
		data :jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
   		     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
                                        dataArray.push(objData[metric]); 
                                        labelArray.push(moment.utc(objData["date"]).format('DD-MMM'));
					
				}
			showOneLineGraph(dataArray,labelArray,'By LineItemType')	;	
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

function websiteGraph()
{
  
  var target = $('#productSel').val();
   var metric = $('#selMetric').val();
  var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
  var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");
      var jsonObj = {
	      target : target,
	      siteId : $('#siteId').val(),
	      metric : metric,
	      from : startDate,
              to : endDate
	   }
   
   var dataArray = new Array();
   var labelArray = new Array();
   $.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"listWebsitesByDate",
		data :jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
                     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
                                        dataArray.push(objData[metric]); 
                                        labelArray.push(moment.utc(objData["date"]).format('DD-MMM'));
					
				}
			showOneLineGraph(dataArray,labelArray,'By Website');				
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

function creativeTypeGraph()
{

  var startDate = $('#reportrange').data('daterangepicker').startDate.format("YYYY-MM-DD");
  var endDate = $('#reportrange').data('daterangepicker').endDate.format("YYYY-MM-DD");
  var metric = $('#selMetric').val();
  var jsonObj = {
 	siteId : $('#siteId').val(),
        metric : metric,
        from : startDate,
        to : endDate
   }
 
   var dataArray = new Array();
   var labelArray = new Array();

   $.ajax({
		type: "POST",
		async :true,
		url:apiUrl + "listCreativeTypeByDate",
		data :jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
   		     var result = JSON.parse(responseData);
		     var dt = result["rows"]	
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];
                                        dataArray.push(objData[metric]); 
                                        labelArray.push(moment.utc(objData["date"]).format('DD-MMM'));
					
				}
	              showOneLineGraph(dataArray,labelArray,'By CreativeType');  	
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

function graphByAdvertiser(jsonObj,metric,data_Array)
{
  
   if (data_Array.length > 3)
   {
	swal({title: '', text: 'Please select only three values', type: '', showCancelButton: false, confirmButtonColor: "#1ab394", confirmButtonText: 'Ok', closeOnConfirm: true, customClass: 'swal-wide'}, function ()
						{
						   

						});
	return;
   }
   var dataArray = new Array();
   var labelArray = new Array();
   var dataArray1 = new Array();
   var labelArray1 = new Array();
   var dataArray2 = new Array();
   var labelArray2 = new Array();
   if(data_Array.length === 1)
   {

	   jsonObj.dataArray = 	data_Array;
	   $.ajax({
			type: "POST",
			async :true,
			url:apiUrl+"selectByAdvertiser",
			data :jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
		             var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray.push(objData[metric]); 
		                                labelArray.push(moment.utc(objData["date"]).format('DD-MMM'));
		                                					

					}
			      showOneLineGraph(dataArray,labelArray,data_Array[0]);	
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
   else if (data_Array.length === 2)	
   {

        var jsonObj1 = JSON.parse(JSON.stringify(jsonObj));
	jsonObj.dataArray = data_Array[0];
	jsonObj1.dataArray = data_Array[1];
        $.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"selectByAdvertiser",
			data :jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
		             var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray.push(objData[metric]); 
		                                labelArray.push(moment.utc(objData["date"]).format('DD-MMM'));
		                                					

					}
			      //showInBarGraph(dataArray,labelArray,'By Advertiser');	
		              //$('#submitFilter').prop("disabled",false);				
	
			},
			error: function (responseData, textStatus, errorThrown) {
			  console.log(responseData)	
			 console.log('Error : ' + responseData)
			}

		    });
	$.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"selectByAdvertiser",
			data :jsonObj1,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
		             var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray1.push(objData[metric]); 
		                                labelArray1.push(moment.utc(objData["date"]).format('DD-MMM'));
		                                					

					}
			      showTwoLineGraph(dataArray,labelArray,dataArray1,labelArray1,data_Array[0],data_Array[1]);	
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
	else if (data_Array.length === 3)	
   	{

        var jsonObj1 = JSON.parse(JSON.stringify(jsonObj));
        var jsonObj2 = JSON.parse(JSON.stringify(jsonObj));
	jsonObj.dataArray = data_Array[0];
	jsonObj1.dataArray = data_Array[1];
	jsonObj2.dataArray = data_Array[2];
        $.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"selectByAdvertiser",
			data :jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
		             var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray.push(objData[metric]); 
		                                labelArray.push(moment.utc(objData["date"]).format('DD-MMM'));
		                                					

					}
			      //showInBarGraph(dataArray,labelArray,'By Advertiser');	
		              //$('#submitFilter').prop("disabled",false);				
	
			},
			error: function (responseData, textStatus, errorThrown) {
			  console.log(responseData)	
			 console.log('Error : ' + responseData)
			}

		    });
	 $.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"selectByAdvertiser",
			data :jsonObj1,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
		             var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray1.push(objData[metric]); 
		                                labelArray1.push(moment.utc(objData["date"]).format('DD-MMM'));
		                                					

					}
			      //showInBarGraph(dataArray,labelArray,'By Advertiser');	
		              //$('#submitFilter').prop("disabled",false);				
	
			},
			error: function (responseData, textStatus, errorThrown) {
			  console.log(responseData)	
			 console.log('Error : ' + responseData)
			}

		    });
	$.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"selectByAdvertiser",
			data :jsonObj2,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
		             var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray2.push(objData[metric]); 
		                                labelArray2.push(moment.utc(objData["date"]).format('DD-MMM'));
		                                					

					}
			      showThreeLineGraph(dataArray,labelArray,dataArray1,labelArray1,dataArray2,labelArray2,data_Array[0],data_Array[1],data_Array[2]);	
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
}

function graphBystatus(jsonObj,metric,data_Array)
{
   
    if (data_Array.length > 3)
   {
	swal({title: '', text: 'Please select only three values', type: '', showCancelButton: false, confirmButtonColor: "#1ab394", confirmButtonText: 'Ok', closeOnConfirm: true, customClass: 'swal-wide'}, function ()
						{
						   

						});
	return;
   }	
   var dataArray = new Array();
   var labelArray = new Array();
   var dataArray1 = new Array();
   var labelArray1 = new Array();
   var dataArray2 = new Array();
   var labelArray2 = new Array();
  if(data_Array.length === 1)
   {

	   jsonObj.dataArray = 	data_Array;
	   $.ajax({
			type: "POST",
			async :true,
			url:apiUrl+"selectByStatus",
			data :jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
		             var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray.push(objData[metric]); 
		                                labelArray.push(moment.utc(objData["date"]).format('DD-MMM'));
					
					}
			       showOneLineGraph(dataArray,labelArray,data_Array[0])	;	
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
     else if(data_Array.length === 2)
	{

	   var jsonObj1 = JSON.parse(JSON.stringify(jsonObj));
	   jsonObj.dataArray = data_Array[0];
	   jsonObj1.dataArray = data_Array[1];
	   $.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"selectByStatus",
			data :jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
		             var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray.push(objData[metric]); 
		                                labelArray.push(moment.utc(objData["date"]).format('DD-MMM'));
					
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
				url:apiUrl+"selectByStatus",
				data :jsonObj1,
				cache: false,
				crossDomain: true,
				success: function (responseData, textStatus, jqXHR) {
				     var result = JSON.parse(responseData);
				     var dt = result["rows"]	
					for (var i=0 ; i<dt.length; i ++)
						{
							var objData = dt[i];
				                        dataArray1.push(objData[metric]); 
				                        labelArray1.push(moment.utc(objData["date"]).format('DD-MMM'));
					
						}
				       showTwoLineGraph(dataArray,labelArray,dataArray1,labelArray1,data_Array[0],data_Array[1]);	
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
     else if(data_Array.length === 3)
	{

	   var jsonObj1 = JSON.parse(JSON.stringify(jsonObj));
	   var jsonObj2 = JSON.parse(JSON.stringify(jsonObj));
	   jsonObj.dataArray = data_Array[0];
	   jsonObj1.dataArray = data_Array[1];
	   jsonObj2.dataArray = data_Array[2];	
	   $.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"selectByStatus",
			data :jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
		             var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray.push(objData[metric]); 
		                                labelArray.push(moment.utc(objData["date"]).format('DD-MMM'));
					
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
			url:apiUrl+"selectByStatus",
			data :jsonObj1,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
		             var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray1.push(objData[metric]); 
		                                labelArray1.push(moment.utc(objData["date"]).format('DD-MMM'));
					
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
				url:apiUrl+"selectByStatus",
				data :jsonObj2,
				cache: false,
				crossDomain: true,
				success: function (responseData, textStatus, jqXHR) {
				     var result = JSON.parse(responseData);
				     var dt = result["rows"]	
					for (var i=0 ; i<dt.length; i ++)
						{
							var objData = dt[i];
				                        dataArray1.push(objData[metric]); 
				                        labelArray1.push(moment.utc(objData["date"]).format('DD-MMM'));
					
						}
				       showThreeLineGraph(dataArray,labelArray,dataArray1,labelArray1,dataArray2,labelArray2,data_Array[0],data_Array[1],data_Array[2]);	
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

}

function graphBylineItem(jsonObj,metric,data_Array)
{
 
    if (data_Array.length > 3)
   {
	swal({title: '', text: 'Please select only three values', type: '', showCancelButton: false, confirmButtonColor: "#1ab394", confirmButtonText: 'Ok', closeOnConfirm: true, customClass: 'swal-wide'}, function ()
						{
						   

						});
	return;
   }
   var dataArray = new Array();
   var labelArray = new Array();
   var dataArray1 = new Array();
   var labelArray1 = new Array();
   var dataArray2 = new Array();
   var labelArray2 = new Array();
   if(data_Array.length === 1)
   {

	   jsonObj.dataArray = 	data_Array;
	   $.ajax({
			type: "POST",
			async :true,
			url:apiUrl+"selectByLineitemType",
			data :jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
	   		     var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray.push(objData[metric]); 
		                                labelArray.push(moment.utc(objData["date"]).format('DD-MMM'));
					
					}
				showOneLineGraph(dataArray,labelArray,data_Array[0])	;
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
    else if(data_Array.length === 2)
	{

	   var jsonObj1 = JSON.parse(JSON.stringify(jsonObj));
	   jsonObj.dataArray = data_Array[0];
	   jsonObj1.dataArray = data_Array[1];
	   $.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"selectByLineitemType",
			data :jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
	   		     var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray.push(objData[metric]); 
		                                labelArray.push(moment.utc(objData["date"]).format('DD-MMM'));
					
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
				url:apiUrl+"selectByLineitemType",
				data :jsonObj1,
				cache: false,
				crossDomain: true,
				success: function (responseData, textStatus, jqXHR) {
		   		     var result = JSON.parse(responseData);
				     var dt = result["rows"]	
					for (var i=0 ; i<dt.length; i ++)
						{
							var objData = dt[i];
				                        dataArray1.push(objData[metric]); 
				                        labelArray1.push(moment.utc(objData["date"]).format('DD-MMM'));
					
						}
					showTwoLineGraph(dataArray,labelArray,dataArray1,labelArray1,data_Array[0],data_Array[1]);
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
	else if(data_Array.length === 3)
	{

	   var jsonObj1 = JSON.parse(JSON.stringify(jsonObj));
           var jsonObj2 = JSON.parse(JSON.stringify(jsonObj));
	   jsonObj.dataArray = data_Array[0];
	   jsonObj1.dataArray = data_Array[1];
	   jsonObj2.dataArray = data_Array[2];
	   $.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"selectByLineitemType",
			data :jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
	   		     var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray.push(objData[metric]); 
		                                labelArray.push(moment.utc(objData["date"]).format('DD-MMM'));
					
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
			url:apiUrl+"selectByLineitemType",
			data :jsonObj1,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
	   		     var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray1.push(objData[metric]); 
		                                labelArray1.push(moment.utc(objData["date"]).format('DD-MMM'));
					
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
				url:apiUrl+"selectByLineitemType",
				data :jsonObj2,
				cache: false,
				crossDomain: true,
				success: function (responseData, textStatus, jqXHR) {
		   		     var result = JSON.parse(responseData);
				     var dt = result["rows"]	
					for (var i=0 ; i<dt.length; i ++)
						{
							var objData = dt[i];
				                        dataArray2.push(objData[metric]); 
				                        labelArray2.push(moment.utc(objData["date"]).format('DD-MMM'));
					
						}
					showThreeLineGraph(dataArray,labelArray,dataArray1,labelArray1,dataArray2,labelArray2,data_Array[0],data_Array[1],data_Array[2]);
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

function graphBywebsite(jsonObj,metric,data_Array)
{
  
    if (data_Array.length > 3)
   {
	swal({title: '', text: 'Please select only three values', type: '', showCancelButton: false, confirmButtonColor: "#1ab394", confirmButtonText: 'Ok', closeOnConfirm: true, customClass: 'swal-wide'}, function ()
						{
						   

						});
	return;
   }
   var dataArray = new Array();
   var labelArray = new Array();
   var dataArray1 = new Array();
   var labelArray1 = new Array();
   var dataArray2 = new Array();
   var labelArray2 = new Array();
   if(data_Array.length === 1)
   {

	   jsonObj.dataArray = 	data_Array;
	   $.ajax({
			type: "POST",
			async :true,
			url:apiUrl+"selectByWebsite",
			data :jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
		             var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray.push(objData[metric]); 
		                                labelArray.push(moment.utc(objData["date"]).format('DD-MMM'));
					
					}
				showOneLineGraph(dataArray,labelArray,data_Array[0]);	
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
   else if(data_Array.length === 2)
   {
	   var jsonObj1 = JSON.parse(JSON.stringify(jsonObj));
	   jsonObj.dataArray = data_Array[0];
	   jsonObj1.dataArray = data_Array[1];
            $.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"selectByWebsite",
			data :jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
		             var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray.push(objData[metric]); 
		                                labelArray.push(moment.utc(objData["date"]).format('DD-MMM'));
					
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
			url:apiUrl+"selectByWebsite",
			data :jsonObj1,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
		             var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray1.push(objData[metric]); 
		                                labelArray1.push(moment.utc(objData["date"]).format('DD-MMM'));
					
					}
				showTwoLineGraph(dataArray,labelArray,dataArray1,labelArray1,data_Array[0],data_Array[1]);	
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
   else if(data_Array.length === 3)
   {
	   var jsonObj1 = JSON.parse(JSON.stringify(jsonObj));
	   var jsonObj2 = JSON.parse(JSON.stringify(jsonObj));	
	   jsonObj.dataArray = data_Array[0];
	   jsonObj1.dataArray = data_Array[1];
           jsonObj2.dataArray = data_Array[2];
            $.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"selectByWebsite",
			data :jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
		             var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray.push(objData[metric]); 
		                                labelArray.push(moment.utc(objData["date"]).format('DD-MMM'));
					
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
			url:apiUrl+"selectByWebsite",
			data :jsonObj1,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
		             var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray1.push(objData[metric]); 
		                                labelArray1.push(moment.utc(objData["date"]).format('DD-MMM'));
					
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
			url:apiUrl+"selectByWebsite",
			data :jsonObj2,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
		             var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray1.push(objData[metric]); 
		                                labelArray1.push(moment.utc(objData["date"]).format('DD-MMM'));
					
					}
				showThreeLineGraph(dataArray,labelArray,dataArray1,labelArray1,dataArray2,labelArray2,data_Array[0],data_Array[1],data_Array[2]);	
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

}

function graphBycreativeType(jsonObj,metric,data_Array)
{
    if (data_Array.length > 3)
   {
	swal({title: '', text: 'Please select only three values', type: '', showCancelButton: false, confirmButtonColor: "#1ab394", confirmButtonText: 'Ok', closeOnConfirm: true, customClass: 'swal-wide'}, function ()
						{
						   

						});
	return;
   }
   var dataArray = new Array();
   var labelArray = new Array();
   var dataArray1 = new Array();
   var labelArray1 = new Array();
   var dataArray2 = new Array();
   var labelArray2 = new Array();
   if(data_Array.length === 1)
   {

	   jsonObj.dataArray = 	data_Array;
	   $.ajax({
			type: "POST",
			async :true,
			url:apiUrl+"selectByCreativeType",
			data :jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
	   		     var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray.push(objData[metric]); 
		                                labelArray.push(moment.utc(objData["date"]).format('DD-MMM'));
					
					}
			      showOneLineGraph(dataArray,labelArray,data_Array[0])	;  						
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
      else if(data_Array.length === 2)
   {
	   var jsonObj1 = JSON.parse(JSON.stringify(jsonObj));
	   jsonObj.dataArray = data_Array[0];
	   jsonObj1.dataArray = data_Array[1];
	    $.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"selectByCreativeType",
			data :jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
	   		     var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray.push(objData[metric]); 
		                                labelArray.push(moment.utc(objData["date"]).format('DD-MMM'));
					
					}
			    
			},
			error: function (responseData, textStatus, errorThrown) {
			  console.log(responseData)	
			 console.log('Error : ' + responseData)
			}

		    });
		 $.ajax({
			type: "POST",
			async :true,
			url:apiUrl+"selectByCreativeType",
			data :jsonObj1,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
	   		     var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray1.push(objData[metric]); 
		                                labelArray1.push(moment.utc(objData["date"]).format('DD-MMM'));
					
					}
			      showTwoLineGraph(dataArray,labelArray,dataArray1,labelArray1,data_Array[0],data_Array[1])	;  						
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
	 else if(data_Array.length === 3)
   {
	   var jsonObj1 = JSON.parse(JSON.stringify(jsonObj));
           var jsonObj2 = JSON.parse(JSON.stringify(jsonObj));
	   jsonObj.dataArray = data_Array[0];
	   jsonObj1.dataArray = data_Array[1];
	   jsonObj2.dataArray = data_Array[2];
	    $.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"selectByCreativeType",
			data :jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
	   		     var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray.push(objData[metric]); 
		                                labelArray.push(moment.utc(objData["date"]).format('DD-MMM'));
					
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
			url:apiUrl+"selectByCreativeType",
			data :jsonObj1,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
	   		     var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray1.push(objData[metric]); 
		                                labelArray1.push(moment.utc(objData["date"]).format('DD-MMM'));
					
					}
			    
			},
			error: function (responseData, textStatus, errorThrown) {
			  console.log(responseData)	
			 console.log('Error : ' + responseData)
			}

		    });
		 $.ajax({
			type: "POST",
			async :true,
			url:apiUrl+"selectByCreativeType",
			data :jsonObj1,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
	   		     var result = JSON.parse(responseData);
			     var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
		                                dataArray2.push(objData[metric]); 
		                                labelArray2.push(moment.utc(objData["date"]).format('DD-MMM'));
					
					}
			      showThreeLineGraph(dataArray,labelArray,dataArray1,labelArray1,dataArray2,labelArray2,data_Array[0],data_Array[1],data_Array[2])	;  						
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
	}
}

