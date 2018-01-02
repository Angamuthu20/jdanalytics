function getAllRegions1()
	{
		
		var role = $('#role').val();
		$('#jd-regions').append($('<option>', {value: 'ALL REGION', text: 'ALL REGIONS' }));
		$("#jd-regions").select2().val("ALL REGION").trigger('change.select2');
		
		var jsonObj = {
    			siteId :4
    		}
		$('#jd-regions').val("");
		$.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"listAllRegions",
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
			  //console.log(responseData)	
			 console.log('Error : ' + responseData)
			}

		    });
	}	
   
	function getdetails1(jsonObj)
    	{
		
		var table1;
		var finalResult = "";
		var objData = "";
		var count = 0 ;
    		
		table1=$('#regional_report').DataTable({
			paging: true
		});
        	var reportTable = document.getElementById('regional_report_tbody');
		
        	var rowcount =reportTable.rows.length;
		for (var x = rowcount - 1; x >= 0; x--)
		{
		    reportTable.deleteRow(x);
		}

		 if (table1 !== null) {
		           table1.clear();
		           table1.destroy();
		       }

    		$.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"orderReport",
			data : jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
				var result = JSON.parse(responseData);
				var dt = result["rows"]	
				console.log(dt);
				console.log(dt.length);  
					   for (var index in dt)
						{
							var objData = dt[index];
							
					          	var newRow = reportTable.insertRow(count);
					          	
						       var newCell  = newRow.insertCell(0);
					     	newCell.setAttribute("class", "sticky-cell");
					     	newCell.innerHTML =  objData["region"];

					        var newCell  = newRow.insertCell(1);
					        newCell.setAttribute("class", "sticky-cell");
					       // newCell.innerHTML =  objData["urn"];
						   newCell.innerHTML = '<a  href="dashboard/campaign?lineItem='+objData["urn"]+'&lineItemNew='+objData["urn"]+' " id="'+objData["urn"]+'"  name="'+objData["urn"]+'">'+objData["urn"]+'</a>'; 
						   
							var newCell  = newRow.insertCell(2);
							newCell.setAttribute("class", "sticky-cell");
						        newCell.innerHTML =  objData["advertiser"];

						   
							var newCell  = newRow.insertCell(3);

						        newCell.innerHTML =   moment.utc(objData["start_date"]).format('DD-MMM-YYYY');
							var newCell  = newRow.insertCell(4);
						        newCell.innerHTML =   moment.utc(objData["end_date"]).format('DD-MMM-YYYY');
						        var newCell  = newRow.insertCell(5);
						        newCell.innerHTML =   objData["server"];
						
							var newCell  = newRow.insertCell(6);
						        newCell.innerHTML =  parseInt(objData["impressions"]).toLocaleString("en")
							var newCell  = newRow.insertCell(7);
						        newCell.innerHTML =  parseInt(objData["clicks"]).toLocaleString("en");
							var newCell  = newRow.insertCell(8);
						        newCell.innerHTML =  parseFloat(objData["ctr"]).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})+"%"; 
						        var newCell  = newRow.insertCell(9);
						        newCell.innerHTML =  parseFloat(objData["budget"]).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})+"%"; 
						      
						}	
				
			},
			error: function (responseData, textStatus, errorThrown) {
			 // console.log(responseData)	
			 //$('#getNew-btn').children().removeClass("fa fa-circle-o-notch fa-spin");
			  console.log('Error : ' + responseData)
			}

		    });

			//$('#getNew-btn').children().removeClass("fa fa-circle-o-notch fa-spin");
		    responsive_regionalReport();
			
		
    	}
