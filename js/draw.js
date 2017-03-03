function drawChart(data, annotat, metodo, zx, zy)
    {   
		console.log('intera');
		if($(window).width() > 580){
			var chartWidth = $(window).width()*0.35;
			var chartHeight = $(window).height()*0.50;		  
		}
		else {
			var	chartWidth = $(window).width()*0.90;
			var	chartHeight = $(window).height()*0.50;				  
		}
		plot(data, annotat, metodo, chartWidth, chartHeight, zx, zy);
		$( window ).resize(function() {
			var g = 1;
			if($(window).width() > 580){
				chartWidth = $(window).width()*0.35;
				chartHeight = $(window).height()*0.50;
			}
			else {
				chartWidth = $(window).width()*0.90;
				chartHeight = $(window).height()*0.50;	   	
			}
			plot(data, annotat, metodo, chartWidth, chartHeight, zx, zy);
		});
			
	}
	function plot(data, annotat, metodo, chartWidth, chartHeight, zx, zy)
	{
		console.log(data);
		functionPlot({
			target: metodo,
			xAxis: {domain: [-zx, zx]},
			yAxis: {domain: [-zy, zy]},
			width: chartWidth,
			height: chartHeight,	
			data: JSON.parse(data), 
			annotations: JSON.parse(annotat)
		});
	}
	
	
	