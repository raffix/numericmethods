	var menu = [
		['Início', 'index.html'],
		['Raízes', 'raizes.html'],
		['SELA', 'sistemas.html'],
		['Interpolação', 'interpolacao.html'],
		['Integrais', 'integrais.html'],
		['Ajuste de Curvas', 'ajustes.html'],
		['EDO', 'edo.html']	
	];

	function menuAtivo()
	{
		for (var i = 0; i < menu.length; i++) {
			$("#nav-mobile").append('<li><a href="'+menu[i][1]+'">'+menu[i][0]+'</a></li>');
			$("#nav-mobile2").append('<li><a href="'+menu[i][1]+'">'+menu[i][0]+'</a></li>');
		}
		$('.button-collapse').sideNav();

		//adiciona footer

		var footer = '<footer class="row" id="footer"><div class="col m12 s12 green darken-3"><p style="text-align: center; color: white;">Desenvolvido por:</br> Leonardo Belinski, Mateus Aceto e Raffael C. Rossi. </br>Sob a orientação do professor doutor Pedro Borges.</br><a href="www.uffs.edu.br">UFFS</a></p> </div></footer>';
		$('.container').append(footer);
		return;
	}
	
	function replaceX(funcao, x)
	{
		var expression = /[xX]/g;
		return funcao.replace(expression,String(x));
	}
	
    function limpar(metodo)
    {
    	$(metodo).find('input').each(
    		function()
    		{
    			$(this).val("");
    		}
    	);
    }
	function fxCalc(fx, x){
		fx = fx.replace(/x/g, parseFloat(x));
		fx = math.eval(fx);
		return fx;	
	}		
   
    function exibeErro(aborta)
	{
		Materialize.toast('Execução abortada. Excedido '+aborta+' iterações!', 6000); 
	}
	
	function exibeAlerta(text)
	{
		Materialize.toast(text, 3500); 
	}
	
	

	function matrixParser(x, order){		
		var p = x.indexOf(";");
	    order = parseFloat(order.charAt(0));
		x = x.replace(/;/g,"");
		var y = x.split(" "); 
		var matrix = [], i, k;
	    for (i = 0, k = -1; i < y.length; i++) {
	        if (i % order === 0) {
	            k++;
	            matrix[k] = [];
	        }
	        matrix[k].push(y[i]);
	    }
		return matrix;	
	}

	menuAtivo();