function fetchDataOnFilterSelect(filerCategory)
	{
		//alert(filerCategory);
		var advertiserList=[];
		var statusList=[];
		/*advertiserList.push("a");
		advertiserList.push("b");
		advertiserList.push("c");
		advertiserList.push("d");
		for(index in advertiserList)
		{
			$('#advertiserList').append('<li><label><input type="checkbox" name="'+advertiserList[index]+'" value="'+index+'" id="'+advertiserList[index]+'">'+advertiserList[index]+'</label></li>');
		}*/
		var region = new Array();
		var list = document.getElementById('selectedRegions').children;
		var regList = $("#selectedRegions").children().length;
		var allReg = 'all';
		var startDate = $('#order_report_range').data('daterangepicker').startDate.format("YYYY-MM-DD");
    		var endDate = $('#order_report_range').data('daterangepicker').endDate.format("YYYY-MM-DD");
		for(var i=0 ; i<regList ; i++)
		    {     
		      var divContent = list[i].innerHTML;
		     // var reg = divContent.substring(0, divContent.indexOf('<'));
		       var reg = divContent;
       			var regSel = $(reg).text();
		      if(regSel.trim() === "ALL REGION")
		      {
			var x = document.getElementById('jd-regions');
            	 	for (var i = 1; i < x.length; i++) {
					  	region.push(x[i].value);
				       }
		      }
		      else
		      { 
			region.push(regSel);
		      }
		    }
		    
		    var target = $('#target').val();
		    var jsonObj = {
		       siteId : $('#userSiteId').val(),
		       region : region,
		       target : target,
		       from   : startDate,
		       to     : endDate
		    }
		    if(filerCategory === 'advertiser')	
		    {

	   	    $.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"filterAdvertiser",
			data : jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
				var result = JSON.parse(responseData);
				//alert(responseData);
				//console.log(responseData);
				var dt = result["rows"]	
				//console.log(dt);
				//console.log(dt.length);  
				   for (var index in dt)
					{
						var objData = dt[index];
						advertiserList.push(objData["advertiser"]);
					}	
					//$('#advertiserList').html("");
					$('#listDropdownAdvertiser').html("");
					
					for(index in advertiserList)
					{
						//$('#advertiserList').append('<li><label><input type="checkbox" name="'+advertiserList[index]+'"  id="'+advertiserList[index]+'">'+advertiserList[index]+'</label></li>');
						$('#listDropdownAdvertiser').append('<li><label class="field option block"><input type="checkbox" name="'+advertiserList[index]+'"  id="'+advertiserList[index]+'"><span class="checkbox"></span><span class="checkbox-label">'+advertiserList[index]+'</span></label></li>');
					}
					$('#advertiser-hidden-val').val(advertiserList.length);
				
			},
			error: function (responseData, textStatus, errorThrown) {
			 // console.log(responseData)	
			 console.log('Error : ' + responseData)
			}

		    });
		    }
		    if(filerCategory === 'status')
		    {
			$.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"filterStatus",
			data : jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
				var result = JSON.parse(responseData);
				//alert(responseData);
				//console.log(responseData);
				var dt = result["rows"]	
				console.log(dt);
				//console.log(dt.length);  
				   for (var index in dt)
					{
						var objData = dt[index];
						statusList.push(objData["status"]);
					}	
					//$('#statusList').html("");
					$('#listDropdownStatus').html("");
					
					for(index in statusList)
					{
						 if (statusList[index] === "A")
						{
						   value = "Approved";
						}
						else if (statusList[index] === "C")
						{
						  value = "Completed";	
						}	
						else if (statusList[index] === "D")
						{
						  value = "Cancelled";
						}
						else if (statusList[index] === "E")
						{
						  value = "Amend";
						}
						else if (statusList[index] === "H")
						{
						  value = "Hold";
						}
						else if (statusList[index] === "I")
						{
						  value = "Queued";
						}
						else if (statusList[index] === "L")
						{
						  value = "Delivering";
						}
						else if (statusList[index] === "O")
						{
						  value = "Order Entry";
						}
						else if (statusList[index] === "R")
						{
						  value = "Ready";
						}
						else if (statusList[index] === "S")
						{
						  value = "Submitted";
						}
						else if (statusList[index] === "V")
						{
						  value = "Ad Served";
						}
						else if (statusList[index] === "W")
						{
						  value = "Revised";
						}
						else if (statusList[index] === "X")
						{
						  value = "Deleted";
						}
						else if (statusList[index] === "Z")
						{
						  value = "Archived";
						}
						else if (statusList[index] === "B")
						{
						  value = "Reserved";
						}
						else if (statusList[index] === "Y")
						{
						   value = "Query";
						}
						else if (statusList[index] === "P")
						{
						  value = "Paused";
						}
						else if (statusList[index] === "U")
						{
						  value = "Updated";
						}
						else if (statusList[index] === "K")
						{
				                  value = "Overbooked";
						}
									
						//$('#statusList').append('<li><label><input type="checkbox" name="'+statusList[index]+'"  id="'+statusList[index]+'">'+statusList[index]+'</label></li>');
						$('#listDropdownStatus').append('<li><label class="field option block"><input type="checkbox" name="'+statusList[index]+'"  id="'+statusList[index]+'"><span class="checkbox"></span>'+value+'</label></li>');
					
					}
					$('#status-hidden-val').val(statusList.length);
			},
			error: function (responseData, textStatus, errorThrown) {
			  //console.log(responseData)	
			 console.log('Error : ' + responseData)
			}

		    });
		    }
	}
