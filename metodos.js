	// media query ---- Em desenvolvimento....
	var chartWidth = 500;
	var chartHeight = 500;
	
	if (matchMedia) {
	  var mq = window.matchMedia("(min-width: 500px)");
	  mq.addListener(WidthChange);
	  WidthChange(mq);
	}
	function WidthChange(mq) {
	  if (mq.matches) {
		chartWidth = 500;
		chartHeight = 500;
	  } else {
		chartWidth = 200;
		chartHeight = 200;
	  }

	}
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
		var Steste = '{	"target": "'+metodo+'", "width": '+chartWidth+', "height": '+chartWidth+',"xAxis": { "label": "real" }, "yAxis": { "label": "imaginary"},"grid": "true","data": ['+data+'], "annotations": ['+annotat+']}';
		functionPlot(JSON.parse(Steste));
		
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
		i = parseInt(0);		
		var data = '{"fn": "'+funcao+'"}, { "points": [['+a+', -1],['+a+', 1]], "fnType": "points", "graphType": "polyline"},{ "points": [['+b+', -1],['+b+', 1]], "fnType": "points", "graphType": "polyline"}';
		var annotat = '{"x": '+a+', "text": "Intervalo = '+a+'"}, {"x": '+b+', "text": "Intervalo = '+b+'"}';
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
			data += ',{ "points": [['+x+', -1],['+x+', 1]], "fnType": "points", "graphType": "polyline"}';
			annotat += ',{"x": '+x+'}';
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

function matrixParser(x){
	var order = x.indexOf(";");
	order = (order+1)/2;		
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

function Jacobi() {
	$('#JacobiIteracoes').html(" ");
	$('#JacobiX').html(" ");
	var matriz = $('#JacobiA').val();
	var bb = $('#JacobiB').val();
	var A = matrixParser(matriz);
	var XX = $('#JacobiX0').val();
	var X = XX.split(" ");
	var x = new Array();
	var E = parseFloat($('#JacobiEpson').val());
	var b = bb.split(" ");
	if (XX.length == 0) {	
		for (var k = 0; k < b.length; k++)
		{
			X[k] = Math.floor((Math.random() * 10000) + 1);
		}
	}	
	var m = 1000;//Numero máximo de iterações
	var ni = 0;//Contador de iterações
	var continuar = true;
	var inter;

	while (continuar && ni < m) {
	    for (var i=0; i < b.length; i++) {
	        soma = 0;
	        for (var j = 0; j < b.length; j++) {
	            if (j != i) {
	                soma = soma + A[i][j]*X[j]/A[i][i];
	            }
	            x[i] = (b[i]/A[i][i]) - soma;
	        }
		}
		inter = Math.abs(math.norm(x) - math.norm(X));
	    if (inter < E) {
	        continuar = false;
		} else {
	        X=x.slice(0);
		}
	    ni = ni + 1;
	}
	$('#JacobiIteracoes').html(String(ni));
	for (i=0;i<X.length;i++)
	{
	$('#JacobiX').append("X["+i+"] = " + X[i] + "<br>");
	}
	
}


function gaussJacobi() {
	var matriz = $('#GaussA').val();
	var bb = $('#GaussB').val();
	var A = matrixParser(matriz);
	var XX = $('#GaussX0').val();
	var X = XX.split(" ");
	var x = new Array();
	var E = parseFloat($('#GaussEpson').val());
	var b = bb.split(" ");
	if (XX.length == 0) {	
		for (var k = 0; k < b.length; k++)
		{
			X[k] = Math.floor((Math.random() * 10000) + 1);
		}
	}	
	var m = 1000;//Numero máximo de iterações
	var ni = 0;//Contador de iterações
	var continuar = true;
	var inter;

	while (continuar && ni < m) {
	    for (var i=0; i < b.length; i++) {
	        soma = 0;
	        for (var j = 0; j < i; j++) {
                	soma = soma + A[i][j] * x[j];
	        }
	        for (var j = i + 1; j < b.length; j++) {
                	soma = soma + A[i][j] * X[j];
	        }
		x[i] = (b[i] - soma) / A[i][i];
	    }	    
	    if (Math.abs(math.norm(x) - math.norm(X)) < E) {
	        continuar = false;
	    } else {
	        X=x.slice(0);
	    }
	    ni = ni + 1;
	}
	$('#GaussIteracoes').html(String(ni));
	for (i=0;i<X.length;i++)
	{
	$('#GaussX').append("X["+i+"] = " + X[i] + "<br>");
	}
}


	
