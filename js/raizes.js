   function bisseccao()
    {
		$('#plotBissec').html(" ");
		var funcao, intervalo, epson, x, a, b, fx, fa, i;
		var aborta = 400;	
		var metodo = "#plotBissec"
		if($('#bisseccaoFormula').val() == undefined || $('#bisseccaoIntervalo').val() == undefined || $('#bisseccaoEpson').val() == undefined){
			return;
		}
		funcao = $('#bisseccaoFormula').val();
		intervalo = $('#bisseccaoIntervalo').val().split("/");
		epson = parseFloat($('#bisseccaoEpson').val());
		a = parseFloat(intervalo[0]);
		b = parseFloat(intervalo[1]);
		fx = parseFloat(1);
		i = parseInt(0);		
		var data = '[{"fn": "'+funcao+'", "sampler": "builtIn", "graphType": "polyline"}, { "points": [['+a+', -1],['+a+', 1]], "fnType": "points", "graphType": "polyline"},{ "points": [['+b+', -1],['+b+', 1]], "fnType": "points", "graphType": "polyline"}]';
		var annotat = '[{"x": '+a+', "text": "Intervalo = '+a+'"}, {"x": '+b+', "text": "Intervalo = '+b+'"}]';	
		while (Math.abs(fx) > epson) {
			x = (a + b)/2;
			fx = fxCalc(funcao, x);
			fa = fxCalc(funcao, a);;
			if ((fx * fa) > 0 ) {
				a = x;
			} else {
				b = x;
			}

			if (i > aborta) {
				exibeErro(aborta);
				break;
			}
			i++;
		}
		var xDomain;
		if(Math.abs(a) > Math.abs(b)){
			xDomain = a;
		}
		else{
			xDomain = b;
		}
		drawChart(data, annotat, metodo, xDomain*2, xDomain*2);	
		if (i < aborta) {
			$('#bisseccaoIteracoes').html(String(i));
			$('#bisseccaoX').html(String(x));
		}
	}
	
	
	function cordas()
	{
		$('#plotCordas').html(" ");
		var funcao, intervalo, epson, x, a, b, i;
		var metodo = "#plotCordas";
		var aborta = 400;
		if($('#cordasFormula').val() == undefined || $('#cordasIntervalo').val() == undefined || $('#cordasEpson').val() == undefined){
			return;
		}
		funcao = $('#cordasFormula').val();
		intervalo = $('#cordasIntervalo').val().split("/");
		epson = parseFloat($('#cordasEpson').val());
		a  = parseFloat(intervalo[0]);
		b  = parseFloat(intervalo[1]);		
		var auxB = b;
		var auxA = a;		
		var data = '[{"fn": "'+funcao+'", "sampler": "builtIn", "graphType": "polyline"}, { "points": [['+a+', -1],['+a+', 1]], "fnType": "points", "graphType": "polyline"},{ "points": [['+b+', -1],['+b+', 1]], "fnType": "points", "graphType": "polyline"}]';
		var annotat = '[{"x": '+a+', "text": "Intervalo = '+a+'"}, {"x": '+b+', "text": "Intervalo = '+b+'"}]';		
		for(i = 0; i<aborta; i++){
			x = b-((fxCalc(funcao, b)*(b-a))/(fxCalc(funcao, b)-fxCalc(funcao, a)));
			if(Math.abs(x-b)<epson || (Math.abs(x-b))/(Math.abs(x))<epson || Math.abs(fxCalc(funcao, x))<epson){
				$('#cordasIteracoes').html(i);
				$('#cordasX').html(x);
				var xDomain;
				if(Math.abs(auxA) > Math.abs(auxB)){
					xDomain = auxA;
				}
				else{
					xDomain = auxB;
				}
				drawChart(data, annotat, metodo, xDomain*2, xDomain*2);
				return;
			}
			a = b;
			b = x;
		}
		exibeErro(aborta);
	}
	
	function newton()
	{
		$('#plotNewton').html(" ");
		var funcao, auxfuncao, intervalo, epson, x, a, b, fx, fdx, auxFdx, fdxx, i;
		var metodo = "#plotNewton";
		var aborta = 400;
		if($('#newtonFormula').val() == undefined || $('#newtonIntervalo').val() == undefined || $('#newtonEpson').val() == undefined){
			return;
		}
		funcao 	  = $('#newtonFormula').val();
		intervalo = $('#newtonIntervalo').val().split("/");
		epson 	  = parseFloat($('#newtonEpson').val());
		fdx 	  = $('#newtonDerivadaUm').val();
		fdxx 	  = $('#newtonDerivadaDois').val();
		
		a  = parseFloat(intervalo[0]);
		b  = parseFloat(intervalo[1]);
		auxFdx = fdx; 
		auxFuncao = funcao; 
		x = b;
		fdx = fxCalc(fdx, x);
		fdxx = fxCalc(fdxx, x);
		var data = '[{"fn": "'+funcao+'", "sampler": "builtIn", "graphType": "polyline"}, { "points": [['+a+', -1],['+a+', 1]], "fnType": "points", "graphType": "polyline"},{ "points": [['+b+', -1],['+b+', 1]], "fnType": "points", "graphType": "polyline"}]';
		var annotat = '[{"x": '+a+', "text": "Intervalo = '+a+'"}, {"x": '+b+', "text": "Intervalo = '+b+'"}]';
		if(fdxx > 0) 
		{
			if(fdx > 0){
				x = b;
			}
			else{
				x = a;
			}						
		}
		else{
			if(fdx > 0){
				x = b;
			}
			else{
				x = a;
			}						
		}		
		funcao = fxCalc(funcao, x);		
		fdx = fxCalc(auxFdx, x);
		i = 0;				
		while(Math.abs(funcao) > epson && i<200){		
			x = x-(funcao/fdx); 
			funcao = fxCalc(auxFuncao, x);
			fdx = fxCalc(auxFdx, x);	
			i++;
			if (i > aborta) {
				exibeErro(aborta);
				break;
			}
		}
		var xDomain;
		if(Math.abs(a) > Math.abs(b)){
			xDomain = a;
		}
		else{
			xDomain = b;
		}
		drawChart(data, annotat, metodo, xDomain*2, xDomain*2);
		if (i < aborta) {
			$('#newtonIteracoes').html(String(i));
			$('#newtonX').html(String(x));
		}	
	}