function fetchAppliedFilters()
{
	var advertiserList=[];
	var statusList=[];
	var isAdvertiserFiltered="false";
	var isStatusFiltered="false";
	$("#selectedFilters").html("");
	
	//alert("here");
	if($("#advertiser").prop('checked') == true)
	{
		$('#listDropdownAdvertiser input:checked').each(function() {
		    advertiserList.push($(this).attr('name'));
		});
		if(advertiserList.length > 0)
		{
			isAdvertiserFiltered="true";
		}
		else
		{
			alert("Please select minimum one option in advertiser");
			return false;
		}
		/*var userAdvertiseLength=$('#advertiser-hidden-val').val();
		if(advertiserList.length === Math.round(userAdvertiseLength))
		{
			alert("Do not select all options in advertiser");
			return false;
		}*/
		//alert(advertiserList);
	}
	if($("#status-filter").prop('checked') == true)
	{
		$('#listDropdownStatus input:checked').each(function() {
		    statusList.push($(this).attr('name'));
		});
		if(statusList.length > 0)
		{
			isStatusFiltered="true";
		}
		else
		{
			alert("Please select minimum one option in status");
			return false;
		}
		/*var userStatusLength=$('#status-hidden-val').val();
		if(statusList.length === Math.round(userStatusLength))
		{
			alert("Do not select all options in status");
			return false;
		}*/
		//alert(statusList);
	}
	var region = new Array();
	var list = document.getElementById('selectedRegions').children;

	var regList = $("#selectedRegions").children().length;

	var allReg = 'all';
	var startDate = $('#order_report_range').data('daterangepicker').startDate.format("YYYY-MM-DD");

	var endDate = $('#order_report_range').data('daterangepicker').endDate.format("YYYY-MM-DD");
	for(var i=0 ; i<regList ; i++)

	    {     

	      var divContent = list[i].innerHTML;

	      //var reg = divContent.substring(0, divContent.indexOf('<'));

	       var reg = divContent;
       var regSel = $(reg).text();

	      if(regSel.trim() === "ALL REGION")

	      {

		var x = document.getElementById('jd-regions');
            	 for (var i = 1; i < x.length; i++) {
					  	region.push(x[i].value);
				       }

	      }

	      else

	      { 

		region.push(regSel);
	      }
	    }
	    
	    var target = $('#target').val();

	if(isAdvertiserFiltered === 'true' && isStatusFiltered === 'true')
	{
	    $("#selectedFilters").append('<p>ADVERTISERS: '+advertiserList+'</p>');
	    $("#selectedFilters").append('<p>STATUS: '+statusList+'</p>');
	    var jsonObj = {
	       siteId : $('#userSiteId').val(),
	       region : region,
	       target : target,
	       from   : startDate,
	       to     : endDate,
	       isAdvertiserFiltered : isAdvertiserFiltered,
	       isStatusFiltered : isStatusFiltered,
	       advertiserList : advertiserList,
	       statusFiltered : statusList
	    }
	}
	else if(isAdvertiserFiltered ==='true' && isStatusFiltered === 'false')
	{
	    $("#selectedFilters").append('<p>ADVERTISERS: '+advertiserList+'<p>');
	    var jsonObj = {
	       siteId : $('#userSiteId').val(),
	       region : region,
	       target : target,
	       from   : startDate,
	       to     : endDate,
	       isAdvertiserFiltered : isAdvertiserFiltered,
	       isStatusFiltered : isStatusFiltered,
	       advertiserList : advertiserList
	    }
	}
	else if(isStatusFiltered === 'true' && isAdvertiserFiltered === 'false')
	{
	    $("#selectedFilters").append('<p>STATUS: '+statusList+'<p>');
	     var jsonObj = {
	       siteId : $('#userSiteId').val(),
	       region : region,
	       target : target,
	       from   : startDate,
	       to     : endDate,
	       isAdvertiserFiltered : isAdvertiserFiltered,
	       isStatusFiltered : isStatusFiltered,
	       statusFiltered : statusList
	    }
	}
	
	//console.log(jsonObj);
	var table1;
		var finalResult = "";
		var objData = "";
		var count = 0 ;
    		
		table1=$('#regional_report').DataTable();
        	var reportTable = document.getElementById('regional_report_tbody');

        	var rowcount =reportTable.rows.length;
		for (var x = rowcount - 1; x >= 0; x--)
		{
		    reportTable.deleteRow(x);
		}

		 if (table1 !== null) {
		           table1.clear();
		           table1.destroy();
		       }

    		$.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"filteredorderReport",
			data : jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
				$('#filterModal').modal('hide');
				var result = JSON.parse(responseData);
				var dt = result["rows"]	
				console.log(dt);
				console.log(dt.length);  
					   for (var index in dt)
						{
							var objData = dt[index];
							//console.log(objData);jdanalytics-stage.2adpro.com
					          	var newRow = reportTable.insertRow(count);
						         var newCell  = newRow.insertCell(0);
					     	newCell.setAttribute("class", "sticky-cell");
					     	newCell.innerHTML =  objData["region"];

					        var newCell  = newRow.insertCell(1);
					        newCell.setAttribute("class", "sticky-cell");
					        newCell.innerHTML =  objData["urn"];
							
							var newCell  = newRow.insertCell(2);
							newCell.setAttribute("class", "sticky-cell");
						        newCell.innerHTML =  objData["advertiser"];

						    var newCell  = newRow.insertCell(3);
						    newCell.setAttribute("class", "sticky-cell");
						        newCell.innerHTML = '<a  href="dashboard/campaign?lineItem='+objData["ordername"]+'&lineItemNew='+objData["lineitemname"]+' " id="'+objData["ordername"]+'"  name="'+objData["ordername"]+'">'+objData["ordername"]+'</a>'; 
						       
						    var newCell  = newRow.insertCell(4);
						        newCell.innerHTML = objData["lineitemname"];
							var newCell  = newRow.insertCell(5);
						        newCell.innerHTML =   moment.utc(objData["li_start_date"]).format('YYYY-MMM-DD');
							var newCell  = newRow.insertCell(6);
						        newCell.innerHTML =   moment.utc(objData["li_end_date"]).format('YYYY-MMM-DD');		
						
							var newCell  = newRow.insertCell(7);
						        newCell.innerHTML =   objData["creative_size"];
							var newCell  = newRow.insertCell(8);
						        newCell.innerHTML =   objData["productwebsite"];
							var newCell  = newRow.insertCell(9);
						        newCell.innerHTML =   objData["rate"];
							var newCell  = newRow.insertCell(10);
						        newCell.innerHTML =  parseInt(objData["impressions"]).toLocaleString("en")
							var newCell  = newRow.insertCell(11);
						        newCell.innerHTML =  parseInt(objData["clicks"]).toLocaleString("en");
							var newCell  = newRow.insertCell(12);
						        newCell.innerHTML =  parseFloat(objData["ctr"]).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})+"%"; 
							var newCell  = newRow.insertCell(13);
						        newCell.innerHTML =  "£ " +Math.round(parseInt(objData["amountspent"]),2).toLocaleString("en");
							var newCell  = newRow.insertCell(14);
						        newCell.innerHTML =   objData["avg_ecpm"];
							var newCell  = newRow.insertCell(15);
						        newCell.innerHTML =   objData["totalactiveviewavgviewabletime"];
							var newCell  = newRow.insertCell(16);
						        newCell.innerHTML =   parseInt(objData["reach"]).toLocaleString("en");

						         
						}	
					
				
			},
			error: function (responseData, textStatus, errorThrown) {
			  console.log(responseData)	
			 console.log('Error : ' + responseData)
			}

		    });

		    responsive_regionalReport();
	
}
	/*
	function getAllRegions1()
	{
		
		var role = $('#role').val();
		$('#jd-regions').append($('<option>', {value: 'ALL REGION', text: 'ALL REGIONS' }));
		$("#jd-regions").select2().val("ALL REGION").trigger('change.select2');
		
		var jsonObj = {
				siteId :4
			}
		$('#jd-regions').val("");
		$.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"listAllRegions",
			data : jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
				var result = JSON.parse(responseData);
				var dt = result["rows"]	
	                            if(role === 'RegionAdmin')
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
			  //console.log(responseData)	
			 console.log('Error : ' + responseData)
			}

		    });
	}	
  	*/

   	var k=0;
	function getdetails(jsonObj)
	{


		var table1;
		var finalResult = "";
		var objData = "";
		var count = 0 ;

		var editor;
		/*
		editor = new $.fn.dataTable.Editor( {
	        "ajax": apiUrl+"orderReport",
	        "table": "#regional_report",
	        "fields": [ {
	                "label": "region:",
	                "name": "region"
	            }, {
	                "label": "urn:",
	                "name": "urn"
	            }, {
	                "label": "advertiser:",
	                "name": "advertiser"
	            }, {
	                "label": "start_date:",
	                "name": "start_date"
	            }, {
	                "label": "end_date:",
	                "name": "end_date"
	            }, {
	                "label": "impressions:",
	                "name": "impressions"      
	            }, {
	                "label": "clicks:",
	                "name": "clicks"
	            }, {
	                "label": "ctr:",
	                "name": "ctr"
	            }
	        ]
	    } );
    			*/
		

		table = $('#regional_report').DataTable();
		
		table.destroy();
		
			$('#regional_report').DataTable( {
				dom: '<"html5buttons exportbtn"B>lTfgitp',
				buttons: [
	                 
	                  {text: '<form id="campaign" name="data" ><input type="hidden" id="camref" name="camrefs"/><span id="exportcam" onclick="ExportCam();">Export</span></form>',title: 'Campaign Report',id:'text'}
	                  
	                  //{extend: 'pdf', title: 'Order Report'},               
	              ],
              paging:true,
              processing:true,
             
             
                        pageLength: 25,
        columnDefs: [
            { targets: [4,5,6,7,8,9], className: 'dt-body-right dt-head-right' }
          ],
	        ajax: {
	            url: apiUrl+"orderReport",
	            type: "POST",
     			data : jsonObj,
	        },
	        serverSide: true,
	       
	        columns: [
	            { data: "region" },
	            { data: "urn" ,render: function ( data, type, row ) {
	                // Combine the first and last names into a single table field
	                return '<a  href="campaign/campaign?lineItem='+data+'&lineItemNew='+data+' " id="'+data+'"  name="'+data+'">'+data+'</a>'
	            	} 
	        	},
	            { data: "advertiser" },
	            { data: "server", render: function (data){
	            	if(data=="DFP") return '<img src="../img/dfp.png" class="tablelogo">';
	            	else if(data=="FB") return  '<img src="../img/fb.png" class="tablelogo">';
	            	else if(data=="BOTH") return  '<img src="../img/dfp.png" class="tablelogo"><img src="../img/fb.png" class="tablelogo">';
	            	else return  '';
	            } },
	            { data: "start_date", render: function ( data, type, row ) {
	                // Combine the first and last names into a single table field
	                return moment.utc(data).format('DD-MMM-YYYY');
	            	}  
	            },
	            { data: "end_date", render: function ( data, type, row ) {
	                // Combine the first and last names into a single table field
	                return moment.utc(data).format('DD-MMM-YYYY');
	            	}  
	            },
	            { data: "impressions", render: function ( data, type, row ) {
	                // Combine the first and last names into a single table field
	                return parseInt(data).toLocaleString("en");
	            	}  
	            
		        },
	            { data: "clicks", render: function ( data, type, row ) {
                // Combine the first and last names into a single table field
	                return parseInt(data).toLocaleString("en");
	            	}  
	            
	        	},
	            { data: "ctr", render: function ( data, type, row ) {
	                // Combine the first and last names into a single table field
	                return parseFloat(data).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})+"%";
	            	}  
	            
	        	},
	        	{ data: "budget", render: function ( data, type, row ) {
	                // Combine the first and last names into a single table field
	                return "£ " +parseFloat(data).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});
	            	}  
	            
	        	}
	        ]
	       
	      
	        
	    } );
			
			
			
