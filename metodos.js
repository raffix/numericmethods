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
		var funcao, intervalo, epson, x, a, b, fx, fa, i;
		
		funcao = $('#bisseccaoFormula').val();
		intervalo = $('#bisseccaoIntervalo').val().split("/");
		epson = parseFloat($('#bisseccaoEpson').val());
		
		a = parseFloat(intervalo[0]);
		b = parseFloat(intervalo[1]);
		fx = parseFloat(1);
		i = parseInt(0);
		
		//drawChart(a, b, funcao);
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
			
			if (i > 1000 ){
				break;
			}
			i++;
		}
		
		//mostrar ao usuario numero de iteracoes e valor de x.
		$('#bisseccaoIteracoes').html(String(i));
		$('#bisseccaoX').html(String(x));
	}
	
	
	function cordas()
	{
		var funcao, intervalo, epson, x, a, b, fx, fa, fb, i;
		
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
		
		if(fa * fx > 0) {
			while (Math.abs(fx) > epson) {
				x  = ((x* fa) - (a*fx))/(fa-fx);
				fx = math.eval(funcao.replace("x",String(x)));
				i++;
			}
		} else {
			while (Math.abs(fx) > epson ){
				x = ((b* fx) - (x*fb))/(fx-fb);
				fx = math.eval(funcao.replace("x",String(x)));
				i++;
			}
		}
		
		$('#cordasIteracoes').html(String(i));
		$('#cordasX').html(String(x));
	}
	
function newton()
	{
		var funcao, auxfuncao, intervalo, epson, x, a, b, fx, fdx, auxFdx, fdxx, i;
		
		funcao 	  = $('#newtonFormula').val();
		intervalo = $('#newtonIntervalo').val().split("/");
		epson 	  = parseFloat($('#newtonEpson').val());
		fdx 	  = $('#newtonDerivadaUm').val();
		fdxx 	  = $('#newtonDerivadaDois').val();
		
		a  = parseFloat(intervalo[0]);
		b  = parseFloat(intervalo[1]);
		auxFdx = fdx; //auxiliar da derivada, para deixar a função como string para calcular.
		auxFuncao = funcao; //auxiliar da funcao, para deixar a função como string para calcular.
		x = a;
		fdx = math.eval(fdx.replace(/x/g,String(x)));
		fdxx = math.eval(fdxx.replace(/x/g,String(x)));
		if(fdx * fdxx > 0) 
		{
			x = b;			
		}
		else{
			x = a;						
		}		
		funcao = math.eval(funcao.replace(/x/g,String(x)));		
		fdx = math.eval(auxFdx.replace(/x/g,String(x)));
		i = 0;				
		while(Math.abs(funcao) > epson && i<200){		
			x = x-(funcao/fdx); 
			funcao = math.eval(auxFuncao.replace(/x/g,String(x)));
			fdx = math.eval(auxFdx.replace(/x/g,String(x)));	
			i++;			
		}
		
		$('#newtonIteracoes').html(String(i));
		$('#newtonX').html(String(x));
			
}	
