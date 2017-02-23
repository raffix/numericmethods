	function MinimosQuadrados() 
	{		
		$('#MQA').html(" ");
		$('#MQB').html(" ");
		if($('#MQX').val() == undefined || $('#MQY').val() == undefined){
			return;
		}		
		var X =  $('#MQX').val();
		var Y =  $('#MQY').val();		
		var x = X.split(" ");
		var y = Y.split(" ");
		var n = x.length;
		var i, sumX = 0, sumY = 0, sumX2 = 0, sumXY = 0, a, b, formula;	
		var annotat = ' ';	
		for(i = 0; i<n; i++){
			sumX += x[i]*1;
			sumY += y[i]*1;
			sumX2 += Math.pow(x[i], 2);
			sumXY += x[i]*y[i];
		}		
		a = (sumXY * n - sumY * sumX)/(sumX2 * n - sumX * sumX)
		b =(sumY * sumX2 - sumXY * sumX)/(n * sumX2 - sumX * sumX);
		formula = a+'x +'+b
		var data = '[{"fn": "'+formula+'"},{ "points": [['+x[0]+', '+y[0]+']';
		for(i=1; i<n; i++){
			data += ',['+x[i]+', '+y[i]+']'; 
		} 
		data += '],"fnType": "points", "graphType": "scatter"}]'
		var annotat = '{ }';
		$('#MQA').append(a + "<br>");
		$('#MQB').append(b);
		console.log(data);
		console.log(annotat);
		drawChart(data, annotat, '#plotMQ');	
		
	}