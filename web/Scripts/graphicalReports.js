
function showImpression(sel_lineitem)
		{

			
			var jsonObj = {
    			lineItem : sel_lineitem
    		}
			$.ajax({
			type: "POST",
			async :true,
			url:apiUrl+"reportImpressions",
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
							document.getElementById('totalImpressions').innerHTML = finalResult.toLocaleString("en");
							
							
							$("#pdfdownload").attr("href","/dashboard/download?id="+objData["trackingno"]+'&mail=no');
							
							document.getElementById('adv').innerText = objData["adv"];
							document.getElementById('trackingno').innerText = objData["trackingno"];
							document.getElementById('ordername').innerText = objData["ordername"];
							document.getElementById('ostartdate').innerText = moment.utc(objData["startdate"]).format('DD-MMM-YYYY');
							document.getElementById('oenddate').innerText = moment.utc(objData["startdate"]).format('DD-MMM-YYYY');
							document.getElementById('region_name').innerText = objData["region"];
							document.getElementById('salesrep').innerText = objData["salesrep"];
							updateecpm();
							
						}
						else
						{
							document.getElementById('totalImpressions').innerHTML = 0;
						}
					
					}
			},
			error: function (responseData, textStatus, errorThrown) {
			  console.log(responseData)	
			  console.log('Error : ' + responseData)
			}

		    });

		}

function showFbImpression(sel_lineitem)
{

	
	var jsonObj = {
		lineItem : sel_lineitem
	}
	$.ajax({
	type: "POST",
	async :true,
	url:apiUrl+"reportFbImpressions",
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

					finalResult = parseInt(objData["impression"]);
					document.getElementById('totalImpressions').innerHTML = finalResult.toLocaleString("en");
					
					
					$("#pdfdownload").attr("href","/dashboard/download?id="+objData["trackingno"]+'&mail=no');
					
					document.getElementById('adv').innerText = objData["salesrep"];
					document.getElementById('trackingno').innerText = objData["trackingno"];
					document.getElementById('ordername').innerText = objData["ordername"];
					document.getElementById('ostartdate').innerText = moment.utc(objData["startdate"]).format('DD-MMM-YYYY');
					document.getElementById('oenddate').innerText = moment.utc(objData["startdate"]).format('DD-MMM-YYYY');
					document.getElementById('region_name').innerText = objData["region"];
					document.getElementById('salesrep').innerText = '-';
					document.getElementById('totalClicks').innerText = objData["click"].toLocaleString("en");
					document.getElementById('clickRate').innerText = parseFloat(objData["ctr"].toFixed(2));
					
					document.getElementById('eCPMRate').innerText  = "£ " +parseFloat(objData["ecpm"].toFixed(2)).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});
					document.getElementById('AmountSpent').innerText = objData["budget"].toFixed(2).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})
					
					
					
					
				}
				else
				{
					document.getElementById('totalImpressions').innerHTML = 0;
				}
			
			}
	},
	error: function (responseData, textStatus, errorThrown) {
	  console.log(responseData)	
	  console.log('Error : ' + responseData)
	}

    });

}




		function showClicks(sel_lineitem)
		{
			var jsonObj = {
    			lineItem : sel_lineitem
    		}
			$.ajax({
			type: "POST",
			async :true,
			url:apiUrl+"reportClicks",
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
							document.getElementById('totalClicks').innerHTML = finalResult;	
						}
						else
						{
							document.getElementById('totalClicks').innerHTML = 0;
						}
					
					}
			},
			error: function (responseData, textStatus, errorThrown) {
			  console.log(responseData)	
			 console.log('Error : ' + responseData)
			}

		    });
		}

		function showCtr(sel_lineitem)
		{

			var jsonObj = {
    			lineItem : sel_lineitem
    		}
			$.ajax({
			type: "POST",
			async :true,
			url:apiUrl+"reportCtr",
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
							finalResult = parseFloat(objData["sum"]);
							document.getElementById('clickRate').innerHTML = finalResult.toFixed(2).toLocaleString("en")+"%";
						}
						else
						{
							document.getElementById('clickRate').innerHTML = 0;
						}
					
					}
			},
			error: function (responseData, textStatus, errorThrown) {
			  console.log(responseData)	
			 console.log('Error : ' + responseData)
			}

		    });
		}

		/*** order budget */

