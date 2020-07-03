/*
for (var star = 1; star <= 5; star +=1) {
	console.log('*'.repeat(star));
}
// .repeat (프로퍼티)
for (var star = 5; star >= 1; star -= 1){
	console.log('*'.repeat(star));
}

for (var star = 10; star >= 2; star -= 2){
	console.log('*'.repeat(star));
}

// 2배씩 늘어나는 거
for (var star = 1; star <= 16; star *= 2) {
	console.log('*'.repeat(star));
}


// 별 오른쪽 정렬
for (var star = 5; star >= 1; star -= 1){
	console.log(' '.repeat( 5 - star) + '*'.repeat(star));
}
*/
// 별 가운데 정렬
for (var star = 9; star >= 1; star -= 2){
	console.log(' '.repeat((9 - star) / 2) + '*'.repeat(star));
}

/*
    *
   ***
  *****
   ***
    *
*/

/*
객체
	함수 (function(){})
	배열
	함수도 배열도 아닌 객체

숫자
문자
불린
null
undefined


*/
var 묘식 = {
    이름 : '묘식',
    소리 : function 소리(){
        console.log('미야옹')
    },
}

/*
객체 = {
	속성(프로퍼티) : 값,
	속성(메서드) : 함수
}

var 값 = '이름'

묘식.값 // undefined
묘식[값] // "묘식"

대괄호 안에는 변수를 쓸 수 있지만 점 뒤에는 변수를 쓸 수 없음
*/

var 배열 = [
	'사과',
	'오렌지',
	'포도',
	'딸기'
]

//console.log(배열[0]);

// Array (배열을 담당하는 객체 (브라우저가 만들어준 것))
// 배열같은 객체
/*
Array.isArray(배열)
Array.isArray(배열같은객체)
배열인지 확인 isArray

<구구단 구현>
순서도 그리기
컴퓨터가 랜덤한 문제를 낸다 -> 내가 답을 입력한다 -> 답이 맞는지 확인

*/

// Math.floor(Math.random() * 9) + 1
// 1-9까지 숫자가 랜덤하게 나오도록
// Math.ceil(Math.random() * 9) + 1
/*
while (true) {
	var 숫자1 = Math.ceil(Math.random() * 9) + 1;
	var 숫자2 = Math.ceil(Math.random() * 9) + 1;
	var 결과 = 숫자1 * 숫자2;
	var 조건 = true;
	while (조건) {
		var 답 = prompt(String(숫자1) + '곱하기' + String(숫자2) + '는?');
		if (결과 === Number(답)) {
		    alert('딩동댕');
		    조건 = false;
		}else{
		    alert('땡');
		}
	}
}*/
// window 는 브라우저
// document 는 페이지

