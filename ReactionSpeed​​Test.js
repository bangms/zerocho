/*
	※ 시간을 체크하는 방법 ※

	1) new Date();
		ex) var 시작시간 = new Date();
		var 끝시간 = new Date();
		console.log(끝시간 - 시작시간);
	2) console.time -> console.timeEnd
		ex) console.time('시간')
			console.timeEnd('시간')
			괄호 안의 시간은 같은 값이어야 함
			사이의 시간을 리턴
	3) performance.now()
		ex) var 시작시간 = performance.now();
		var 끝시간 = performance.now();
		console.log((끝시간 - 시작시간) / 1000);
		더 정밀한 시간계산을 할 때 / 보통 new Date를 많이 씀

	XXXXXXX 예약어는 변수이름으로 사용 XXXXXXX

	※ 호출 스택 (call stack) ※

	LIFO (Last In First Out 후입선출 구조) 또는 FILO
	 : 먼저 들어간 게 제일 나중에 나옴 / 제일 나중에 들어간 게 제일 먼저 나옴


	* 재귀함수

	function a() {
		a();
	}

	a();

	-> Maximum call stack exceeded Error !

	다른 언어는 꼬리재귀라는 방법이 있는데 자바스크립트는 지원하는 브라우저가 별로 없어서 재귀함수를 쓰는데 제약이 있음

	function a() {
		setTimeout(function() {
			a();
		}, 0);
	}

	a();
 */
var screen = document.querySelector('#screen');
var state = [];
var startTime;
var endTime;
var timesheet;

// waiting 하늘색 / ready 빨간색 / now 초록색
screen.addEventListener('click', function (){
	if (screen.classList.contains('waiting')) { // 현재 대기 상태인지
		screen.classList.remove('waiting');
		screen.classList.add('ready');
		screen.textContent = '초록색이 되면 클릭하세요';

		timesheet = setTimeout(function () {
			startTime = new Date();
			screen.click();
		}, Math.floor(Math.random() * 1000) + 2000); // 2000-3000 사이의 수
	} else if (screen.classList.contains('ready')) { // 준비 상태인지
		if (!startTime) { // 부정 출발 체크
			clearTimeout(timesheet);
			screen.classList.remove('ready');
			screen.classList.add('waiting');
			screen.textContent = '너무 성급하시군요';
		} else {
			screen.classList.remove('ready');
			screen.classList.add('now');
			screen.textContent = '클릭하세요';
		}
	} else if (screen.classList.contains('now')) { // 시작 상태인지
		endTime = new Date();
		console.log('반응속도', endTime - startTime, 'ms');
		state.push(endTime - startTime);
		startTime = null; // 초기화
		endTime = null;
		screen.classList.remove('now');
		screen.classList.add('waiting');
		screen.textContent = '클릭해서 시작하세요';
	}
});

