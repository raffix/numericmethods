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

function zeros(dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
    }

    return array;
}

function divididas(){
	var X =  $('#DDX').val();
	var Y =  $('#DDY').val();	
	var xbarra = parseFloat($('#DDK').val());
	var x = X.split(" ");
	var y = [];	
	var ordem =  x.length;	
	var pn, i, j, k, p, result;	
	if(Y.search("x") != -1){
		for(i = 0; i<ordem; i++){
			y[i] = fxCalc(Y, x[i]);
		}	
	}
	else {
		y = Y.split(" ");	
	}	
	var f = zeros([ordem+1, ordem+1]);
	for(i = 1; i<=ordem; i++){
		y[i-1] = parseFloat(y[i-1]);
		x[i-1] = parseFloat(x[i-1]);
		f[i][1] = y[i-1];
	}
	p = ordem-1;
	k = 1;
	for(j = 2; j<=ordem; j++){
		for(i = 1; i<=p; i++){
			f[i][j] = (f[i+1][j-1] - f[i][j-1])/(x[i+k-1] - x[i-1]);
		}
		p = p-1;
		k++;
	}
	p = 1;
	result = y[0];
	for(i = 2; i<=ordem; i++){
		p = p*(xbarra-x[i-2]);
		result = result + p*f[1][i];
	}
	x.push(xbarra);
	y.push(result);
	pn = MinimosQuadrados(x, y, ordem-1);
	$('#DDresult').html(result);
	$('#DDpol').html(pn);
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
	var annotat = '[{ "y": "'+result+'", "text": "y = '+result+'" }, { "x": "'+xbarra+'", "text": "x = '+xbarra+'" }]';		
	zx = parseInt(zx);
	zy = parseInt(zy);
	zx = zx + zx*0.20;
	zy = zy + zy*0.20;
	drawChart(data, annotat, '#plotDD', zx, zy);
}

/*
function finitas(){
	var X =  $('#DFX').val();
	var Y =  $('#DFY').val();	
	var xbarra = $('#DFK').val();
	var x = X.split(" ");
	var y = [];	
	var ordem =  x.length;	
	var pn;	
	if(Y.search("x") != -1){
		for(i = 0; i<ordem; i++){
			y[i] = fxCalc(Y, x[i]);
		}	
	}
	else {
		y = Y.split(" ");	
	}
	var saida = 0;
	var delta = [], i, j;	
	for(i=0; i<ordem; i++){
		delta[i] = y[i];
	}
	for(j=0; j<ordem-1; j++){
		for(i=1; i<ordem+1; i++){
			delta[i] = (delta[i] - delta[i-1])/(x[i]-x[i-j]);
		}
	}
	saida = delta[ordem];
	for(i=0; i<ordem-1; i++){
		saida = saida*(xbarra-x[i])+delta[i];	
	}
	x.push(xbarra);
	y.push(saida);
	pn = MinimosQuadrados(x, y, ordem-1);
	$('#FNresult').html(saida);
	$('#FNpol').html(pn);
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
	drawChart(data, annotat, '#plotDF', zx, zy);
}

*/