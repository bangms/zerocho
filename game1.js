/*
// 끝말잇기
var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = "묘식";
document.body.append(단어);
var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
폼.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '입력!';
폼.append(버튼);
var 결과창 = document.createElement('div');
document.body.append(결과창);

폼.addEventListener('submit', function (e) {
	// 폼은 submit을 하게되면(엔터를 치게되면) 다른페이지로 넘어가거나 새로고침을 하는 것이 기본동작
	e.preventDefault(); // 새로고침 방지를 위해서
	// 콜백함수
	// 끝글자랑 첫글자가 일치하는지 비교
	if(단어.textContent[단어.textContent.length - 1] === 입력창.value[0]) {
		결과창.textContent = '딩동댕';
		단어.textContent = 입력창.value;
		입력창.value = '';
		입력창.focus();
	} else {
		결과창.textContent = '땡';
		입력창.value = '';
		입력창.focus();
	}
});

function plus(num1, num2) {
	console.log(num1 + num2);
}
plus(3,5);
*/
// 구구단
// var num1 = Math.ceil(Math.random() * 9);
// var num2 = Math.ceil(Math.random() * 9);
// var result = num1 * num2;
// var str = document.createElement('div');
// str.textContent = String(num1) + '곱하기' + String(num2) + '는?';
// document.body.append(str);

// var form = document.createElement('form');
// document.body.append(form);
// var text = document.createElement('input');
// form.append(text);
// var btn = document.createElement('button');
// btn.textContent = '입력!';
// form.append(btn);
// var print = document.createElement('div');
// document.body.append(print);

// form.addEventListener('submit', function (e) {
// 	e.preventDefault();
// 	console.log(result, text.value);
// 	if(result === Number(text.value)) {

// 		print.textContent = '딩동댕';

// 		num1 = Math.ceil(Math.random() * 9);
// 		num2 = Math.ceil(Math.random() * 9);
// 		result = num1 * num2;
// 		str.textContent = String(num1) + '곱하기' + String(num2) + '는?';

// 		text.value = '';
// 		text.focus();

// 	} else {

// 		print.textContent = '땡';
// 		text.value = '';
// 		text.focus();

// 	}
// });

/*
숫자야구
	1. 컴퓨터가 임의의 숫자 4자리를 만들어 낸다. (숫자가 겹치지 않도록)
	(스트라이크 볼을 알려준다 10회 제한)
	2. 답을 입력한다
	3. 조건문 답이 맞는가?
		맞을 경우 1번으로
		틀렸을 경우 1번과 2번사이에 단계를 하나 추가
			스트라이크, 볼을 알려준다.
			(숫자와 자릿수가 둘다 맞을 경우 스트라이크)
			(숫자만 맞고 자릿수는 틀렸을 경우 볼)
			es) 1S 1B
	<body>
		<h1>1S 1B</h1>
		<form>
			<input />
			<button>입력</button>
		</form>
*/
var randomNum;
var numArr;
var result = document.createElement('h1');
document.body.append(result);
var form = document.createElement('form');
document.body.append(form);
var input = document.createElement('input');
form.append(input);
input.type='text';
input.maxLength = 4;
var btn = document.createElement('button');
btn.textContent = '입력!';
form.append(btn);
var wrong = 0;

var list = document.createElement('div');
document.body.append(list);
var text = '';

function getRandomNumber() {
	randomNum = [1,2,3,4,5,6,7,8,9];
	numArr = [];

	for (var i = 0; i < 4; i += 1) {
		var pick = randomNum.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
		// splice는 배열로 나오기 때문에 첫번째 값을 선택하기 위해서 [0]을 추가
		// 배열에서 하나씩 빼는 거기때문에 전체 숫자가 줄어들수록 뽑는 숫자도 줄어들어야 함 아니면 undefined가 뽑혀나옴 (9-i)
		numArr.push(pick);
	}
}

getRandomNumber();

form.addEventListener('submit', function Asynchronous(e) {
	e.preventDefault();
	var answer = input.value;
	if(answer === numArr.join('')) { // 맞으면
		console.log(true);
		result.textContent = '홈런';
		input.value = '';
		input.focus();

		getRandomNumber();

		wrong = 0;
		//console.log('새로운 숫자 ' + numArr);

	} else { // 틀리면
		var answerArr = answer.split('');
		var strike = 0;
		var ball = 0;
		wrong += 1;

		if (wrong >= 10) {
			console.log('틀린횟수 ' + wrong);
			result.textContent = '10번 넘게 틀려서 실패! 답은 ' + numArr.join(',') + '입니다.';
			input.value = '';
			input.focus();

			getRandomNumber();

			wrong = 0;
		} else {
			for (var i = 0; i < 4; i += 1) {
			// console.log(answerArr[i], numArr[i], answerArr[i] === numArr[i])
			// answerArr는 배열안의 값이 문자열로 입력되기 때문에 숫자로 바꿔주어야 함
				if (Number(answerArr[i]) === numArr[i]) { // 같은 자리인지 확인
					strike ++;
				} else if (numArr.indexOf(Number(answerArr[i])) > -1) {
					ball ++;
				}
			}

			result.textContent = strike + 'S ' + ball + ' B 입니다.';
			input.value = '';
			input.focus();

			text = strike + ' S ' + ball + ' B - ' + answerArr + ' 입니다 ';
            list.append(text);
		}
	}
});
/*
var 숫자배열 = [2,3,4,5];
String(숫자배열[0]) + String(숫자배열[1]) + String(숫자배열[2]) + String(숫자배열[3])
숫자배열.join('')
 */

