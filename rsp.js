var imgPositionX = 0;
var dictionary = {
	rock : '0',
	scissors : '-142px',
	paper : '-284px'
};

// console.log(Object.entries(dictionary)); // 2차원 배열 모양으로 바꿔줌

function computer (imgPositionX) {
	return Object.entries(dictionary).find(function (v) {
		return v[1] === imgPositionX;
	})[0];
}

var changeImage;

function changeImageInterval() {
	changeImage = setInterval(function (){
		if (imgPositionX === dictionary.rock){
			imgPositionX = dictionary.scissors;
		} else if (imgPositionX === dictionary.scissors) {
			imgPositionX = dictionary.paper;
		} else {
			imgPositionX = dictionary.rock;
		}
		document.querySelector('#img').style.backgroundPositionX = imgPositionX;
	}, 100);
}

changeImageInterval();

document.querySelectorAll('.btn').forEach(function (btn){
	btn.addEventListener('click', function () {
		clearInterval(changeImage);

		setTimeout(function () {
			changeImage = changeImageInterval();
		},1000);

		var choice = this.value;
		// console.log(choice, computer(imgPositionX));

		// 가위 1 바위 0 보 -1 이런식으로 고쳐서 규칙 찾아서 바꿔보기
		// if (choice === 'scissors') {
		// 	if (computer (imgPositionX) === 'scissors') {
		// 		console.log('비겼습니다');
		// 	} else if (computer (imgPositionX) === 'rock') {
		// 		console.log('졌습니다');
		// 	} else {
		// 		console.log('이겼습니다');
		// 	}
		// } else if (choice === 'rock') {
		// 	if (computer (imgPositionX) === 'scissors') {
		// 		console.log('이겼습니다');
		// 	} else if (computer (imgPositionX) === 'rock') {
		// 		console.log('비겼습니다');
		// 	} else {
		// 		console.log('졌습니다');
		// 	}
		// } else {
		// 	if (computer (imgPositionX) === 'scissors') {
		// 		console.log('졌습니다');
		// 	} else if (computer (imgPositionX) === 'rock') {
		// 		console.log('이겼습니다');
		// 	} else {
		// 		console.log('비겼습니다');
		// 	}
		// }

		var score = {
			scissors : 1,
			rock : 0,
			paper : -1
		}
		var result = score[choice] - score[computer(imgPositionX)];
		console.log(result);
		if (result === 0) {
			console.log('비겼습니다.');
		} else if (result === -1 || result === 2) {
			console.log('이겼습니다.');
		} else if (result === 1 || result === -2) {
			console.log('졌습니다.');
		}
	});
});

