
// 강의 코드
  var nums = Array(45).fill().map(function(element, index) {
    return index + 1;
  });

var shuffle = [];
while (nums.length > 0) {
  var number = nums.splice(Math.floor(Math.random() * nums.length), 1)[0];
  shuffle.push(number);
}
// console.log(shuffle);
var bonus = shuffle[shuffle.length - 1]; // 마지막 숫자 가져오기
var randomNum = shuffle
  .slice(0,6)
  .sort(function (a, b) {
    return a - b;
  });
// console.log('당첨숫자들', randomNum.sort(function (a, b) { return a - b; }), '보너스', bonus);
var result = document.getElementById('result');

// 클로저 배우고 수정하기 !
// setTimeout(function func() {
//     var balls = document.createElement('div');
//     balls.textContent = randomNum[0];
//     result.appendChild(balls);
//   }, 1000);

//   setTimeout(function func() {
//     var balls = document.createElement('div');
//     balls.textContent = randomNum[1];
//     result.appendChild(balls);
//   }, 2000);

//   setTimeout(function func() {
//     var balls = document.createElement('div');
//     balls.textContent = randomNum[2];
//     result.appendChild(balls);
//   }, 3000);

//   setTimeout(function func() {
//     var balls = document.createElement('div');
//     balls.textContent = randomNum[3];
//     result.appendChild(balls);
//   }, 4000);

//   setTimeout(function func() {
//     var balls = document.createElement('div');
//     balls.textContent = randomNum[4];
//     result.appendChild(balls);
//   }, 5000);

//   setTimeout(function func() {
//     var balls = document.createElement('div');
//     balls.textContent = randomNum[5];
//     result.appendChild(balls);
//   }, 6000);

setTimeout(function func() {
  var bonusBox = document.getElementsByClassName('bonus')[0];
  var bonusBall = document.createElement('div');
  bonusBall.textContent = bonus;
  bonusBox.appendChild(bonusBall);
}, 7000);

for (var i = 0; i < randomNum.length; i++){
  (function closer(j) {
    setTimeout(function () {
      var balls = document.createElement('div');
      balls.textContent = randomNum[j];
      result.appendChild(balls);
    }, (j + 1) * 1000);
  })(i);
}