/*
		if(k==0)
		{
			table1=$('#regional_report').DataTable({});
        	var reportTable = document.getElementById('regional_report_tbody');
		
        	var rowcount =reportTable.rows.length;
			for (var x = rowcount - 1; x >= 0; x--)
			{
			    reportTable.deleteRow(x);
			}

		 	if (table1 !== null || table1 == ' ') {
		           table1.clear();
		           table1.destroy();
	       }
		}
		
		$.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"orderReport",
			data : jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
				$('#preloader').hide();
				var result = JSON.parse(responseData);
				var dt = result["rows"]	
				console.log(dt);
				console.log(dt.length);  
					   for (var index in dt)
						{
							var objData = dt[index];
							//console.log(objData);jdanalytics-stage.2adpro.com
					          	var newRow = reportTable.insertRow(count);
					          	
						       var newCell  = newRow.insertCell(0);
					     	newCell.setAttribute("class", "sticky-cell");
					     	newCell.innerHTML =  objData["region"];

					        var newCell  = newRow.insertCell(1);
							newCell.setAttribute("class", "sticky-cell");
							
							newCell.innerHTML = '<a  href="dashboard/campaign?lineItem='+objData["urn"]+'&lineItemNew='+objData["urn"]+' " id="'+objData["urn"]+'"  name="'+objData["urn"]+'">'+objData["urn"]+'</a>'; 
					       //newCell.innerHTML =  objData["urn"];
							
							var newCell  = newRow.insertCell(2);
							newCell.setAttribute("class", "sticky-cell");
						        newCell.innerHTML =  objData["advertiser"];

						    
							var newCell  = newRow.insertCell(3);
						        newCell.innerHTML =   moment.utc(objData["start_date"]).format('YYYY-MMM-DD');
							var newCell  = newRow.insertCell(4);
						        newCell.innerHTML =   moment.utc(objData["end_date"]).format('YYYY-MMM-DD');		
						
							var newCell  = newRow.insertCell(5);
						        newCell.innerHTML =  parseInt(objData["impressions"]).toLocaleString("en")
							var newCell  = newRow.insertCell(6);
						        newCell.innerHTML =  parseInt(objData["clicks"]).toLocaleString("en");
							var newCell  = newRow.insertCell(7);
						        newCell.innerHTML =  parseFloat(objData["ctr"]).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})+"%";
							
						         
						}	
						
                window.dispatchEvent(new Event('resize'));
					
				
			},
			error: function (responseData, textStatus, errorThrown) {
			 // console.log(responseData)	
			 console.log('Error : ' + responseData)
			}

	    });
		
      	if(k==0)
		{		
	  		responsive_regionalReport();
	  		k++;
		}
		*/
			
			
		
    	}
