	var chartWidth = 500;
	var chartHeight = 500;
	
	if (matchMedia) {
	  var mq = window.matchMedia("(min-width: 500px)");
	  mq.addListener(WidthChange);
	  WidthChange(mq);
	}

	function WidthChange(mq) 
	{
	  if (mq.matches) {
		chartWidth = 500;
		chartHeight = 500;
	  } else {
		chartWidth = 200;
		chartHeight = 200;
	  }

	}

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
       
    function drawChart(a, b, funcao)
    {
    	var data =[];
    	var intervalo, x, fx;
    	intervalo = parseFloat((b-a)/10);
    	for (x = intervalo; x < b; x +=intervalo) {
    		fx = math.eval(funcao.replace(	"x",String(x)));
    		data.push([x,fx]);
    	}
	}
    
    function bisseccao()
    {
		$('#plotBissec').html(" ");
		var funcao, intervalo, epson, x, a, b, fx, fa, i;	
		var metodo = "#plotBissec"
		funcao = $('#bisseccaoFormula').val();
		intervalo = $('#bisseccaoIntervalo').val().split("/");
		epson = parseFloat($('#bisseccaoEpson').val());
		a = parseFloat(intervalo[0]);
		b = parseFloat(intervalo[1]);
		fx = parseFloat(1);
<<<<<<< HEAD
		i = parseInt(0);		
		var data = '{"fn": "'+funcao+'"}, { "points": [['+a+', -1],['+a+', 1]], "fnType": "points", "graphType": "polyline"},{ "points": [['+b+', -1],['+b+', 1]], "fnType": "points", "graphType": "polyline"}';
		var annotat = '{"x": '+a+', "text": "Intervalo = '+a+'"}, {"x": '+b+', "text": "Intervalo = '+b+'"}';
=======
		i = parseInt(0);
		
		//drawChart(a, b, funcao);
>>>>>>> 7fdaa416c23189a4fec2f000137e22238af49b3f
		console.log(fx);
		while (Math.abs(fx) > epson) {
			x = (a + b)/2;
			fx = math.eval(replaceX(funcao,x));
			fa = math.eval(replaceX(funcao,a));
			if ((fx * fa) > 0 ) {
				a = x;
			} else {
				b = x;
			}
<<<<<<< HEAD
			data += ',{ "points": [['+x+', -1],['+x+', 1]], "fnType": "points", "graphType": "polyline"}';
			annotat += ',{"x": '+x+'}';
=======
			
>>>>>>> 7fdaa416c23189a4fec2f000137e22238af49b3f
			if (i > 1000 ){
				break;
			}
			i++;
		}
		drawChart(data, annotat, metodo);
		//mostrar ao usuario numero de iteracoes e valor de x.
		$('#bisseccaoIteracoes').html(String(i));
		$('#bisseccaoX').html(String(x));
	}
	
	
	function cordas()
	{
		$('#plotCordas').html(" ");
		var funcao, intervalo, epson, x, a, b, fx, fa, fb, i;
		var metodo = "#plotCordas";
		funcao = $('#cordasFormula').val();
		intervalo = $('#cordasIntervalo').val().split("/");
		epson = parseFloat($('#cordasEpson').val());
		
		a  = parseFloat(intervalo[0]);
		b  = parseFloat(intervalo[1]);
		fa = math.eval(funcao.replace("x",String(a)));
		fb = math.eval(funcao.replace("x",String(b)));
		x  = (b* fa - a*fb)/(fa-fb);
		fx = math.eval(funcao.replace("x",String(x)));
		i  = parseInt(0);
		var data = '{"fn": "'+funcao+'"}, { "points": [['+a+', -1],['+a+', 1]], "fnType": "points", "graphType": "polyline"},{ "points": [['+b+', -1],['+b+', 1]], "fnType": "points", "graphType": "polyline"}';
		var annotat = '{"x": '+a+', "text": "Intervalo = '+a+'"}, {"x": '+b+', "text": "Intervalo = '+b+'"}';
		
		
		if(fa * fx > 0) {
			while (Math.abs(fx) > epson) {
				x  = ((x* fa) - (a*fx))/(fa-fx);
				fx = math.eval(funcao.replace("x",String(x)));
				i++;
				data += ',{ "points": [['+x+', -1],['+x+', 1]], "fnType": "points", "graphType": "polyline"}';
				annotat += ',{"x": '+x+'}';
			}
		} else {
			while (Math.abs(fx) > epson ){
				x = ((b* fx) - (x*fb))/(fx-fb);
				fx = math.eval(funcao.replace("x",String(x)));
				i++;
				data += ',{ "points": [['+x+', -1],['+x+', 1]], "fnType": "points", "graphType": "polyline"}';
				annotat += ',{"x": '+x+'}';
			}
		}
		drawChart(data, annotat, metodo);
		$('#cordasIteracoes').html(String(i));
		$('#cordasX').html(String(x));
	}
	
function newton()
	{
		$('#plotNewton').html(" ");
		var funcao, auxfuncao, intervalo, epson, x, a, b, fx, fdx, auxFdx, fdxx, i;
		var metodo = "#plotNewton";
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
		var data = '{"fn": "'+funcao+'"}, { "points": [['+a+', -1],['+a+', 1]], "fnType": "points", "graphType": "polyline"},{ "points": [['+b+', -1],['+b+', 1]], "fnType": "points", "graphType": "polyline"}';
		var annotat = '{"x": '+a+', "text": "Intervalo = '+a+'"}, {"x": '+b+', "text": "Intervalo = '+b+'"}';
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
			data += ',{ "points": [['+x+', -1],['+x+', 1]], "fnType": "points", "graphType": "polyline"}';
			annotat += ',{"x": '+x+'}';	
		}
		drawChart(data, annotat, metodo);
		$('#newtonIteracoes').html(String(i));
		$('#newtonX').html(String(x));
			
}	
