
var M, N, a, steps;
function drawPoly1() { 
	var Gleichung = document.getElementById ("Polynom1");
    Gleichung.innerHTML= "";
	N = parseInt(document.getElementById("n").value);
	M = parseInt(document.getElementById("m").value);
	if ((N>M)&&(N>0)&&(M>0)) {
		var Tab = document.createElement("div");
		Tab.setAttribute("class", "FormelBoxC");
		var text = document.createElement("span");
		text.setAttribute("class", "FormelBoxC");
		text.innerHTML+= "( ";
		Tab.appendChild(text); 
		for (var i = N; i > 0; --i) {
			if (i>1) {
				var input = document.createElement("input");
				input.setAttribute("class", "EingabePoly");
				input.setAttribute("onfocus", "this.select()");
				input.type = "number";
				input.id = "P1"+i;
				input.value = i;
				Tab.appendChild(input); 
				var text = document.createElement("span");
				text.setAttribute("class", "FormelBoxCLi");
				text.innerHTML+= "&sdot;x<sup>"+i+"</sup> + ";
				Tab.appendChild(text); 
			} else {
				var input = document.createElement("input");
				input.setAttribute("class", "EingabePoly");
				input.setAttribute("onfocus", "this.select()");
				input.type = "number";
				input.id = "P1"+i;
				input.value = i;
				Tab.appendChild(input); 
				var text = document.createElement("span");
				text.setAttribute("class", "FormelBoxCLi");
				text.innerHTML+= "&sdot;x + ";
				Tab.appendChild(text); 
			}
		}
		var input = document.createElement("input");
		input.setAttribute("class", "EingabePoly");
		input.setAttribute("onfocus", "this.select()");
		input.type = "number";
		input.id = "P1"+0;
		input.value = 1;
		Tab.appendChild(input); 
		var text = document.createElement("span");
		text.setAttribute("class", "FormelBoxC");
		text.innerHTML+= " ) &div; ( ";
		Tab.appendChild(text); 

		var text = document.createElement("span");
		text.setAttribute("class", "FormelBoxCLi");
		if (M>1) {
			text.innerHTML+= "x<sup>"+M+"</sup> + ";
		} else {
			text.innerHTML+= "x + ";
		}
		Tab.appendChild(text); 
		for (var i = M-1; i > 0; --i) {
			if (i>1) {
				var input = document.createElement("input");
				input.setAttribute("class", "EingabePoly");
				input.setAttribute("onfocus", "this.select()");
				input.type = "number";
				input.id = "P2"+i;
				input.value = i;
				Tab.appendChild(input); 
				var text = document.createElement("span");
				text.setAttribute("class", "FormelBoxCLi");
				text.innerHTML+= "&sdot;x<sup>"+i+"</sup> + ";
				Tab.appendChild(text); 
			} else {
				var input = document.createElement("input");
				input.setAttribute("class", "EingabePoly");
				input.setAttribute("onfocus", "this.select()");
				input.type = "number";
				input.id = "P2"+i;
				input.value = i;
				Tab.appendChild(input); 
				var text = document.createElement("span");
				text.setAttribute("class", "FormelBoxCLi");
				text.innerHTML+= "&sdot;x + ";
				Tab.appendChild(text); 
			}
		}
		var input = document.createElement("input");
		input.setAttribute("class", "EingabePoly");
		input.setAttribute("onfocus", "this.select()");
		input.type = "number";
		input.id = "P2"+0;
		input.value = -1;
		Tab.appendChild(input); 
		var text = document.createElement("span");
		text.setAttribute("class", "FormelBoxC");
		text.innerHTML+= " )";
		Tab.appendChild(text); 

		Gleichung.appendChild(Tab); 
		
		Horner();

	} else {
		alert("Polynomial 1 must have a higher degree than polynomial 2. The degree of the polynomials must be greater than 0.");
	}
}
function drawPoly2() { 
	var Gleichung = document.getElementById ("Polynom3");
    Gleichung.innerHTML= "";
	var N = parseInt(document.getElementById("n1").value);
	var x = parseFloat(document.getElementById("m1").value);
	if (N>0) {
		var Tab = document.createElement("div");
		Tab.setAttribute("class", "FormelBoxC");
		for (var i = N; i > 0; --i) {
			if (i>1) {
				var input = document.createElement("input");
				input.setAttribute("class", "EingabePoly");
				input.setAttribute("onfocus", "this.select()");
				input.type = "number";
				input.id = "P3"+i;
				input.value = i;
				Tab.appendChild(input); 
				var text = document.createElement("span");
				text.setAttribute("class", "FormelBoxCLi");
				text.innerHTML+= "&sdot;x<sup>"+i+"</sup> + ";
				Tab.appendChild(text); 
			} else {
				var input = document.createElement("input");
				input.setAttribute("class", "EingabePoly");
				input.setAttribute("onfocus", "this.select()");
				input.type = "number";
				input.id = "P3"+i;
				input.value = i;
				Tab.appendChild(input); 
				var text = document.createElement("span");
				text.setAttribute("class", "FormelBoxCLi");
				text.innerHTML+= "&sdot;x + ";
				Tab.appendChild(text); 
			}
		}
		var input = document.createElement("input");
		input.setAttribute("class", "EingabePoly");
		input.setAttribute("onfocus", "this.select()");
		input.type = "number";
		input.id = "P3"+0;
		input.value = 1;
		Tab.appendChild(input); 

		Gleichung.appendChild(Tab); 
		
		Horner1();

	} else {
		alert("The degree of the polynomial must be greater than 0.");
	}
}
function plotTable(Ms, Ns) { 
	var Tab = document.createElement("div");
	Tab.setAttribute("class", "table");
	for (var i = 0; i < Ms+2; ++i) {
		var Row = document.createElement("div");
		Row.setAttribute("class", "table-row");
		for (var j = 0; j < Ns+1; ++j) {
			var Cell2 = document.createElement("div");
			Cell2.setAttribute("class", "table-cell");
			var text = document.createElement("P");
			if (typeof a[i][j] !== 'undefined') {
				if (i==(Ms+1)) {
					if ((j>0)&&(j<(Ns-Ms+1))) {
						text.setAttribute("style", "color:red;");
					} else {
						text.setAttribute("style", "color:blue;");
					}
				}
				text.innerHTML= a[i][j];
			}
			Cell2.appendChild(text); 
			Row.appendChild(Cell2); 
		}
		Tab.appendChild(Row); 
    }
	document.getElementById("Horner1").appendChild(Tab); 
}
function plotTableStep(Ms, Ns, i1, i2, w1, w2, w3) { 
	steps++;
	document.getElementById("Horner1").innerHTML+= 'Step '+steps;
	var Tab = document.createElement("div");
	Tab.setAttribute("class", "table");
	var str= '';
	for (var i = 0; i < Ms+2; ++i) {
		var Row = document.createElement("div");
		Row.setAttribute("class", "table-row");
		for (var j = 0; j < Ns+1; ++j) {
			var Cell2 = document.createElement("div");
			Cell2.setAttribute("class", "table-cell");
			var text = document.createElement("P");
			if (typeof a[i][j] !== 'undefined') {
				if (i==(Ms+1)) {
					if ((j>0)&&(j<(Ns-Ms+1))) {
						text.setAttribute("style", "color:red;");
					} else {
						text.setAttribute("style", "color:blue;");
					}
				}
				if ((i==i1) && (j==i2)) {
					text.innerHTML= w1+'='+w2+'&sdot;'+w3;
				} else {
					if ((i==(Ms+1)) && (j==i2-1)) {
						for (var y = 0; y < Ms+1; ++y) {
							if (typeof a[y][j] !== 'undefined') {
								if (y>0) {str+= '+'+a[y][j];} else {str= a[y][j];};
							}
						}
						text.innerHTML= a[i][j]+'='+str;
					} else {
						text.innerHTML= a[i][j];
					}
				}
			}
			Cell2.appendChild(text); 
			Row.appendChild(Cell2); 
		}
		Tab.appendChild(Row); 
    }
	document.getElementById("Horner1").appendChild(Tab); 
}
function Horner(step) { 
	document.getElementById("Horner1").innerHTML= "";
	steps= 0;
	N = parseInt(document.getElementById("n").value)+1;
	M = parseInt(document.getElementById("m").value);
	a = new Array(M+2);
	for (var i = 0; i < a.length; ++i) {
	  a[i] = new Array(N+1);
	}
	for (var i = 0; i < N; ++i) {
	  a[0][N-i] = parseFloat(document.getElementById("P1"+i).value);
	}
	for (var i = 0; i < M; ++i) {
	  a[i+1][0] = -parseFloat(document.getElementById("P2"+i).value);
	}
	var temp= 0;
	for (var i = 1; i < N+1; ++i) {
		temp= 0;
		for (var k = 0; k < M+1; ++k) {
			if (typeof a[k][i] !== 'undefined') {
				temp+= a[k][i];
			}
		}
		a[M+1][i]= temp;
		if (i<(N-M+1)) {
			for (var j = 0; j < M; ++j) {
				a[M-j][j+i+1]= a[M+1][i]*a[M-j][0];
				if (step) {plotTableStep(M, N, M-j, j+i+1, a[M-j][j+i+1], a[M+1][i], a[M-j][0]);}
			}
		} else {
			if (step) {plotTableStep(M, N, -1, i+1, 0, 0, 0);}
		}
	}

	if (step) {document.getElementById("Horner1").innerHTML+= "Result";}
	plotTable(M, N);
    

	var Gleichung = document.getElementById ("Polynom2");
	Gleichung.innerHTML= "";
	var Tab = document.createElement("div");
	Tab.setAttribute("class", "FormelBoxC");
	var j= 1;
	for (var i = N-M-1; i >= 0; --i) {
		if (a[M+1][j] != 0) {
			if (i>1) {
				var text = document.createElement("span");
				text.setAttribute("class", "FormelBoxCLi");
				text.setAttribute("style", "color:red;");
				if (a[M+1][j] == 1) {
					text.innerHTML+= "x<sup>"+i+"</sup> + ";
				} else {
					text.innerHTML+= a[M+1][j] + "&sdot;x<sup>"+i+"</sup> + ";
				}
				Tab.appendChild(text); 
			} else if (i==1) {
				var text = document.createElement("span");
				text.setAttribute("class", "FormelBoxCLi");
				text.setAttribute("style", "color:red;");
				if (a[M+1][j] == 1) {
					text.innerHTML+= "x + ";
				} else {
					text.innerHTML+= a[M+1][j] + "&sdot;x + ";
				}
				Tab.appendChild(text); 
			} else {
				var text = document.createElement("span");
				text.setAttribute("class", "FormelBoxCLi");
				text.setAttribute("style", "color:red;");
				text.innerHTML+= a[M+1][j] + " + ";
				Tab.appendChild(text); 
			}
		}
		j++;
	}
	var text = document.createElement("span");
	text.setAttribute("class", "FormelBoxC");
	text.innerHTML+= " Resto ( ";
	Tab.appendChild(text); 
	for (var i = M-1; i >= 0; --i) {
		if (i>1) {
			if (a[M+1][j] != 0) {
				var text = document.createElement("span");
				text.setAttribute("class", "FormelBoxCLi");
				text.setAttribute("style", "color:blue;");
				if (a[M+1][j] == 1) {
					text.innerHTML+= "x<sup>"+i+"</sup> + ";
				} else {
					text.innerHTML+= a[M+1][j] + "&sdot;x<sup>"+i+"</sup> + ";
				}
				Tab.appendChild(text); 
			}
		} else if (i==1) {
			if (a[M+1][j] != 0) {
				var text = document.createElement("span");
				text.setAttribute("class", "FormelBoxCLi");
				text.setAttribute("style", "color:blue;");
				if (a[M+1][j] == 1) {
					text.innerHTML+= "x + ";
				} else {
					text.innerHTML+= a[M+1][j] + "&sdot;x + ";
				}
				Tab.appendChild(text); 
			}
		} else {
			var text = document.createElement("span");
			text.setAttribute("class", "FormelBoxCLi");
			text.setAttribute("style", "color:blue;");
			text.innerHTML+= a[M+1][j];
			Tab.appendChild(text); 
		}
		j++;
	}
	var text = document.createElement("span");
	text.setAttribute("class", "FormelBoxC");
	text.innerHTML+= " )";
	Tab.appendChild(text); 

	Gleichung.appendChild(Tab); 
}
function Horner1() { 
	var Gleichung = document.getElementById("Horner2");
    Gleichung.innerHTML= "";
	var N = parseInt(document.getElementById("n1").value)+1;
	var M = 1;
	var x = parseFloat(document.getElementById("m1").value);
	a = new Array(M+2*N);
	for (var i = 0; i < a.length; ++i) {
	  a[i] = new Array(N+1);
	}
	for (var i = 0; i < N; ++i) {
	  a[0][N-i] = parseFloat(document.getElementById("P3"+i).value);
	}
	for (var i = 1; i < a.length; i+=2) {
	  a[i][0] = x;
	}
	var P= N;
	for (var i1 = 2; i1 < a.length; i1+=2) {
		var temp= 0;
		for (var i = 1; i < P+1; ++i) {
			temp= 0;
			for (var k = i1-2; k < i1; ++k) {
				if (typeof a[k][i] !== 'undefined') {
					temp+= a[k][i];
				}
			}
			a[i1][i]= temp;
			if (i<P) {
				a[i1-1][i+1]= a[i1][i]*a[i1-1][0];
			}
		}
		P--;
	}

	var Tab = document.createElement("div");
	Tab.setAttribute("class", "table");
	for (var i = 0; i < a.length; ++i) {
		var Row = document.createElement("div");
		Row.setAttribute("class", "table-row");
		for (var j = 0; j < N+1; ++j) {
			var Cell2 = document.createElement("div");
			Cell2.setAttribute("class", "table-cell");
			var text = document.createElement("P");
			if (typeof a[i][j] !== 'undefined') {
				if ((i/2+j)==N+1) {
					text.setAttribute("style", "color:green;font-weight: bold;");
				}
				text.innerHTML= a[i][j];
			}
			Cell2.appendChild(text); 
			Row.appendChild(Cell2); 
		}
		Tab.appendChild(Row); 
    }
	Gleichung.appendChild(Tab); 

	var Gleichung = document.getElementById ("Polynom4");
	Gleichung.innerHTML= "";
	var Tab = document.createElement("div");
	Tab.setAttribute("class", "FormelBoxC");
	var fac=1;
	var j = 0;
	for (var i = 2; i < a.length; i+=2) {
		var Cell2 = document.createElement("div");
		Cell2.setAttribute("class", "FormelBoxCLi");
		Cell2.setAttribute("style", "float:left;");
		var text = document.createElement("P");
		if (j==0) {
			text.innerHTML= 'p('+x+') = ';
		} else if (j==1) {
			text.innerHTML= 'p&prime;('+x+') = ';
		} else {
			text.innerHTML= 'p<sup>('+j+')</sup>('+x+') = '+j+'! &sdot; '+a[i][N+1-i/2]+' = ';
		}
		text.innerHTML+= fac*a[i][N+1-i/2];
		Cell2.appendChild(text); 
		Tab.appendChild(Cell2); 
		j++;
		fac*= j;
    }
	Gleichung.appendChild(Tab); 
}