function fetchDataOnFilterSelect(filerCategory)
	{
		//alert(filerCategory);
		var advertiserList=[];
		var statusList=[];
		/*advertiserList.push("a");
		advertiserList.push("b");
		advertiserList.push("c");
		advertiserList.push("d");
		for(index in advertiserList)
		{
			$('#advertiserList').append('<li><label><input type="checkbox" name="'+advertiserList[index]+'" value="'+index+'" id="'+advertiserList[index]+'">'+advertiserList[index]+'</label></li>');
		}*/
		var region = new Array();
		var list = document.getElementById('selectedRegions').children;
		var regList = $("#selectedRegions").children().length;
		var allReg = 'all';
		var startDate = $('#order_report_range').data('daterangepicker').startDate.format("YYYY-MM-DD");
    		var endDate = $('#order_report_range').data('daterangepicker').endDate.format("YYYY-MM-DD");
		for(var i=0 ; i<regList ; i++)
		    {     
		      var divContent = list[i].innerHTML;
		     // var reg = divContent.substring(0, divContent.indexOf('<'));
		       var reg = divContent;
       			var regSel = $(reg).text();
		      if(regSel.trim() === "ALL REGION")
		      {
			var x = document.getElementById('jd-regions');
            	 	for (var i = 1; i < x.length; i++) {
					  	region.push(x[i].value);
				       }
		      }
		      else
		      { 
			region.push(regSel);
		      }
		    }
		    
		    var target = $('#target').val();
		    var jsonObj = {
		       siteId : $('#userSiteId').val(),
		       region : region,
		       target : target,
		       from   : startDate,
		       to     : endDate
		    }

		    if(filerCategory === 'advertiser')	
		    {

	   	    $.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"filterAdvertiser",
			data : jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
				var result = JSON.parse(responseData);
				//alert(responseData);
				//console.log(responseData);
				var dt = result["rows"]	
				//console.log(dt);
				//console.log(dt.length);  
				   for (var index in dt)
					{
						var objData = dt[index];
						advertiserList.push(objData["advertiser"]);
					}	
					//$('#advertiserList').html("");
					$('#listDropdownAdvertiser').html("");
					
					for(index in advertiserList)
					{
						//$('#advertiserList').append('<li><label><input type="checkbox" name="'+advertiserList[index]+'"  id="'+advertiserList[index]+'">'+advertiserList[index]+'</label></li>');
						$('#listDropdownAdvertiser').append('<li><label class="field option block"><input type="checkbox" name="'+advertiserList[index]+'"  id="'+advertiserList[index]+'"><span class="checkbox"></span>'+advertiserList[index]+'</label></li>');
					}
					$('#advertiser-hidden-val').val(advertiserList.length);
				
			},
			error: function (responseData, textStatus, errorThrown) {
			 // console.log(responseData)	
			 console.log('Error : ' + responseData)
			}

		    });
		    }
		    if(filerCategory === 'status')
		    {
			$.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"filterStatus",
			data : jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
				var result = JSON.parse(responseData);
				//alert(responseData);
				//console.log(responseData);
				var dt = result["rows"]	
				console.log(dt);
				//console.log(dt.length);  
				   for (var index in dt)
					{
						var objData = dt[index];
						statusList.push(objData["status"]);
					}	
					//$('#statusList').html("");
					$('#listDropdownStatus').html("");
					var value= "";
					for(index in statusList)
					{
						
                                                if (statusList[index] === "A")
						{
						   value = "Approved";
						}
						else if (statusList[index] === "C")
						{
						  value = "Completed";	
						}	
						else if (statusList[index] === "D")
						{
						  value = "Cancelled";
						}
						else if (statusList[index] === "E")
						{
						  value = "Amend";
						}
						else if (statusList[index] === "H")
						{
						  value = "Hold";
						}
						else if (statusList[index] === "I")
						{
						  value = "Queued";
						}
						else if (statusList[index] === "L")
						{
						  value = "Delivering";
						}
						else if (statusList[index] === "O")
						{
						  value = "Order Entry";
						}
						else if (statusList[index] === "R")
						{
						  value = "Ready";
						}
						else if (statusList[index] === "S")
						{
						  value = "Submitted";
						}
						else if (statusList[index] === "V")
						{
						  value = "Ad Served";
						}
						else if (statusList[index] === "W")
						{
						  value = "Revised";
						}
						else if (statusList[index] === "X")
						{
						  value = "Deleted";
						}
						else if (statusList[index] === "Z")
						{
						  value = "Archived";
						}
						else if (statusList[index] === "B")
						{
						  value = "Reserved";
						}
						else if (statusList[index] === "Y")
						{
						   value = "Query";
						}
						else if (statusList[index] === "P")
						{
						  value = "Paused";
						}
						else if (statusList[index] === "U")
						{
						  value = "Updated";
						}
						else if (statusList[index] === "K")
						{
				                  value = "Overbooked";
						}
									
						//$('#statusList').append('<li><label><input type="checkbox" name="'+statusList[index]+'"  id="'+statusList[index]+'">'+statusList[index]+'</label></li>');
						$('#listDropdownStatus').append('<li><label class="field option block"><input type="checkbox" name="'+statusList[index]+'"  id="'+statusList[index]+'"><span class="checkbox"></span>'+value+'</label></li>');
					
					}
					$('#status-hidden-val').val(statusList.length);
			},
			error: function (responseData, textStatus, errorThrown) {
			  //console.log(responseData)	
			 console.log('Error : ' + responseData)
			}

		    });
		    }
	}