function getOrderBudget(sel_lineitem)
{

	var jsonObj = {
		lineItem : sel_lineitem
	}
	$.ajax({
	type: "POST",
	async :true,
	url:apiUrl+"orderBudget",
	data : jsonObj,
	cache: false,
	crossDomain: true,
	success: function (responseData, textStatus, jqXHR) {
		var result = JSON.parse(responseData);
		var dt = result["rows"]	
		for (var i=0 ; i<dt.length; i ++)
			{
				var objData = dt[i];
				finalResult = objData["budget"];	
				if (finalResult !== null)
				{
					finalResult = parseInt(objData["budget"]);
					document.getElementById('AmountSpent').innerHTML = "£ "+finalResult.toFixed(2).toLocaleString("en");
				}
				else
				{
					document.getElementById('AmountSpent').innerHTML = "£ "+0;
				}


				updateecpm();
			
			}
	},
	error: function (responseData, textStatus, errorThrown) {
	  console.log(responseData)	
	 console.log('Error : ' + responseData)
	}

	});
}
	


		function showInteractionRate(sel_lineitem)
		{
			var jsonObj = {
    			lineItem : sel_lineitem
    		}
			$.ajax({
			type: "POST",
			async :true,
			url:apiUrl+"reportInteractionRate",
			data : jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
				var result = JSON.parse(responseData);
				//alert(JSON.stringify(result));
				var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
						finalResult = objData["avg"];	
						if (finalResult !== null)
						{
							finalResult = parseInt(objData["avg"]);
							document.getElementById('interactionRate').innerHTML = finalResult.toLocaleString("en");	
						}
						else
						{
							document.getElementById('interactionRate').innerHTML = 0;
						}
					
					}
			},
			error: function (responseData, textStatus, errorThrown) {
			  console.log(responseData)	
			 console.log('Error : ' + responseData)
			}

		    });
		}

		function showDwelledRate(sel_lineitem)
		{	

			var jsonObj = {
    			lineItem : sel_lineitem
    		}
			$.ajax({
			type: "POST",
			async :true,
			url:apiUrl+"reportDwelledRate",
			data : jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
				var result = JSON.parse(responseData);
				var dt = result["rows"]	
				for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
						finalResult = objData["avg"];	
						if (finalResult !== null)
						{

							finalResult = parseInt(objData["avg"]);
							document.getElementById('dwellRate').innerHTML = finalResult.toLocaleString("en");	
						}
						else
						{
							document.getElementById('dwellRate').innerHTML = 0;
						}
					
					}
			},
			error: function (responseData, textStatus, errorThrown) {
			  console.log(responseData)	
			 console.log('Error : ' + responseData)
			}

		    });
		}

	    function drawBarForADS(sel_lineitem)
	      {
	      		var canvasHTMLOpen=document.getElementById("adsGraph");
                var ctx = document.getElementById("adsGraph").getContext("2d");
                ctx.clearRect(0,0,canvasHTMLOpen.width,canvasHTMLOpen.height);
                ctx.beginPath();

                var jsonObj = {
    			lineItem : sel_lineitem
		    		}
				$.ajax({
				type: "POST",
				async :true,
				url:apiUrl+"barGraphForLineItem",
				data : jsonObj,
				cache: false,
				crossDomain: true,
				success: function (responseData, textStatus, jqXHR) {
					var result = JSON.parse(responseData);
					var cr_date = [];
					var sum = [];
					var barcolour = [];
					var clr = "#3e95cd";
					var dt = result["rows"]
					for (var i=0 ; i<dt.length; i ++)
					{
						var objData = dt[i];
						cr_date.push(moment.utc(objData["eventdate"]).format('DD-MMM-YYYY'));
						sum.push(objData["count"]);
						barcolour.push(clr);
					}	
					new Chart(document.getElementById("adsGraph"), {
					    type: 'bar',
					    data: {
					      labels: cr_date,
					      datasets: [
					        {
					          label: "Live Ads",
					           backgroundColor: barcolour,
					          data: sum
					        }
					      ]
					    },
					    options: {
					      legend: { display: false },
					      title: {
					        display: false,
					        text: 'LINEITEMS COUNT PER DAY'
					      },
					      scales: {
						        yAxes: [{ 
						          scaleLabel: {
						            display: true,
						            labelString: "Live Ads Count",
							    	
						          },
							  gridLines: {
								    display:false
								}
						        }],
						        xAxes: [{ 
						          scaleLabel: {
						            display: true,
						            labelString: "Campaign Date",
							   	
						          },
							  gridLines: {
								    display:false
								}
						        }]
						      }
					    }
					});
					
				},
				error: function (responseData, textStatus, errorThrown) {
				  console.log(responseData)	
				 console.log('Error : ' + responseData)
				}

			    });

                 

				ctx.closePath();		  
	      }

	      function drawBarForImpression(sel_lineitem)
	      {
	      		/*var canvasHTMLOpen=document.getElementById("impressionGraph");
                var ctx = document.getElementById("impressionGraph").getContext("2d");
                ctx.clearRect(0,0,canvasHTMLOpen.width,canvasHTMLOpen.height);
                ctx.beginPath();*/
                var jsonObj = {
    			lineItem : sel_lineitem
		    		}
				$.ajax({
				type: "POST",
				async :true,
				url:apiUrl+"barGraphForImpressions",
				data : jsonObj,
				cache: false,
				crossDomain: true,
				success: function (responseData, textStatus, jqXHR) {

					
					var result = JSON.parse(responseData);
					
					var cr_date = [];
					var sum = [];
					var barcolour = [];
					var clr="#3e95cd";
					var dt = result["rows"];

					var categories = {};
					
					var lineItemreport=[];
					var lineitemname ={};
					lineItemreport['CAMPAIGN PERFORMANCE DATA']=[];
					lineItemreport['CAMPAIGN DETAILS']=[];
					var 	temp=[];
				for (var i=0 ; i<dt.length; i ++)
					{
					
					
						
						var objData = dt[i];
					
					   	categories[i] ={
								 
									"impressions":objData['impressions'],
									"date":moment.utc(objData["date"]).format('YYYY-MM-DD'),
									"li_version":'V'+objData['li_version']
								 
							 };

							 

							 if(jQuery.inArray( objData['li_version'], temp ) == -1)
							 {

							 lineitemname['V'+objData['li_version']]={
								 "product":objData['li_name']
							 };
							}
								 
							temp.push(objData['li_version']);
				
					}	


			   lineItemreport['CAMPAIGN PERFORMANCE DATA'] = _.mapValues(_.groupBy(categories, 'li_version'),
					clist => clist.map(categories => _.omit(categories, 'li_version'))
				
				
				);

			
					lineItemreport['CAMPAIGN DETAILS'] =lineitemname;
			/*	lineItemreport['CAMPAIGN DETAILS']	= _.mapValues(_.groupBy(lineitemname, 'version'),
					clist => clist.map(lineitemname => _.omit(lineitemname, 'version'))
				
				);
*/

console.log(lineItemreport);
			
/**d3.js start */

			var fieldDetails=[];
			fieldDetails.notes='';
			fieldDetails.attr='';
			fieldDetails.totalVersions='4';
		//	fieldDetails.series='http://jdanalytics.localhost/test.json';

		 var notestab=fieldDetails.notes;
		 var chartWrap = $('<div class="chart" />');
		 var chartContainer = $('<div />');
		 if(fieldDetails.attr)
		 {
				 $.each(fieldDetails.attr, function(attr,val){
						 chartContainer.attr(attr,val);
				 });
		 }
		 chartContainer.appendTo('#impressionGraph');

		 var totalHeight = (parseInt(fieldDetails.totalVersions)*250)+200;

		 $svg  = $('<svg width="610" height="'+totalHeight+'"></svg>');

		 chartContainer.append($svg);

		 var devWidth = $(window).width() - 100;

		 svg = d3.select("svg"),
				 margin = {top: 10, right: 40, bottom: 10, left: 75},
				 width = 725 - margin.left - margin.right,
				 contextHeight = 35;
		 contextWidth = width * 1;

		 var colors=d3.scaleOrdinal(d3.schemeCategory10);

		 var svg = d3.select("svg")
				 .attr("width", width + margin.left + margin.right)


		 var formatTime = d3.timeFormat("%d-%b-%Y");
		 var parse = d3.timeParse("%Y-%m-%d");
			var  data=lineItemreport;
		
	   createChart(data);
		 
		 function createChart(data){

		
				 var versions = [];
				 var dateRange = [];
				 var dataRange = [];
				 var charts = [];
				 var maxDataPoint = 0;

				 versions = d3.keys(data["CAMPAIGN PERFORMANCE DATA"]);

				 
				
				 versions.forEach(function(col){
						 tempMaxDate = d3.extent(data["CAMPAIGN PERFORMANCE DATA"][col].map(function(d){return d.date}));
						 tempMaxData = d3.extent(data["CAMPAIGN PERFORMANCE DATA"][col].map(function(d){return parseInt(d.impressions)}));
						 dateRange = dateRange.concat(tempMaxDate)
						 dataRange = dataRange.concat(tempMaxData)
				 })

				 maxDataPoint = d3.max(dataRange);

				 var versionsCount = versions.length;

				 height = versionsCount * 70 - margin.top - margin.bottom + 100;
				 svg.attr("height", (height + margin.top + margin.bottom + 50));

				 var chartHeight = height * (1 / versionsCount);

				 for(var i = 0; i < versionsCount; i++){
						 var col = versions[i];
						
						 data["CAMPAIGN PERFORMANCE DATA"][col].forEach(function(d){
								 d.date = parse(d.date)
						 })
						 charts.push(new Chart({
								 data: data["CAMPAIGN PERFORMANCE DATA"][col],
								 details: data["CAMPAIGN DETAILS"][col],
								 dateRange: dateRange,
								 id: i,
								 name: versions[i],
								 width: width,
								 height: height * (1 / versionsCount),
								 maxDataPoint: maxDataPoint * 1.1,
								 svg: svg,
								 margin: margin,
								 showBottomAxis: (i == versions.length - 1)
						 }));
				 }

				
				//name: versions[i],

				 svg.append("text")
						 .attr("class","yaxis-title")
						 .attr("transform", "rotate(-90)")
						 .attr("y", 20)
						 .attr("x",0 - (height * 0.7))
						 .style("text-anchor", "middle")
						 .text("Impressions");

				 svg.selectAll(".tick")
						 .filter(function (d) { return d === 0;  })
						 .remove();
		 }

		 function Chart(options,notestab){
				 this.chartData = options.data;
				 this.dateRange = options.dateRange;
				 this.width = options.width;
				 this.height = options.height;
				 this.maxDataPoint = options.maxDataPoint;
				 this.svg = options.svg;
				 this.id = options.id;
				 this.name = options.name;
				 this.details = options.details;
				 this.margin = options.margin;
				 this.showBottomAxis = options.showBottomAxis;

				 var localName = this.name;

				 /* XScale is time based */
				 this.xScale = d3.scaleTime()
						 .range([0, this.width])
						 .domain(d3.extent(this.dateRange.map(function(d) { return parse(d) })))

				 /* YScale is linear based on the maxData Point we found earlier */
				 this.yScale = d3.scaleLinear()
						 .range([this.height,0])
						 .domain([0,this.maxDataPoint]);
				 var xS = this.xScale;
				 var yS = this.yScale;


				 /*
					This is what creates the chart.
					There are a number of interpolation options.
					'basis' smooths it the most, however, when working with a lot of data, this will slow it down
					*/
				 this.line = d3.line()
						 .x(function(d) { return xS(d.date); })
						 .y(function(d) { return yS(d["impressions"]); });

				 this.svg.append("defs")
						 .append("clipPath")
						 .attr("id", "clip-" + this.id)
						 .append("rect")
						 .attr("width", this.width)
						 .attr("height", this.height);
				 /*
					Assign it a class so we can assign a fill color
					And position it on the page
					*/
				 this.chartContainer = svg.append("g")
						 .attr('class',this.name.toLowerCase())
						 .attr("transform", "translate(" + this.margin.left + "," + (this.margin.top + (this.height * this.id) + (10 * this.id)) + ")");

				 /* We've created everything, let's actually add it to the page */

				 var id = this.id;

				 this.chartContainer.append("path")
						 .data([this.chartData])
						 .attr("class", "chart")
						 .attr("stroke", function(d){return colors(id)} )
						 .attr("stroke-width", 2)
						 .attr("fill", "none")
						 .attr("clip-path", "url(#clip-" + this.id + ")")
						 .attr("d", this.line);

				 var div = d3.select("body").append("div")
						 .attr("class", "tooltip")

						 .style("opacity", 0);

				 this.chartContainer.selectAll("dot")
						 .data(this.chartData)
						 .enter()
						 .append("circle")
						 .attr("r", function(d) { return d["impressions"] ? 3.5:0; })
						 .attr("cx", function(d) { return xS(d.date);  })
						 .attr("cy", function(d) { return yS(d["impressions"]); })
						 .attr("stroke", function(d){return colors(id)} )
						 .attr("stroke-width", 2)
						 .attr("fill", "#fff")
						 .on("mouseover", function(d) {

								 d3.select(this).attr("r", 7);

								 var tooltipContent = '<h3">' + formatTime(d.date) + '</h3>' +
										 '<p>' +
										 '<span class="value"><b>Impressions: </b>' + d["impressions"] + '</span>' +
										 '</p>';

								 div.transition()
											 .style("opacity", 0.9);

								 div.html(tooltipContent)
								 .style("left", (d3.event.pageX ) + "px")
								 .style("top", (d3.event.pageY + 10) + "px");
						 })
						 .on("mouseout", function(d) {
								 d3.select(this).attr("r", 3.5);
								 div.transition()
										 .style("opacity", 0);
						 });

				 var timescale = d3.extent(this.chartData.map(function(d) { return d.date; }));
				 var timeScaleDiff = (timescale[1]-timescale[0])/(24*60*60*1000);
				 var interval, count;
				 if (timeScaleDiff <= 14) {
						 interval = d3.timeDay;
						 count = 1;
				 }
				 else if (timeScaleDiff > 14 && timeScaleDiff <= 28) {
						 interval = d3.timeDay;
						 count = 2;
				 }
				 else if (timeScaleDiff > 28 && timeScaleDiff <= 98) {
						 interval = d3.timeWeek;
						 count = 1;
				 }
				 else {
						 interval = d3.timeMonth;
						 count = 1;
				 }

				 this.xAxisBottom = d3.axisBottom().scale(this.xScale)
						 .ticks(interval, count)
						 .tickFormat(d3.timeFormat("%b %d"));

				 /* Only want a bottom axis on the last country */
				 if(this.showBottomAxis){
						 this.chartContainer.append("g")
								 .attr("class", "x axis bottom")
								 .attr("transform", "translate(0," + (this.height + 20) + ")")
								 .call(this.xAxisBottom);
				 }

				 this.yAxis = d3.axisLeft().scale(this.yScale).ticks(4);

				 this.chartContainer.append("g")
						 .attr("class", "y axis")
						 .attr("transform", "translate(-15,0)")
						 .call(this.yAxis);

				 var details = this.details;

				 // Adding Version to chart
				 
				this.chartContainer
						 .append("text")
						 .attr("class","country-title")
						 .style("fill",function(d){return colors(id)})
						 .attr("transform", "translate("+(this.width+20)+","+this.height*.5+")")
						 .text(this.name)
						 .on("mouseover", function(d) {
								 var tooltipContent = '<h3 style="text-align: center;">'+details.product+'</h3>';
								 div.transition()
										 .style("opacity", .9);
								 div.html(tooltipContent)
										 .style("left", (d3.event.pageX) + "px")
										 .style("top", (d3.event.pageY + 10) + "px");
						 })
						 .on("mouseout", function(d) {
								 div.transition()
										 .style("opacity", 0);
						 });


				 //adding triangular arrow to data point where notes available
				 var notes = this.chartContainer.append("g")
						 .selectAll(".notes")
						 .data(this.chartData)
						 .enter();

				 notes.append("text").attr("class", "note-content").html(function(d){return (d.note && d.note != "") ? "&#x25BC;":""})
						 .attr("x", function(d, i) {
								 return xS(d.date) - 8 ;
						 })
						 .attr("y", function(d, i) {
								 return yS(d["impressions"]) - 7;
						 })
						 .on("mouseover", function(d) {


								 var resdata = d.note;
								// var formattedString = d.note.replace(/,/gi, "\n").replace(/^,/,"");
								 var headerdata = resdata.header;
								 var bodydata = resdata.data[0];
								 var table = "<table class='table' >";

								 $.each(resdata['header'],function(hdrcnt, headerVal){

										 table = table + "<th>"+ headerVal.value+"</th>";
								 });
								 table=table+"<tbody>";
										$.each(resdata['data'],function($rowCnt, $row){


												table = table+"<tr>";
												$.each($row,function(colCnt, colVal){
														table = table + "<td>"+ colVal.value+"</td>";
												});
												table = table+"</tr>";

										});
										table=table+"</tbody>";
										table = table + "</table>";
								 //var formattedString =createGrid(d.note);
								 //formattedString.appendTo(column);
								 //console.log(formattedString);
						 var tooltipContent = '<h4 style="text-align: center;">' + table + '</h4>';
						 div.transition()
								 .style("opacity", '.9');
						 div.html(tooltipContent)
								 .style("left", (d3.event.pageX ) + "px")
								 .style("top", (d3.event.pageY + 10) + "px")
				 .style("position", "absolute")
				 .style("z-Index", "999");
				 })
						 .on("mouseout", function(d) {
								 div.transition()
										 .style("opacity", 0);
						 });;

		 }

		 Chart.prototype.showOnly = function(b){
				 this.xScale.domain(b);
				 this.chartContainer.select("path").data([this.chartData]).attr("d", this.area);
				 //this.chartContainer.select(".x.axis.top").call(this.xAxisTop);
				 this.chartContainer.select(".x.axis.bottom").call(this.xAxisBottom);
		 }

/**d3 js end */


				/*
					new Chart(document.getElementById("impressionGraph"), {
				    type: 'bar',
				    data: {
				      labels: cr_date,
				      datasets: [
				        {
				          label: "Impressions",
				          backgroundColor: barcolour,
				          data: sum
				        }
				      ]
				    },
				    options: {
				      legend: { display: false },
				      title: {
				        display: false,
				        text: 'TOTAL DAILY IMPRESSIONS'
				      },
				      scales: {
						        yAxes: [{ 
						          scaleLabel: {
						            display: true,
						            labelString: "Impression Count",
							     							
						          },
							  gridLines: {
								    display:false
								}	
						        }],
						        xAxes: [{ 
						          scaleLabel: {
						            display: true,
						            labelString: "Campaign Date",
							    	
						          },
							  gridLines: {
								    display:false
								}
						        }]
						      }
				      
				    }
				});
				*/
					
				},
				error: function (responseData, textStatus, errorThrown) {
				  console.log(responseData)	
				 console.log('Error : ' + responseData)
				}

			    });

			          //  ctx.font = '50px "Vast Shadow"';       
			//	ctx.closePath();		 
	      }
	function getLineItemAnalytics(lineItem)
	{
		var table1;
		var finalResult = "";
		var objData = "";
		var count = 0 ;
	
		
		var jsonObj = {
    			lineItem :lineItem
    		}

		$.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"websiteByOrderName",
			data : jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
				var result = JSON.parse(responseData);
				var dt = result["rows"]	
				var categories=[];
				 	for (var index in dt)
						{
							var objData = dt[index];

							categories[index] ={
								
								   "name":objData['li_name'],
								   "impressions":objData['impressions'],
								   "website":objData['website'],
								   "clicks":objData['clicks'],
								   "ctr":(objData['clicks']/objData['impressions'])*100
								   
								
							};


						}
						

						temp = _.mapValues(_.groupBy(categories, 'name'),
						clist => clist.map(categories => _.omit(categories, 'name'))  );
						
		
						
		
		
						var lineitems_base = $.map(temp, function(value, index) {
							return [value];
							
						});

							console.log(lineitems_base);

						for (var i=0;i<lineitems_base.length;i++)
						{

							var table_tem='<div class="ibox-content" id="line-item-box_'+i+'"> \
							<div class="table-responsive" id="line-item_'+i+'"> \
							  <table class="table table-striped table-bordered table-hover dataTables-example" id="line-item-report_'+i+'" > \
								<thead> \
								  <tr> \
									<th>Website</th> \
									<th>Impressions</th> \
									<th>Clicks</th> \
									<th>CTR</th> \
								  </tr> \
								</thead> \
								<tbody id="line-item-report-tbody_'+i+'"  style="overflow:visible"> \
								</tbody> \
							  </table> \
							</div> \
						  </div>';

						  $("#tables").append(table_tem);

						  $('#line-item-report_'+i+'').DataTable({
							dom: '<"html5buttons"B>lTfgitp',
							searching: false, 
							paging: true,
							"info": false,
							  buttons: [
								 
								 // {extend: 'csv',title: 'Line Item Report'},
								 // {extend: 'excel', title: 'Line Item Report'},
								  //{extend: 'pdf', title: 'Order Report'},

								 
							  ],
                        pageLength: 25


						  });
						  table1=$('#line-item-report_'+i+'').DataTable();
						  var reportTable = document.getElementById('line-item-report-tbody_'+i+'');
						  
						  var rowcount =reportTable.rows.length;
						  for (var x = rowcount - 1; x >= 0; x--)
						  {
							  reportTable.deleteRow(x);
						  }
				  
						   if (table1 !== null) {
								 table1.clear();
								 table1.destroy();
								 }

							
							for(var j=0;j<lineitems_base[i].length;j++)
							{
								var newRow = reportTable.insertRow(count);
								
								 
								var newCell  = newRow.insertCell(0);
								newCell.innerHTML = lineitems_base[i][j]["website"]; 
								var newCell  = newRow.insertCell(1);
								newCell.innerHTML = parseInt(lineitems_base[i][j]["impressions"]).toLocaleString("en")
								var newCell  = newRow.insertCell(2);
								newCell.innerHTML =  Math.round(parseInt(lineitems_base[i][j]["clicks"]),2);
								var newCell  = newRow.insertCell(3);
								newCell.innerHTML =  ((lineitems_base[i][j]["clicks"]/lineitems_base[i][j]["impressions"])*100).toFixed(2)+"%";
			   
							}
						}	
		
						
						

				
			
			},
			error: function (responseData, textStatus, errorThrown) {
			  console.log(responseData)	
			 console.log('Error : ' + responseData)
			}

		    });

		   
		
		    
		//alert(year+" || "+month);

	}

	/*** All linietems details */
	function getAllLineItem(lineItem)
	{
		var ariaVnow= "";
		var ariaVmax="";
		var table1;
		var finalResult = "";
		var objData = "";
		var count = 0 ;
	
		
		var jsonObj = {
    			lineItem :lineItem
    		}

		$.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"ByAllLineitem",
			data : jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
				var result = JSON.parse(responseData);
				var dt = result["rows"]	
				 	for (var index in dt)
						{
				$(".dfp-img").show(); 
							var objData = dt[index];
							ariaVmax=parseInt(objData["goal"]);
							ariaVnow=parseInt(objData["sum"]);
							
					var ctr =(objData["clicks"]/objData["sum"])*100;
var template =' <div class="infowrap-block dfp-infowrap clearfix"> \
			<div class="row campain-row" style="margin-top:5px"> \
			<div class="col-lg-4"> \
				<div class="bg-gray"> \
				<h3>Line Item Name</h3> \
				<p>'+objData["name"]+'</p> \
				</div> \
			</div> \
			<div class="col-lg-2"> \
				<div class="bg-gray adserve-first-block"> \
				<h3>Start Date</h3> \
				<p>'+moment.utc(objData["startdate"]).format('DD-MMM-YYYY') +'</p> \
				</div> \
				</div> \
				<div class="col-lg-2"> \
				<div class="bg-gray adserve-first-block adserve-end-date"> \
				<h3>End Date</h3> \
				<p>'+moment.utc(objData["enddate"]).format('DD-MMM-YYYY') +'</p></div>  </div> <div class="col-lg-2"> \
		<div class="bg-gray"> \
		  <h3>Rate</h3> \
		  <p>£ '+parseFloat(objData["rate"].toFixed(2)).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})+'</p> \
		</div> \
	  </div> \
	</div> \
	<div class="row sum-five-col" style="margin-top:15px">\
	<div class="col-lg-12">\
		<div class="adserve-first-block" style="display:block;float:none">\
		<h3>GOAL PROGRESS</h3>\
		<div class="col-lg-7"><div class="row" style="margin-right: -24px;">\
			<div class="progress" style="background:#ddd">\
				<div class="progressbar progress-bar progress-bar-analytics progress-bar-striped" role="progressbar" aria-valuenow='+ariaVnow+' aria-valuemin="0" aria-valuemax='+ariaVmax+' style="width:'+pBar(ariaVnow,ariaVmax)+';background-color:'+pColor(ariaVnow,ariaVmax)+'">'+ariaVnow.toLocaleString("en")+' ('+parseFloat((ariaVnow/ariaVmax)*100).toFixed(1).toLocaleString("en")+'%)\
				</div>\
			</div>\
		</div></div>\
		<div class="col-lg-1"><div class="">\
			<span class="target">'+ariaVmax.toLocaleString("en")+'</span>\
		</div></div>\
		</div>\
	</div>\
</div>\
	<div class="row sum-five-col adserve-list" style="margin-top:10px"> \
	  <div class="col-lg-2"> \
		<div class="info-box"> <span class="info-box-icon bg-green"><img src="../img/views.png" alt="Total Impressions"></span> \
		  <div class="info-box-content"> <span class="info-box-text">Impressions</span> <span class="info-box-number" id="dfpImpressions">'+parseInt(objData["sum"]).toLocaleString("en") +'</span> </div> \
		</div> \
	  </div> \
	  <div class="col-lg-2"> \
		<div class="info-box"> <span class="info-box-icon bg-green"><img src="../img/clicks.png" alt="Total Clicks"></span> \
		  <div class="info-box-content"> <span class="info-box-text">Clicks</span> <span class="info-box-number" id="dfpClicks">'+parseInt(objData["clicks"]).toLocaleString("en")+'</span> </div>  \
		</div> \
	  </div> \
	  <div class="col-lg-2"> \
		<div class="info-box"> <span class="info-box-icon bg-green"><img src="../img/rate.png" alt="Click Through Rate"></span> \
		  <div class="info-box-content"> <span class="info-box-text">Click Through Rate</span> <span class="info-box-number" id="dfpTRate">'+parseFloat(ctr.toFixed(2)).toLocaleString("en")+'%</span> </div> \
		</div> \
	  </div> \
	  <div class="col-lg-2"> \
		<div class="info-box"> <span class="info-box-icon bg-green"><img src="../img/web.png" alt="website"></span> \
		  <div class="info-box-content"> <span class="info-box-text">Website</span> <span class="info-box-number" id="AmountSpent">'+objData["website"]+'</span> </div> \
		</div> \
	  </div> ';


	$("#d_linitems").append(template);

							
							
						}	
				
			
			},
			error: function (responseData, textStatus, errorThrown) {
			  console.log(responseData)	
			  console.log('Error : ' + responseData)
			}

		    });

		

	}


