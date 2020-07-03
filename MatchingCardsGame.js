var width = 4;
var height = 3;
var color = ['red', 'red', 'orange', 'orange', 'green', 'green', 'yellow', 'yellow', 'white', 'white', 'pink', 'pink'];
var colorchoice = [];
var clickstate = true;
var opened_card = [];
var result_card = [];
var startTime;

function shuffle () {
	for (var i = 0; color.length > 0; i++) {
		colorchoice = colorchoice.concat(color.splice(Math.floor(Math.random() * color.length), 1));
	}
}

// console.log(colorchoice);

function cardSetting (width, height) {
	clickstate = false;
	for (var i = 0; i < width * height; i += 1) {
	    var card = document.createElement('div');
	    card.className = 'card';
	    var cardInner = document.createElement('div');
	    cardInner.className = 'card-inner';
	    var cardFront = document.createElement('div');
	    cardFront.className = 'card-front';
	    var cardBack = document.createElement('div');
	    cardBack.className = 'card-back';
	    cardBack.style.backgroundColor = colorchoice[i];
	    cardInner.appendChild(cardFront);
	    cardInner.appendChild(cardBack);
	    card.appendChild(cardInner);
	    (function (c) {
	    	card.addEventListener('click', function() {
	    		clickstate = true;
	    		if (clickstate && !result_card.includes(c)) {
	    			c.classList.toggle('flipped');
	    			opened_card.push(c);
	    			if (opened_card.length === 2) {
	    				if (opened_card[0].querySelector('.card-back').style.backgroundColor === opened_card[1].querySelector('.card-back').style.backgroundColor) {
	    					result_card.push(opened_card[0]);
	    					result_card.push(opened_card[1]);
	    					opened_card = [];
	    					if (result_card.length === width * height) {
	    						var endTime = new Date();
	    						alert('축하합니다 성공!' + (endTime - startTime) / 1000 + '초 걸렸습니다.');
	    						document.querySelector('#wrapper').innerHTML = '';
	    						color = colorchoice.slice();
	    						colorchoice = [];
	    						result_card = [];
	    						startTime = null;
	    						shuffle();
	    						cardSetting(width, height);
	    					}
	    				} else {
	    					clickstate = false;
	    					setTimeout(function () {
	    						opened_card[0].classList.remove('flipped');
	    						opened_card[1].classList.remove('flipped');
	    						clickstate = true;
	    						opened_card = [];
	    					}, 1000);
	    				}
	    			}
	    		}

	    	});
	    })(card);
	    document.querySelector('#wrapper').appendChild(card);
	}

	document.querySelectorAll('.card').forEach(function (card, index) {
		//처음에 카드 먼저 공개
		setTimeout(function() {
			card.classList.add('flipped');
		}, 1000 + 100 * index);
	});

	setTimeout(function() {
		document.querySelectorAll('.card').forEach(function (card) {
			card.classList.remove('flipped');
		});
		clickstate = true;
		startTime = new Date();
	}, 5000);
}

shuffle();
cardSetting(width,height);

