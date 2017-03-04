function trapezios()
	{		
		$('#TPR').html(" ");	
		var funcao = $('#TPF').val();
		var intervalo = $('#TPI').val().split("/");		
		var a = parseFloat(intervalo[0]);
		var b = parseFloat(intervalo[1]);	
		var n = parseFloat($('#TPP').val());
		var i;
		var h = (b - a) / n;		
		var soma = fxCalc(funcao, a) + fxCalc(funcao, b);
		for (i = 1; i<n; i++){			 
			soma += 2*fxCalc(funcao, a+i*h);
		}			
		var result = (h/2) * soma;
		$('#TPR').append(result);
	}
	
function simp1()
	{		
		$('#S1R').html(" ");	
		var funcao = $('#S1F').val();
		var intervalo = $('#S1I').val().split("/");		
		var a = parseFloat(intervalo[0]);
		var b = parseFloat(intervalo[1]);	
		var n = parseFloat($('#S1P').val());
		var i;
		var h = (b - a) / n;		
		var soma = fxCalc(funcao, a) + fxCalc(funcao, b);
		for (i = 1; i<n; i++){			 
			if(i%2 == 0){
				soma += 2*fxCalc(funcao, a+i*h);	
			}
			else{
				soma += 4*fxCalc(funcao, a+i*h);	
			}			
		}			
		var result = (h/3) * soma;
		$('#S1R').append(result);
	}
	
function simp2()
	{		
		$('#S2R').html(" ");	
		var funcao = $('#S2F').val();		
		var intervalo = $('#S2I').val().split("/");		
		var a = parseFloat(intervalo[0]);
		var b = parseFloat(intervalo[1]);	
		var n = parseFloat($('#S2P').val());
		var i;
		var h = (b - a) / n;		
		var soma = fxCalc(funcao, a) + fxCalc(funcao, b);
		for (i = 1; i<n; i++){			 
			if(i%3 == 0){
				soma += 2*fxCalc(funcao, a+i*h);	
			}
			else{
				soma += 3*fxCalc(funcao, a+i*h);	
			}			
		}			
		var result = ((3/8)*h) * soma;
		$('#S2R').append(result);
	}		
	
	