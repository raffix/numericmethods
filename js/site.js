	var menu = [
		['Início', 'index.html'],
		['Raízes', 'raizes.html'],
		['SELA', 'sistemas.html'],
		['Integrais', 'integrais.html'],
		['Ajuste de Curvas', 'ajustes.html']
	];

	function menuAtivo()
	{
		for (var i = 0; i < menu.length; i++) {
			$("#nav-mobile").append('<li><a href="'+menu[i][1]+'">'+menu[i][0]+'</a></li>');
		}
	}
	
	//----------------
	
	function replaceX(funcao, x)
	{
		var expression = /[xX]/g;
		return funcao.replace(expression,String(x));
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
	function fxCalc(fx, x){
		fx = fx.replace(/x/g, parseFloat(x));
		fx = parser.parse(fx);
		return fx;	
	}		
   
    function exibeErro(aborta)
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

	menuAtivo();