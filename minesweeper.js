var dataset = [];
var tbody = document.querySelector('#table tbody');
var stop = false;
var openBoxCount = 0;
var codeList = {
	opened: -1,
	question_mark: -2,
	flag: -3,
	flag_mine: -4,
	question_mine: -5,
	mine: 1,
	normal: 0
};
// Scope(스코프)
/*
var name = 'zero';
function outer() {
    console.log('외부', name); // 외부 zero
    function inner() {
        var enemy = 'nero';
        console.log('내부', name); // 내부 zero
    }
    inner();
}
outer();
console.log(enemy); // referenceError : enemy is not defined

// 렉시컬 스코프
var name = 'zero';
function log() {
    console.log(name);
}
function wrapper() {
    name = 'nero';
    log();
}
wrapper(); // 'nero'

for (var i = 0; i < 100; i++){
    setTimeout(function() { // 1초뒤에 1초마다 실행
        console.log(i); // i는 29번째 줄 i가 된다. // setTimeout이 실행될 때(1초뒤)에는 이미 i는 100이 되어있음
    }, i * 1000);
}
// 100만 계속해서 찍힘 100번
// 함수 안의 변수는 '실행'될 때 값이 결정됨.
 */
document.querySelector('#exec').addEventListener('click', function () {
	tbody.innerHTML = ''; // 내부 먼저 초기화
	document.querySelector('#result').textContent = '';
	dataset = []; // 데이터 내용 초기화 // X위치 초기화
	openBoxCount = 0;
	stop = false;

	var hor = parseInt(document.querySelector('#hor').value);
	var ver = parseInt(document.querySelector('#ver').value);
	var mine = parseInt(document.querySelector('#mine').value);
	// console.log(hor, ver, mine);

	// 지뢰 위치 뽑기
	// 42(5번째 줄 2번째 칸), 10(1번째 줄 10번째 칸), 27(3번째 줄 7번째 칸)
	var nums = Array(hor * ver)
		.fill()
		.map(function(element, index) {
	    	return index;
	  	});

	var shuffle = [];

	while (nums.length > hor * ver - mine) {
	  var number = nums.splice(Math.floor(Math.random() * nums.length), 1)[0];
	  shuffle.push(number);
	}
	// console.log(shuffle);
	// 지뢰 테이블 만들기
	// 입력받은 가로 세로 값에 따라 동적으로 tr, td 생성
	// 2차 배열 (10x10)

	for (var i = 0; i < ver; i++){ // 세로칸을 먼저 만들어줌 (tr)
		var arr = [];
		var tr = document.createElement('tr');
		dataset.push(arr);
		for (var j = 0; j < hor; j++) { // 가로칸 (td)
			arr.push(codeList.normal);
			var td = document.createElement('td');
			td.addEventListener('contextmenu', function (e) {
				e.preventDefault();

				if (stop) {
					return;
				}

				var parentTr = e.currentTarget.parentNode;
				var parentTbody = e.currentTarget.parentNode.parentNode;
				//e.currentTarget, e.target;
				var 칸 = Array.prototype.indexOf.call(parentTr.children, e.currentTarget);
				var 줄 = Array.prototype.indexOf.call(parentTbody.children, parentTr);
				// console.log('칸 = ',칸, '줄 = ', 줄);

				if (e.currentTarget.textContent === '' || e.currentTarget.textContent === 'X') {
					e.currentTarget.textContent = '!';
					e.currentTarget.classList.remove('question');
					e.currentTarget.classList.add('flag');

					if (dataset[줄][칸] === codeList.mine) {
						dataset[줄][칸] = codeList.flag_mine;
					} else {
						dataset[줄][칸] = codeList.flag;
					}
				} else if (e.currentTarget.textContent === '!') {
					e.currentTarget.textContent = '?';
					e.currentTarget.classList.remove('flag');
					e.currentTarget.classList.add('question');

					if (dataset[줄][칸] === codeList.flag_mine) {
						dataset[줄][칸] = codeList.question_mine;
					} else {
						dataset[줄][칸] = codeList.question_mark;
					}
				} else if (e.currentTarget.textContent === '?') {
					e.currentTarget.classList.remove('question');

					if (dataset[줄][칸] === codeList.question_mine) {
						e.currentTarget.textContent = 'X';
						dataset[줄][칸] = codeList.mine;
					} else {
						e.currentTarget.textContent = '';
						dataset[줄][칸] = codeList.normal;
					}
				}
			});
			td.addEventListener('click', function (e) {
				if (stop) {
					return;
				}

				var parentTr = e.currentTarget.parentNode;
				var parentTbody = e.currentTarget.parentNode.parentNode;
				var 칸 = Array.prototype.indexOf.call(parentTr.children, e.currentTarget);
				var 줄 = Array.prototype.indexOf.call(parentTbody.children, parentTr);
				// 1일 때는 열렸을 때
				if ([codeList.opened, codeList.flag, codeList.flag_mine, codeList.question_mine, codeList.question_mark]
					.includes(dataset[줄][칸])) {
					return;
				}
				// 클릭했을때
				e.currentTarget.classList.add('opened');
				openBoxCount += 1;
				// 지뢰클릭
				if (dataset[줄][칸] === codeList.mine) {
					e.currentTarget.textContent = '펑';
					document.querySelector('#result').textContent = '실패';
					stop = true;
				} else { // 지뢰가 아닌 경우 주변 지뢰 개수
					var 주변 = [
						dataset[줄][칸-1], dataset[줄][칸+1]
					];
					if (dataset[줄-1]) {
						주변 = 주변.concat([dataset[줄-1][칸-1],dataset[줄-1][칸],dataset[줄-1][칸+1]]);
					}
					if (dataset[줄+1]) {
						주변 = 주변.concat(dataset[줄+1][칸-1],dataset[줄+1][칸],dataset[줄+1][칸+1]);
					}
					var 주변지뢰개수 = 주변.filter(function(v) {
						return [codeList.mine, codeList.flag_mine, codeList.question_mine].includes(v);
						//v === codeList.mine;
					}).length;

					// 거짓인 값 false '' 0 null undefined NaN
					e.currentTarget.textContent = 주변지뢰개수 || '';
					dataset[줄][칸] = codeList.opened;

					if(주변지뢰개수 === 0) {
						console.log('주변을 엽니다');
						// 주변 8칸 동시 오픈(재귀함수)
						// 반복문을 사용하는 방법과 함수가 자기자신을 호출하는 방법이 있음
						var 주변칸 = [];
						주변칸 = 주변칸.concat([
							tbody.children[줄].children[칸-1],
							tbody.children[줄].children[칸+1],
						]);
						if (tbody.children[줄-1]){
							주변칸 = 주변칸.concat([
								tbody.children[줄-1].children[칸-1],
								tbody.children[줄-1].children[칸],
								tbody.children[줄-1].children[칸+1],
							]);
						}
						if (tbody.children[줄+1]) {
							주변칸 = 주변칸.concat([
								tbody.children[줄+1].children[칸-1],
								tbody.children[줄+1].children[칸],
								tbody.children[줄+1].children[칸+1],
							]);
						}
						주변칸.filter(function (v) {
							return !!v;
						}).forEach(function (옆칸) {
							var 부모tr = 옆칸.parentNode;
							var 부모tbody = 옆칸.parentNode.parentNode;
							var 옆칸칸 = Array.prototype.indexOf.call(부모tr.children, 옆칸);
							var 옆칸줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
							console.log(dataset[옆칸줄][옆칸칸] === codeList.opened); // false일때가 비어있을 때 true가 주변에 지뢰가 있을때?
							if (dataset[옆칸줄][옆칸칸] !== codeList.opened) {
								옆칸.click();
							}
						});
					}
				}
				// console.log(openBoxCount, hor * ver - mine);
				if(openBoxCount === hor * ver - mine){
					stop = true;
					document.querySelector('#result').textContent = '승리';
				}
			});
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	//console.log('shuffle = ', shuffle);
	// 지뢰 심기
	for (var k = 0; k < shuffle.length; k++) {
		var 세로 = Math.floor(shuffle[k] / ver);
		var 가로 = shuffle[k] % ver;
		// console.log(ver, hor);
		tbody.children[세로].children[가로].textContent = 'X';
		dataset[세로][가로] = codeList.mine;
	}
		// console.log(dataset);
});
// currentTarget 과 target의 차이점
// tbody.addEventListener('contextmenu', function(e){
// 	console.log('커런트 타켓', e.currentTarget); // 이벤트 리스너를 단 대상
// 	console.log('타겟', e.target); // 실제로 이벤트가 발생한 대상
// });

// 재귀함수
// 무한 반복될 경우 스택오버플로우 문제 발생
// function recursive(num){
// 	console.log(num);
// 	if(num < 5) {
//  		recursive(num + 1);
// 	}
// }
// recursive(1);