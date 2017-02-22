// Metodos
    
    function bisseccao()
    {
		$('#plotBissec').html(" ");
		var funcao, intervalo, epson, x, a, b, fx, fa, i;	
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
		var data = '[{"fn": "'+funcao+'"}, { "points": [['+a+', -1],['+a+', 1]], "fnType": "points", "graphType": "polyline"},{ "points": [['+b+', -1],['+b+', 1]], "fnType": "points", "graphType": "polyline"}]';
		var annotat = '[{"x": '+a+', "text": "Intervalo = '+a+'"}, {"x": '+b+', "text": "Intervalo = '+b+'"}]';	
		while (Math.abs(fx) > epson) {
			x = (a + b)/2;
			fx = math.eval(replaceX(funcao,x));
			fa = math.eval(replaceX(funcao,a));
			if ((fx * fa) > 0 ) {
				a = x;
			} else {
				b = x;
			}

			if (i > aborta) {
				exibeErro();
				break;
			}
			i++;
		}
		drawChart(data, annotat, metodo);
		//mostrar ao usuario numero de iteracoes e valor de x.

		if (i < aborta) {
			$('#bisseccaoIteracoes').html(String(i));
			$('#bisseccaoX').html(String(x));
		}
	}
	
	
	function cordas()
	{
		$('#plotCordas').html(" ");
		var funcao, intervalo, epson, x, a, b, fx, fa, fb, i;
		var metodo = "#plotCordas";
		if($('#cordasFormula').val() == undefined || $('#cordasIntervalo').val() == undefined || $('#cordasEpson').val() == undefined){
			return;
		}
		funcao = $('#cordasFormula').val();
		intervalo = $('#cordasIntervalo').val().split("/");
		epson = parseFloat($('#cordasEpson').val());
		funcao = substitui(funcao);
		
		a  = parseFloat(intervalo[0]);
		b  = parseFloat(intervalo[1]);
		fa = math.eval(replaceX(funcao,a));
		fb = math.eval(replaceX(funcao,b));
		x  = (b* fa - a*fb)/(fa-fb);
		fx = math.eval(replaceX(funcao,x));
		i  = parseInt(0);
		var data = '[{"fn": "'+funcao+'"}, { "points": [['+a+', -1],['+a+', 1]], "fnType": "points", "graphType": "polyline"},{ "points": [['+b+', -1],['+b+', 1]], "fnType": "points", "graphType": "polyline"}]';
		var annotat = '[{"x": '+a+', "text": "Intervalo = '+a+'"}, {"x": '+b+', "text": "Intervalo = '+b+'"}]';
		
		
		if(fa * fx > 0) {
			while (Math.abs(fx) > epson) {
				x  = ((x* fa) - (a*fx))/(fa-fx);
				fx = math.eval(replaceX(funcao,x));
				i++;
				data += ',{ "points": [['+x+', -1],['+x+', 1]], "fnType": "points", "graphType": "polyline"}';
				annotat += ',{"x": '+x+'}';
			}
		} else {
			while (Math.abs(fx) > epson ){
				x = ((b* fx) - (x*fb))/(fx-fb);
				fx = math.eval(replaceX(funcao,x));
				i++;
				data += ',{ "points": [['+x+', -1],['+x+', 1]], "fnType": "points", "graphType": "polyline"}';
				annotat += ',{"x": '+x+'}';
			}
		}
		drawChart(data, annotat, metodo);
		if (i < aborta) {
			$('#cordasIteracoes').html(String(i));
			$('#cordasX').html(String(x));
		}
	}
	
	function newton()
	{
		$('#plotNewton').html(" ");
		var funcao, auxfuncao, intervalo, epson, x, a, b, fx, fdx, auxFdx, fdxx, i;
		var metodo = "#plotNewton";
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
		auxFdx = fdx; //auxiliar da derivada, para deixar a função como string para calcular.
		auxFuncao = funcao; //auxiliar da funcao, para deixar a função como string para calcular.
		x = b;
		fdx = math.eval(fdx.replace(/x/g,String(x)));
		fdxx = math.eval(fdxx.replace(/x/g,String(x)));
		var data = '[{"fn": "'+funcao+'"}, { "points": [['+a+', -1],['+a+', 1]], "fnType": "points", "graphType": "polyline"},{ "points": [['+b+', -1],['+b+', 1]], "fnType": "points", "graphType": "polyline"}]';
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
		funcao = math.eval(funcao.replace(/x/g,String(x)));		
		fdx = math.eval(auxFdx.replace(/x/g,String(x)));
		i = 0;				
		while(Math.abs(funcao) > epson && i<200){		
			x = x-(funcao/fdx); 
			funcao = math.eval(auxFuncao.replace(/x/g,String(x)));
			fdx = math.eval(auxFdx.replace(/x/g,String(x)));	
			i++;
			if (i > aborta) {
				exibeErro();
				break;
			}
		}
		drawChart(data, annotat, metodo);
		if (i < aborta) {
			$('#newtonIteracoes').html(String(i));
			$('#newtonX').html(String(x));
		}	
	}
