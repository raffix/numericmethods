function PAR(i)
{
	return i%2;
}

function TRES(i)
{
	return i%3;
}

function trapezio( h,  y, n) 
{
	var saida=y[0], c;
	
	for(c=1; c<n-1; c++){
		saida = saida + (2* y[c]);
	}
	saida = saida + y[n-1];
	
	saida =  (h/2)*saida;
	
	printf("Integracao por trapezios:\t%f", saida);
	
	return saida;
}

function simpson_um(h, y, n) 
{
	if (PAR(n) == 1) {
		printf("\nO numero de pontos deve ser par. Nao foi possivel executar a solicitacao");
		return 0.0;
	}
		
	var saida=y[0], c;
	
	for(c=1; c<n-1; c++){
		
		if(PAR(c)==1) {
			saida = saida + (2* y[c]);
		}else{
			saida = saida + (4* y[c]);
		}
	}
	saida = saida + y[n-1];
	
	saida =  (h/3)*saida;
	
	printf("Integracao por simpson um:\t%f", saida);
	
	return saida;
}

function simpson_dois(h, y, n) 
{
	if (TRES(n) != 0) {
		printf("\nO numero de pontos deve ser multiplo de 3. Nao foi possivel executar a solicitacao");
		return 0.0;
	}
		
	var saida=y[0], ac = 0, c;
	
	for(c=1; c<n-1; c++) {
		if (ac ==2 ) {
			saida = saida + (2* y[c]);
			ac = 0;
		} else {
			saida = saida + (3* y[c]);
		}
	}

	saida = saida + y[n-1];
	
	saida =  ((3*h)/8)*saida;
	
	printf("Integracao por simpson dois:\t%f", saida);
	
	return saida;
}