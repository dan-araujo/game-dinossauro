const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let estaPulando = false;
let gameOver = false;
let posicao = 0;

function lidarComKeyUp(event) {
	if (event.keyCode === 32) {
		if (!estaPulando) {
			pular();
		}
	}
}

function pular() {
	estaPulando = true;

	let movimentarParaCima = setInterval(() => {
		if (posicao >= 150) {
			// Descendo
			clearInterval(movimentarParaCima);

			let movimentarParaBaixo = setInterval(() => {
				if (posicao <= 0) {
					clearInterval(movimentarParaBaixo);
					estaPulando = false;
				} else {
					posicao -= 20;
					dino.style.bottom = posicao + 'px';
				}
			}, 20);
		} else {
			// Subindo
			posicao += 20;
			dino.style.bottom = position + 'px';
		}
	}, 20);
}



function criarCacto() {
	const cacto = document.createElement('div');
	let posicaoDoCacto = 1000;
	let tempoAleatorio = Math.random() * 6000;

	if (gameOver) return;

	cacto.classList.add('cacto');
	background.appendChild(cacto);
	cacto.style.left = posicaoDoCacto + 'px';

	let movimentarPraEsquerda = setInterval(() => {
		if (posicaoDoCacto < -60) {
			// Sai da tela
			clearInterval(movimentarPraEsquerda);
			background.removeChild(cacto);
		} else if (posicaoDoCacto > 0 && posicaoDoCacto < 60 && posicao < 60) {
			// Game over
			clearInterval(movimentarPraEsquerda);
			gameOver = true;
			document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
		} else {
			posicaoDoCacto -= 10;
			cacto.style.left = posicaoDoCacto + 'px';
		}
	}, 20);

	setTimeout(criarCacto, tempoAleatorio);
}

criarCacto();
document.addEventListener('keyup', lidarComKeyUp);