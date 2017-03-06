	function MinimosQuadrados() 
	{		
		$('#MQA').html(" ");
		$('#MQB').html(" ");
		$('plotMQ').html(" ");
		if($('#MQX').val() == undefined || $('#MQY').val() == undefined){
			return;
		}		
		var X =  $('#MQX').val();
		var Y =  $('#MQY').val();
		var order =  $('#MQK').val();
		order = parseInt(order);	
		var x = X.split(" ");
		var y = Y.split(" ");		
		var sy =[], sx=[], sxy=[];
		var i,j,o = 1;
		var matrixA = [], matrixB = [];
		if(order>x.length-1){
			alert("Grau do polinomio não deve execeder a quantidade de pontos-1");
			return;
		}
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
		var r2y = y;
		var r2x = x;		
		var r2fun = solution;
		var ym=0;
		var r2s =0;
		var	r2d =0;
		for(i = 0; i<r2x.length; i++){
			ym += r2y[i]/r2x.length;
		}
		var k = r2fun.length - 1;
		var funcao = "";
		var funcao2 = "";
		for(i = 0; i<r2fun.length; i++){
			if(k == 0){				
				funcao += r2fun[i];
				funcao2 += r2fun[i];	
			}
			else if(k == 1){
				if(r2fun[i+1] < 0) {
					funcao2 += r2fun[i] + 'x ';
					funcao += r2fun[i] + '*x';
				}
				else {
					funcao2 += r2fun[i] + 'x + ';
					funcao += r2fun[i] + '*x+';
				}
				
			}				
			else{
				if(r2fun[i+1] < 0) {
					funcao2 += r2fun[i] + 'x^'+k + " ";
					funcao += r2fun[i] + '*math.pow(x, '+k+')+';
				}
				else {
					funcao2 += r2fun[i] + 'x^'+k + " + ";
					funcao += r2fun[i] + '*math.pow(x, '+k+')+';
				}				
			}
			k--;
		}
		var x;
		for(i = 0; i<r2x.length; i++){
			x = r2x[i];
			r2s += math.pow(eval(funcao) - r2y[i], 2);
			r2d += math.pow(r2y[i]-ym, 2);
		}
		var r2 = 1-(r2s/r2d);
		var data = '[{"fn": "'+funcao2+'", "graphType": "polyline", "sampler": "builtIn"},{ "points": [['+r2x[0]+', '+r2y[0]+']';
		var zx = r2x[0], zy = r2y[0];
		for(i=1; i<r2x.length; i++){
			data += ',['+r2x[i]+', '+r2y[i]+']'; 
			if(parseInt(zx) < parseInt(r2x[i])){
				zx = r2x[i];
			}
			if(parseInt(zy) < parseInt(r2y[i])){
				zy = r2y[i];			
			}
		} 
		data += '],"fnType": "points", "graphType": "scatter"}]'
		var annotat = '{ }';		
		zx = parseInt(zx);
		zy = parseInt(zy);
		zx = zx + zx*0.20;
		zy = zy + zy*0.20;	
		$('#MQA').append(funcao2 + "<br>");
		$('#MQB').append(r2);		
		drawChart(data, annotat, '#plotMQ', zx, zy);			
	}