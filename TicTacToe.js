/*
	var arr = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]
	2차원 배열

	<table class = "wrap">
		<tr class = "row">
			<td> </td>
			<td> </td>
			<td> </td>
		</tr>
		<tr class = "row">
			<td> </td>
			<td> </td>
			<td> </td>
		</tr>
		<tr class = "row">
			<td> </td>
			<td> </td>
			<td> </td>
		</tr>
	</table>
 */
// 칸들 = col
// 줄들 = wrap
// 줄 = row
// 칸 = box
var body = document.body;
var table = document.createElement('table');
var wrap = [];
var col = [];
var turn = 'X';
var print = document.createElement('div');

var callback = function (e) {
	if (turn === 'O') {
		return;
	}
    // console.log(e.target); // 칸
    // console.log(e.target.parentNode); // 줄
    // console.log(e.target.parentNode.parentNode); // 테이블

    var eachRows = wrap.indexOf(e.target.parentNode);
    //console.log('몇줄', eachRows);
    var eachCols = col[eachRows].indexOf(e.target);
    //console.log('몇칸', eachCols);

    if(col[eachRows][eachCols].textContent !== '') {// 칸이 이미 채워져 있는가
    	console.log('빈칸이 아닙니다.');
    } else { // 빈칸이면
    	console.log('빈칸입니다.');
    	col[eachRows][eachCols].textContent = turn;

    	var full = resultCheck(eachRows, eachCols);
		var empty = [];
		col.forEach(function (row) {
			row.forEach(function (box) {
				empty.push(box);
			});
		});
		empty = empty.filter(function (box) { return !box.textContent });
	    // 다 찼으면
	    if (full) {
	    	reset(false);
	    } else if (empty.length === 0) {// 칸을 더이상 선택할 수 없음
	    	reset(true);
	    } else { // 다 안찼으면
	    	if (turn === 'X') {
	    		turn = 'O';
	    	}
	    	setTimeout(function () {
	    		// console.log('컴퓨터의 턴 입니다.');
	    		// 빈 칸 중 하나를 선택한다.
	    		var pick = empty[Math.floor(Math.random() * empty.length)];
	    		pick.textContent = turn;
	    		// 컴퓨터가 승리했는지 체크
	    		var eachRows = wrap.indexOf(pick.parentNode);
	    		var eachCols = col[eachRows].indexOf(pick);
	    		var full = resultCheck(eachRows, eachCols);
			    // 다 찼으면
			    if (full) {
			    	reset();
			    }
			    		// 턴을 나한테 넘긴다.
			    		turn = 'X';
			}, 1000);
	    }
    }
};

for (var i = 1; i <= 3; i += 1) {
	var row = document.createElement('tr');
	wrap.push(row);
	col.push([]);
	for (var j = 1; j <= 3; j += 1) {
		var box = document.createElement('td');
		box.addEventListener('click', callback);
		col[i-1].push(box);
		row.appendChild(box);
	}
	table.appendChild(row);
}
body.appendChild(table);
body.append(print);
//console.log('줄들', wrap, '칸들', col);

function resultCheck(eachRows, eachCols) {
	// 세칸 다 채워 졌는지 확인
    var full = false;
    // 가로줄 검사
    if (
    	col[eachRows][0].textContent === turn &&
    	col[eachRows][1].textContent === turn &&
    	col[eachRows][2].textContent === turn
    ) {
    	full = true;
    }
    // 세로줄 검사
    if (
    	col[0][eachCols].textContent === turn &&
    	col[1][eachCols].textContent === turn &&
    	col[2][eachCols].textContent === turn
    ) {
    	full = true;
    }
    // 대각선 검사
	if(
		col[0][0].textContent === turn &&
    	col[1][1].textContent === turn &&
    	col[2][2].textContent === turn
    ) {
		full = true;
	}
	if(
		col[0][2].textContent === turn &&
    	col[1][1].textContent === turn &&
    	col[2][0].textContent === turn
    ){
		full = true;
	}

	return full;
}

function reset(tie) {
	if (tie) {
		print.textContent = '무승부';
	} else {
		print.textContent = turn + ' 님이 승리!';
	}

	// 초기화
	setTimeout(function () {
		print.textContent = '';
		col.forEach(function (row) { // forEach 배열에 대한 반복
			row.forEach(function (box) { // 2차원 배열이기 때문에 2번 반복
				box.textContent = '';
			});
		});
	turn = 'X';
	}, 1000);
}