function fetchAppliedFilters()
{
	//
	
	var advertiserList=[];
	var statusList=[];
	var isAdvertiserFiltered="false";
	var isStatusFiltered="false";
	$("#selectedFilters").html("");
	

	$('#listDropdownAdvertiser input:checked').each(function() {
		    advertiserList.push($(this).attr('name'));
		});

	$('#listDropdownStatus input:checked').each(function() {
		    statusList.push($(this).attr('name'));
		});

	if(advertiserList.length > 0)
	{
		isAdvertiserFiltered="true";
	}

	if(statusList.length > 0)
	{
		isStatusFiltered="true";
	}

	if(advertiserList.length <= 0 && statusList.length <= 0)
	{
		alert("Please select values");
		return false;
	}

	var region = new Array();
	var list = document.getElementById('selectedRegions').children;

	var regList = $("#selectedRegions").children().length;

	var allReg = 'all';
	var startDate = $('#order_report_range').data('daterangepicker').startDate.format("YYYY-MM-DD");

	var endDate = $('#order_report_range').data('daterangepicker').endDate.format("YYYY-MM-DD");
	for(var i=0 ; i<regList ; i++)

	    {     

	      var divContent = list[i].innerHTML;

	      //var reg = divContent.substring(0, divContent.indexOf('<'));

	       var reg = divContent;
       var regSel = $(reg).text();

	      if(regSel.trim() === "ALL REGION")

	      {

		var x = document.getElementById('jd-regions');
            	 for (var i = 1; i < x.length; i++) {
					  	region.push(x[i].value);
				       }

	      }

	      else

	      { 

		region.push(regSel);
	      }
	    }
	    
	    var target = $('#target').val();
	    var jsonObj = "";	
	if(isAdvertiserFiltered === 'true' && isStatusFiltered === 'true')
	{
	    $("#selectedFilters").append('<p>ADVERTISERS: '+advertiserList+'</p>');
	    $("#selectedFilters").append('<p>STATUS: '+statusList+'</p>');
	    jsonObj = {
	       siteId : $('#userSiteId').val(),
	       region : region,
	       target : target,
	       from   : startDate,
	       to     : endDate,
	       isAdvertiserFiltered : isAdvertiserFiltered,
	       isStatusFiltered : isStatusFiltered,
	       advertiserList : advertiserList,
	       statusFiltered : statusList
	    }
	}
	else if(isAdvertiserFiltered ==='true' && isStatusFiltered === 'false')
	{
	    $("#selectedFilters").append('<p>ADVERTISERS: '+advertiserList+'<p>');
	      jsonObj = {
	       siteId : $('#userSiteId').val(),
	       region : region,
	       target : target,
	       from   : startDate,
	       to     : endDate,
	       isAdvertiserFiltered : isAdvertiserFiltered,
	       isStatusFiltered : isStatusFiltered,
	       advertiserList : advertiserList
	    }
	}
	else if(isStatusFiltered === 'true' && isAdvertiserFiltered === 'false')
	{
	    $("#selectedFilters").append('<p>STATUS: '+statusList+'<p>');
	       jsonObj = {
	       siteId : $('#userSiteId').val(),
	       region : region,
	       target : target,
	       from   : startDate,
	       to     : endDate,
	       isAdvertiserFiltered : isAdvertiserFiltered,
	       isStatusFiltered : isStatusFiltered,
	       statusFiltered : statusList
	    }
	}
	
	//console.log(jsonObj);
	var table1;
		var finalResult = "";
		var objData = "";
		var count = 0 ;
    		
		table1=$('#regional_report').DataTable();
        	var reportTable = document.getElementById('regional_report_tbody');

        	var rowcount =reportTable.rows.length;
		for (var x = rowcount - 1; x >= 0; x--)
		{
		    reportTable.deleteRow(x);
		}

		 if (table1 !== null) {
		           table1.clear();
		           table1.destroy();
		       }

    		$.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"filteredorderReport",
			data : jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
				$('#filterModal').modal('hide');
				var result = JSON.parse(responseData);
				var dt = result["rows"]	
				console.log(dt);
				console.log(dt.length);  
					   for (var index in dt)
						{
							var objData = dt[index];
							//console.log(objData);jdanalytics-stage.2adpro.com
					          	var newRow = reportTable.insertRow(count);
						         var newCell  = newRow.insertCell(0);
					     	newCell.setAttribute("class", "sticky-cell");
					     	newCell.innerHTML =  objData["region"];

					        var newCell  = newRow.insertCell(1);
					        newCell.setAttribute("class", "sticky-cell");
					        newCell.innerHTML =  objData["urn"];
							
							var newCell  = newRow.insertCell(2);
							newCell.setAttribute("class", "sticky-cell");
						        newCell.innerHTML =  objData["advertiser"];

						    var newCell  = newRow.insertCell(3);
						    newCell.setAttribute("class", "sticky-cell");
						        newCell.innerHTML = '<a  href="dashboard/campaign?lineItem='+objData["ordername"]+'&lineItemNew='+objData["lineitemname"]+' " id="'+objData["ordername"]+'"  name="'+objData["ordername"]+'">'+objData["ordername"]+'</a>'; 
						       
						    var newCell  = newRow.insertCell(4);
						        newCell.innerHTML = objData["lineitemname"];
							var newCell  = newRow.insertCell(5);
						        newCell.innerHTML =   moment.utc(objData["li_start_date"]).format('YYYY-MMM-DD');
							var newCell  = newRow.insertCell(6);
						        newCell.innerHTML =   moment.utc(objData["li_end_date"]).format('YYYY-MMM-DD');		
						
							var newCell  = newRow.insertCell(7);
						        newCell.innerHTML =   objData["creative_size"];
							var newCell  = newRow.insertCell(8);
						        newCell.innerHTML =   objData["productwebsite"];
							var newCell  = newRow.insertCell(9);
						        newCell.innerHTML =   objData["rate"];
							var newCell  = newRow.insertCell(10);
						        newCell.innerHTML =  parseInt(objData["impressions"]).toLocaleString("en")
							var newCell  = newRow.insertCell(11);
						        newCell.innerHTML =  parseInt(objData["clicks"]).toLocaleString("en");
							var newCell  = newRow.insertCell(12);
						        newCell.innerHTML =  parseFloat(objData["ctr"]).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) +"%";
							var newCell  = newRow.insertCell(13);
						        newCell.innerHTML =  "£ " +Math.round(parseInt(objData["amountspent"]),2).toLocaleString("en");
							var newCell  = newRow.insertCell(14);
						        newCell.innerHTML =   objData["avg_ecpm"];
							var newCell  = newRow.insertCell(15);
						        newCell.innerHTML =   objData["totalactiveviewavgviewabletime"];
							var newCell  = newRow.insertCell(16);
						        newCell.innerHTML =   parseInt(objData["reach"]).toLocaleString("en");

						         
						}	
					
				
			},
			error: function (responseData, textStatus, errorThrown) {
			  console.log(responseData)	
			 console.log('Error : ' + responseData)
			}

		    });

		    responsive_regionalReport();
	
}

