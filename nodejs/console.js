/*
const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
	outside: {
		inside: {
			key: 'value'
		}
	}
}

console.time('전체 시간');

console.log('평범한 로그입니다');
console.log(string, number, boolean);
console.error('에러메시지는 console.error에 담아주세요');

console.dir(obj, {colors: false, depth: 2});
console.dir(obj, {colors: true, depth: 1});

console.time('시간 측정');
for (let i = 0; i < 100000; i++) {
	continue;
}

console.timeEnd('시간 측정');

function b() {
	console.trace('에러 위치 추적');
}

function a() {
	b();
}

a();

console.timeEnd('전체 시간');
*/
/*
const timeout = setTimeout(() => {
	console.log('1.5초 후 실행');
}, 1500);
const interval = setInterval(() => {
	console.log('1초마다 실행')
}, 1000);
const timeout2 = setTimeout(() => {
	console.log('실행되지 않습니다.');
}, 3000);

// 2.5초후에 실행이 끝나기 때문에 timeout2는 실행되지 않음
setTimeout(() => {
	 clearTimeout(timeout2);
	 clearInterval(interval);
}, 2500)

const im = setImmediate(() => console.log('즉시 실행'));
clearImmediate(im);
// 바로 이벤트 루프로 보내버림  // 즉시 실행 - setImmediate 함수
*/

// console.log('__filename',__filename); // 현재파일의 경로 (현재파일 포함)
// console.log('__dirname ',__dirname); // 현재 파일이 들어있는 경로 (현재파일 포함X)

const path = require('path');

// console.log(path.dirname(__filename)); // 파일 경로
// console.log(path.extname(__filename)); // 확장자
// console.log(path.basename(__filename)); // 파일이름

// console.log(path.parse(__filename)); // 분해
/*
console.log(path.format({ // 합침
  root: 'D:\\',
  dir: 'D:\\dev\\workspace\\practice\\zerocho\\nodejs',
  base: 'console.js',
  ext: '.js',
  name: 'console'
}));
*/

// console.log(path.normalize('C://user\dd')); // 알아서 맞게 바꿔줌

// path.join 절대경로 무시하고 합침
// path.resolve 절대경로 고려하고 합침 루트는 C:\(윈도)
console.log(__dirname); // D:\dev\workspace\practice\zerocho\nodejs\console.js
console.log(path.join(__dirname, '..', '..', '/users', '.', '/zerocho')); // D:\dev\workspace\practice\users\zerocho
console.log(path.resolve(__dirname, '..', '..', '/users', '.', '/zerocho')); // D:\zerocho
