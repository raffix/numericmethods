function lagrange(x, y,  valor, ordem){
	var saida, temp, i, j;
	saida = 0.0;
	for(i=0; i<ordem; i++){
		temp = 1.0;
		for(j=0; j<ordem; j++){
			if (i != j) {
				temp = temp * ((valor-x[j])/(x[i]-x[j]));
			}
		}
		saida = saida + ( y[i] * temp);
	}

	printf("\n\nLa Grange:");
	printf("\nPara x = %f y = %f\n", valor, saida);
}

function divididas(x, y, valor, ordem){
	var saida, temp, diferenca[ordem][ordem], i, j;

	for(i=1; i<ordem; i++){
		diferenca[i][0]= ((y[i+1] - y[i])/(x[i+1]-x[i]));		
	}

	for(j=1; j<ordem; j++){
		for(i=1; i<ordem; i++){
			diferenca[i][j] = ((diferenca[i+1][j-1]- diferenca[i][j-1])/(x[i+j]-x[i]));
		}
	}

	saida = diferenca[0][0];
	for(i=1; i<ordem; i++){
		temp =  1.0;
		for(j=0; j<i-1; j++){
			temp = temp * (valor - x[j]);
		}
		temp = diferenca[0][i] * temp;
		saida = saida + temp;
	}

	printf("\n\nDiferencas Divididas:");
	printf("\nPara x = %f y = %f\n", valor, saida);
}

function finitas(x, y, valor, ordem){
	var saida, temp, finita[ordem][ordem], i, n, z = abs(x[1]-x[0]), j;
	
	for(i=0; i<ordem; i++){
		finita[i][0] = y[i+1]-y[i];
	}
	
	for(j=1; j<ordem; j++){
		for(i=1; i<ordem; i++){
			finita[i][j] = finita[i+1][j-1] - finita[i][j-1];
		}
	}
	
	saida = finita[0][0];
	for(i=1; i<ordem; i++){
		temp = 1.0;
		for(j=0; j<i-1; j++){
			temp = temp * (z-j);
		}
		saida = saida + (finita[0][i]*temp);
		printf("\n%f",saida);
	}

	printf("\n\nDiferencas Finitas:");
	printf("\nPara x = %f y = %f\n", valor, saida);
}
