	var menu = [
		['Raízes', 'raizes.html'],
		['SELA', 'sistemas.html'],
		['Ajuste de Curvas', 'MQ.html']
	];

	function menuAtivo(ativo)
	{
		for (var i = 0; i < menu.length; i++) {
			$("#nav-mobile").append('<li><a href="'+menu[i][1]+'">'+menu[i][0]+'</a></li>');
		}
	}


	var aborta = 15000;
	// media query ---- Em desenvolvimento....
	if($(window).width() > 580){
		  var chartWidth = $(window).width()*0.30;
		  var chartHeight = $(window).height()*0.30;		  
	  }
	  else {
		var	chartWidth = $(window).width()*0.90;
		var	chartHeight = $(window).height()*0.50;				  
	  }
	
	$( window ).resize(function() {
	  var g = 1;
	  if($(window).width() > 580){
		  chartWidth = $(window).width()*0.30;
		  chartHeight = $(window).height()*0.30;
	  }
	  else {
		  chartWidth = $(window).width()*0.90;
		  chartHeight = $(window).height()*0.50;		
	  }
	  bisseccao();
	  cordas();
	  newton();
	  MinimosQuadrados(); 	
	});
	
	//----------------
	
	function replaceX(funcao, x)
	{
		var expression = /[xX]/g;
		return funcao.replace(expression,String(x));
	}

	function substitui(funcao)
    	{
    		if(funcao.match(/e^/)){
    			funcao = funcao.replace("e",math.e);
    		}
		return funcao;
     	}
	
    function limpar(metodo)
    {
    	$(metodo).find('input').each(
    		function()
    		{
    			$(this).val("");
    		}
    	);
    }
   
    
    function drawChart(data, annotat, metodo)
    {   	
		
		functionPlot({
			target: metodo,
			xAxis: {domain: [-100, 100]},
			yAxis: {domain: [-100, 100]},
			width: chartWidth,
			height: chartHeight,	
			data: JSON.parse(data), 
			annotations: JSON.parse(annotat)
		});
		
	}

	function exibeErro()
	{
		Materialize.toast('Execução abortada. Excedido '+aborta+' iterações!', 6000); 
	}

	function matrixParser(x, order){
		//var order = x.indexOf(";");
		//order = (order+1)/2;
		var p = x.indexOf(";");
	    order = parseFloat(order.charAt(0));
		x = x.replace(/;/g,"");
		var y = x.split(" "); 
		var matrix = [], i, k;
	    for (i = 0, k = -1; i < y.length; i++) {
	        if (i % order === 0) {
	            k++;
	            matrix[k] = [];
	        }
	        matrix[k].push(y[i]);
	    }
		return matrix;	
	}
	
