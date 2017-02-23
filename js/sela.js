	function Jacobi() 
	{
		$('#JacobiIteracoes').html(" ");
		$('#JacobiX').html(" ");
		var matriz = $('#JacobiA').val();
		var bb = $('#JacobiB').val();
		var order = $('#JacobiOrder').val();
		var A = matrixParser(matriz, order);
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
		$('#JacobiX').append("<br>");
		for (i=0;i<X.length;i++)
		{
		$('#JacobiX').append("X["+i+"] = " + X[i] + "<br>");
		}
		
	}


	function gaussJacobi() 
	{
		$('#GaussIteracoes').html(" ");
		$('#GaussX').html(" ");
		var matriz = $('#GaussA').val();
		var bb = $('#GaussB').val();
		var order = $('#GaussOrder').val();
		var A = matrixParser(matriz, order);
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
		$('#GaussX').append("<br>");
		for (i=0;i<X.length;i++)
		{
		$('#GaussX').append("X["+i+"] = " + X[i] + "<br>");
		}
	}
