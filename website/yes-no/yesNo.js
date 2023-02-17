function getAnswer() {
	ansDisplay = document.getElementById("answer")
	answer = Math.floor(Math.random() * 2);
	ansDisplay.innerHTML = '. fgsakjhskdlghaf;ladshgfjhfa;sldfh;glahf;ljfhadaskhg a;skdljfhsljhfk aflkhalkjhga;ksjghaf aflasdjkgashlakjfhaldhl';
	if (answer == 0) {
		ansDisplay.innerHTML = 'Yes';
	}
	else if (answer == 1) {
		ansDisplay.innerHTML = 'No';
	}
}