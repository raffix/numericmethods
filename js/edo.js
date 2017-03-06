function calcFxy(funcao, x,y){
	funcao = funcao.replace(/x/g, parseFloat(x));
	funcao = funcao.replace(/y/g, parseFloat(y));
	funcao = parser.parse(funcao);
	return funcao;
}

function edo()
	{
		var funcao, intervalo, h, xn, i, x, y, k, arrayX = [], arrayY = [];
		if($('#edoFx').val() == undefined || $('#edoIntervalo').val() == undefined || $('#edoH').val() == undefined || $('#edoX0').val() == undefined){
			return;
		}
		funcao = $('#edoFx').val();
		intervalo = $('#edoIntervalo').val().split("/");
		h = parseFloat($('#edoH').val());
		xn = parseFloat($('#edoX0').val());
		a  = parseFloat(intervalo[0]);
		b  = parseFloat(intervalo[1]);		
		x = a;
		y = b;
		i = 0;
		while(x<=xn){
			k=h*calcFxy(funcao, x,y);
			y=y+k;
			x=x+h;
			arrayX[i] = x;
			arrayY[i] = y;
			i++;
		}
		for(i=0; i<arrayX.length; i++){
			$('#edoR').append('P'+i+ '= (' + arrayX[i] +', ' + arrayY[i] + ")<br>");
		}
	}
	

