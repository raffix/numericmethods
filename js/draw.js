function drawChart(data, annotat, metodo, zx, zy)
    {   
		console.log('intera');
		if($(window).width() > 690){
			var chartWidth = $(window).width()*0.35;
			var chartHeight = $(window).height()*0.50;
			plot(data, annotat, metodo, chartWidth, chartHeight, zx, zy);	
		}
		else {
			var	chartWidth = $(window).width()*0.70;
			var	chartHeight = $(window).height()*0.50;				  
			plotPopup(data, annotat, metodo, chartWidth, chartHeight, zx, zy);
		}	
		$( window ).resize(function() {
			var g = 1;
			if($(window).width() > 690){
				chartWidth = $(window).width()*0.35;
				chartHeight = $(window).height()*0.50;
				plot(data, annotat, metodo, chartWidth, chartHeight, zx, zy);
			}
			else {
				chartWidth = $(window).width()*0.70;
				chartHeight = $(window).height()*0.50;
				plotPopup(data, annotat, metodo, chartWidth, chartHeight, zx, zy);	
			}
				
		});
			
	}
	
	function plot(data, annotat, metodo, chartWidth, chartHeight, zx, zy, metodo2)
	{	
		var btn = metodo + "btn";
		var findPopup = $(metodo).find('.modal-content');
		if(findPopup.length > 0) {
			$('#plotmodel').closeModal();
			$(metodo).html("");
			$(btn).html("");
		}	
		zx = Math.abs(zx);
		zy = Math.abs(zy);	
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
	
	function plotPopup(data, annotat, metodo, chartWidth, chartHeight, zx, zy){		
		var btn = metodo + "btn";
		$(btn).html(
			'<a class="waves-effect waves-light btn modal-trigger" href="#plotmodel">Abrir Gráfico</a>'
		);
		$(metodo).html(			
		    '<div id="plotmodel" class="modal modal-fixed-footer">'+
			'<div class="modal-content">'+
			'<h4>Gráfico</h4>'+			
			'</div>'+
			'<div class="modal-footer">'+
			'<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Fechar</a>'+
			'</div>'+
		   ' </div>'
		);
		plot(data, annotat, '.modal-content', chartWidth, chartHeight, zx, zy);
		$('.modal-trigger').leanModal({
			  closeIcon: true, dismissible: true
		});		
				
	}
	
	
	