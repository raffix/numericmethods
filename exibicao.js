	var menu = [
		['Raízes', 'index.html'],
		['SELA', 'sistemas.html'],
	];
	
	function menuAtivo(ativo)
	{
		for (var i = 0; i < menu.length; i++) {
			$("#nav-mobile").append('<li><a href="'+menu[i][1]+'">'+menu[i][0]+'</a></li>');
		}
	}

	menuAtivo(null);