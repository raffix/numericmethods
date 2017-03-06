function calcFxy(funcao, x,y){
	funcao = funcao.replace(/x/g, parseFloat(x));
	funcao = funcao.replace(/y/g, parseFloat(y));
	funcao = parser.parse(funcao);
	return funcao;
}

function edo()
	{
		$('#edoR').html("");
		var funcao, intervalo, h, xn, i, x, y, k, arrayX = [], arrayY = [];
		if($('#edoFx').val() == undefined || $('#edoIntervalo').val() == undefined || $('#edoH').val() == undefined || $('#edoY0').val() == undefined){
			return;
		}
		funcao = $('#edoFx').val();
		intervalo = $('#edoIntervalo').val().split("/");
		h = parseFloat($('#edoH').val());
		y0 = parseFloat($('#edoY0').val());
		a  = parseFloat(intervalo[0]);
		b  = parseFloat(intervalo[1]);		
		x = a;
		y = y0;
		i = 0;
		while(x<400){
			if(x >= b+h){
				break;
			}
			arrayX[i] = x;
			arrayY[i] = y;
			y = y+h*calcFxy(funcao, x, y);
			x += h;
			x = Math.round(x * 100) / 100;
			i++;
		}
		var data = '[{ "points": [['+arrayX[0]+', '+arrayY[0]+']';		
		var annotat = '{ }';
		$('#edoR').append('<br>P'+0+ '= (' + arrayX[0] +', ' + arrayY[0] + ")");
		var zx = arrayX[0];
		var zy = arrayY[0];
		for(i=1; i<arrayX.length; i++){
			$('#edoR').append('<br>P'+i+ '= (' + arrayX[i] +', ' + arrayY[i] + ")");
			data += ',['+arrayX[i]+', '+arrayY[i]+']';
			if(zx < arrayX[i]){
				zx = arrayX[i];
			}
			if(zy < arrayY[i]){
				zy = arrayY[i];
			}	
		}
		zx = zx + zx*0.20;
		zy = zy + zy*0.20;
		data += '],"fnType": "points", "graphType": "polyline"}]';
		drawChart(data, annotat, '#plotEDO', zx, zy);
		
	}
	

