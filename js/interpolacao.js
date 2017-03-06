function MinimosQuadrados(x, y, order) 
	{	
		var i, j, o = 1, sy =[], sx =[], sxy =[], matrixA = [], matrixB = [];
		for(i = 0; i<order+order+1; i++){
			sy[i] = 0;
			sx[i] = 0;
			sxy[i] = 0;	
		}
		for(i = 0; i<x.length; i++){
			for(j = 1; j<order+order+1; j++){
				sy[j] += math.pow(y[i], j);
				sx[j] += math.pow(x[i], j);
				sxy[j] += math.pow(x[i], j)*y[i];
			}
		}		
		for (i = 0; i < order+1; i++) {
			matrixA[i] = [];						
		}			
		for(i = 0; i<order+1; i++){
			for(j = 0; j<order+1; j++){
				if(i == 0 && j == 0){
					matrixA[i][j] = x.length;
				}
				else{
					if(j == 0){
						o = o-order;
					}
					matrixA[i][j] = sx[o];
					o++;	
				}
			}	
		}
		matrixB[0] = sy[1];
		for(i = 1; i<order+1; i++){
			matrixB[i] = sxy[i];
		}		
		
		var solution = math.lusolve(matrixA, matrixB);
		solution = solution.reverse();		
		var k = solution.length - 1;		
		var funcao = "";
		for(i = 0; i<solution.length; i++){
			if(k == 0){
				funcao += Math.round(solution[i] * 10000)/10000;	
			}
			else if(k == 1){
				if(solution[i+1] < 0) {
					funcao += Math.round(solution[i] * 10000)/10000 + 'x ';
				}
				else {
					funcao += Math.round(solution[i] * 10000)/10000 + 'x + ';
				}
				
			}				
			else{
				if(solution[i+1] < 0) {
					funcao += Math.round(solution[i] * 10000)/10000 + 'x^'+k + " ";					
				}
				else {
					funcao += Math.round(solution[i] * 10000)/10000 + 'x^'+k + " + ";					
				}				
			}
			k--;
		}
		return funcao;	
	}

function lagrange()
{
	var X =  $('#LGX').val();
	var Y =  $('#LGY').val();	
	var xbarra = $('#LGK').val();
	var x = X.split(" ");
	var y = [];	
	var ordem =  x.length;
	var denom;
	var pn;
	var i, j;
	if(Y.search("x") != -1){
		for(i = 0; i<ordem; i++){
			y[i] = fxCalc(Y, x[i]);
		}	
	}
	else {
		y = Y.split(" ");	
	}
	var saida = 0, temp;
	for(i=0; i<ordem; i++){
		temp = 1;
		for(j=0; j<ordem; j++){
			if (i != j) {
				temp = temp * ((xbarra-x[j])/(x[i]-x[j]));				
			}
		}	
		saida += y[i] * temp;
	}
	x.push(xbarra);
	y.push(saida);
	pn = MinimosQuadrados(x, y, ordem-1);
	$('#LGresult').html(saida);
	$('#LGpol').html(pn);
	var data = '[{"fn": "'+pn+'", "graphType": "polyline", "sampler": "builtIn"},{ "points": [['+x[0]+', '+y[0]+']';
	var zx = x[0], zy = y[0];
	for(i=1; i<x.length; i++){
		data += ',['+x[i]+', '+y[i]+']'; 
		if(parseInt(zx) < parseInt(x[i])){
			zx = x[i];
		}
		if(parseInt(zy) < parseInt(y[i])){
			zy = y[i];			
		}
	} 
	data += '],"fnType": "points", "graphType": "scatter"}]'
	var annotat = '[{ "y": "'+saida+'", "text": "y = '+saida+'" }, { "x": "'+xbarra+'", "text": "x = '+xbarra+'" }]';		
	zx = parseInt(zx);
	zy = parseInt(zy);
	zx = zx + zx*0.20;
	zy = zy + zy*0.20;
	drawChart(data, annotat, '#plotLG', zx, zy);
}
/*
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
}*/