/** facebook lineitem*/

	function getFacebookLineItem(lineItem)
	{
		var table1;
		var finalResult = "";
		var objData = "";
		var count = 0 ;
	
		
		var jsonObj = {
    			lineItem :lineItem
    		}

		$.ajax({
			type: "POST",
			async :false,
			url:apiUrl+"FacebookLineitem",
			data : jsonObj,
			cache: false,
			crossDomain: true,
			success: function (responseData, textStatus, jqXHR) {
				var result = JSON.parse(responseData);
				var dt = result["rows"]	
				 	for (var index in dt)
						{
				$(".fb-img").show(); 
							var objData = dt[index];

					var ctr =(objData["clicks"]/objData["sum"])*100;
var templates ='<div class="infowrap-block facebook-infowrap clearfix"> \
    <div class="row campain-row" style="margin-top:10px;"> \
      <div class="col-lg-4 col-md-3 col-sm-4"> \
        <div class="bg-gray"> \
          <h3>Line Item Name</h3>  \
          <p>'+objData['name']+'</p></div>  </div> \
          <div class="col-lg-2 col-md-3 col-sm-4"> \
        <div class="bg-gray adserve-first-block"> \
          <h3>Start Date</h3> \
          <p>'+moment.utc(objData["start_time"]).format('DD-MMM-YYYY')+'</p> \
        </div> \
        </div>\
          <div class="col-lg-2 col-md-3 col-sm-4"> \
        <div class="bg-gray adserve-first-block adserve-end-date"> \
          <h3>End Date</h3>  \
          <p>'+moment.utc(objData["end_time"]).format('DD-MMM-YYYY')+'</p> \
        </div> \
      </div> \
      <div class="col-lg-2 col-md-3 col-sm-4"> \
        <div class="bg-gray"> \
          <h3>Rate</h3> \
          <p>£ '+parseFloat(objData['rate'].toFixed(2)).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) +'</p> \
        </div> \
      </div> \
    </div> \
    <div class="row sum-five-col adserve-list"> \
      <div class="col-lg-2 col-md-2 col-sm-2"> \
        <div class="info-box"> <span class="info-box-icon bg-fb"><img src="../img/views.png" alt="Total Impressions"></span> \
          <div class="info-box-content"> <span class="info-box-text">Impressions</span> <span class="info-box-number" id="dfpImpressions">'+parseInt(objData['impression']).toLocaleString("en")+'</span> </div> \
        </div> \
      </div> \
      <div class="col-lg-2 col-md-2 col-sm-2"> \
        <div class="info-box"> <span class="info-box-icon bg-fb"><img src="../img/clicks.png" alt="Total Clicks"></span> \
          <div class="info-box-content"> <span class="info-box-text">Clicks</span> <span class="info-box-number" id="dfpClicks">'+parseInt(objData["clicks"]).toLocaleString("en")+'</span> </div> </div> \
      </div> \
      <div class="col-lg-2 col-md-2 col-sm-2"> \
        <div class="info-box"> <span class="info-box-icon bg-fb"><img src="../img/rate.png" alt="Click Through Rate"></span> \
          <div class="info-box-content"> <span class="info-box-text">Click Through Rate</span> <span class="info-box-number" id="dfpTRate">'+parseFloat(objData["ctr"].toFixed(2)).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})+'%</span> </div> \
        </div> \
      </div> \
      </div> \
    </div> \
  </div> \
</div>';


	$("#d_facebook").append(templates);

							
							
						}	
				
			
			},
			error: function (responseData, textStatus, errorThrown) {
			  console.log(responseData)	
			  console.log('Error : ' + responseData)
			}

		    });

		

	}


	
	
	function getLineItemCreatives(sel_lineitem)
	{
		var jsonObj = {
			lineItem : sel_lineitem
		}
		$.ajax({
		type: "POST",
		async :true,
		url:apiUrl+"lineItemCreatives",
		data : jsonObj,
		cache: false,
		crossDomain: true,
		success: function (responseData, textStatus, jqXHR) {
			var result = JSON.parse(responseData);
			var dt = result["rows"]	
			var a ='slideractive';
			var ref="itemactive";
			var creative="";
			var temp= [];
			var oid="";

			var categories =[];
			for (var i=0 ; i<dt.length; i ++)
				{
					var objData = dt[i];

					categories[i] ={
						
						   "name":objData['name'],
						   "preview":objData['previewurl'],
						   
						
					};
					
				

				}

				 temp = _.mapValues(_.groupBy(categories, 'name'),
				clist => clist.map(categories => _.omit(categories, 'name'))  );
				

				


				var preview_count = $.map(temp, function(value, index) {
					return [value];
				});

				

			for (var j=0;j<preview_count.length;j++)
			{
				var preview ='<div id="creativepreview_'+j+'" class="carousel slide carousel-block" data-ride="carousel">  \
						<ol class="carousel-indicators" id="clickers_'+j+'"> \
						</ol> \
						<div class="carousel-inner" id="imagesslider_'+j+'"> </div> \
						<a class="left carousel-control" href="#creativepreview" data-slide="prev"> <span class="fa fa-chevron-left"></span> <span class="sr-only">Previous</span> </a> <a class="right carousel-control" href="#creativepreview" data-slide="next"> <span class="fa fa-chevron-right"></span> <span class="sr-only">Next</span> </a> </div> \
					</div>';

					$("#preview_line").append(preview);

		for(var k=0;k<preview_count[j].length;k++)
		{

			
			if(k==0)
			{
				var slider='<li class='+a+' data-target="#creativepreview" data-slide-to='+k+' ></li>';
				var template='<div class="active item"><iframe src='+preview_count[j][k]["preview"].replace('&impl=ifr','')+'></iframe></div>' ;

			}else
			{
				var slider="<li data-target=#creativepreview data-slide-to="+k+" ></li>";
				var template='<div class="item"><iframe  src='+preview_count[j][k]["preview"].replace('&impl=ifr','')+'></iframe></div>' ;
			}
			
		   $('#clickers_'+j+'').append(slider);
		   $('#imagesslider_'+j+'').append(template);
		}	
		}





				

				
		},
		error: function (responseData, textStatus, errorThrown) {
		  console.log(responseData)	
		 console.log('Error : ' + responseData)
		}

		});
	}


