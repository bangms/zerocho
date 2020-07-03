
/*
자바스크립트의 DOM 객체는 연산을 수행할 때마다 DOM tree라는 자료구조에 접근해야 하기 때문에 자바스크립트의 성능을 저하시키는 주된 요인 중 하나이다.
(특히 여러 태그를 반복문을 통해서 동시에 추가할 경우!
미리 가짜 document를 만들어서 여기에 추가를 한 후 한번에 document에 추가하면 됨.
이렇게 하면 진짜 document는 한 번만 조작하면 되기 때문에 성능에 부담이 덜해짐)

따라서, 자바스크립트의 성능을 최적화하기 위해서는 DOM 객체 접근을 최소화하도록 코드를 작성해야 한다.

createDocumentFragment 노드를 생성해서 사용하면 라이브 DOM 트리 외부에 경량화 된 문서 DOM을 만들 수 있다.

마치 라이브 DOM 트리처럼 작동하지만 메모리 상에서만 존재하는 빈 문서 템플릿으로 생각하면 된다. -> 가짜 DOCUMENT 생성
 */

var table = document.getElementById('table');
var data = [];
var score = document.getElementById('score');

function init() {
	var fragment = document.createDocumentFragment();
	[1, 2, 3, 4].forEach(function () {
		var colData = [];
		data.push(colData);
		var tr = document.createElement('tr');
		[1, 2, 3, 4].forEach(function() {
			colData.push(0);
			var td = document.createElement('td');
			tr.appendChild(td);
		});
		fragment.appendChild(tr);
	});
	table.appendChild(fragment);
}

function createRandom() {
	var emptyArr = [];
	data.forEach(function (colData, i) {
		colData.forEach(function (rowData, j) {
			if (!rowData) {
				emptyArr.push([i,j]);
			}
		});
	});
	console.log(emptyArr);
	var randomBox = emptyArr[Math.floor(Math.random() * emptyArr.length)];
	data[randomBox[0]][randomBox[1]] = 2;
	print();
}

function print() { // data를 받아서 화면에 표시해주는 용도
	data.forEach(function (colData, i) {
		colData.forEach(function (rowData, j) {
			if (rowData > 0) {
				table.children[i].children[j].textContent = rowData;
			} else {
				table.children[i].children[j].textContent = '';
			}
		});
	});
}

init();
createRandom();
print();

var dragStrat = false;
var dragIng = false;
var startPoint;
var endPoint;

document.addEventListener('touchstart', function(e) {
    e.preventDefault();
    dragStrat = true;
    startPoint = [e.touches[0].clientX, e.touches[0].clientY];
    console.log('startPoint X = ',e.touches[0].clientX, ' Y = ', e.touches[0].clientY);
}, {passive: false});

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
    if(dragStrat) {
    	dragIng = true;
    }
}, {passive: false});

document.addEventListener('touchend', function(e) {
    e.preventDefault();
    endPoint = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
	if (dragIng) {
		var position;
		var x = endPoint[0] - startPoint[0];
		var y = endPoint[1] - startPoint[1];
		if (x < 0 && Math.abs(x) / Math.abs(y) > 1) {
	      position = '왼쪽';
	    } else if (x > 0 && Math.abs(x) / Math.abs(y) > 1) {
	      position = '오른쪽';
	    } else if (y > 0 && Math.abs(x) / Math.abs(y) < 1) {
	      position = '아래';
	    } else if (y < 0 && Math.abs(x) / Math.abs(y) < 1) {
	      position = '위';
	    }
	    console.log(x, y, position);
	}
	dragStrat = false;
	dragIng = false;

	switch (position) {
    case '왼쪽':
      var newdata = [
        [],
        [],
        [],
        []
      ];
      data.forEach(function(colData, i) {
        colData.forEach(function(rowData, j) {
          if (rowData) {
            if (newdata[i][newdata[i].length - 1] && newdata[i][newdata[i].length - 1] === rowData) {
              newdata[i][newdata[i].length - 1] *= 2;
              var nowScore = parseInt(score.textContent, 10);
              score.textContent = nowScore + newdata[i][newdata[i].length - 1];
            } else {
              newdata[i].push(rowData);
            }
          }
        });
      });
      console.log(newdata);
      [1, 2, 3, 4].forEach(function(colData, i) {
        [1, 2, 3, 4].forEach(function(rowData, j) {
          data[i][j] = newdata[i][j] || 0;
        });
      });
      break;
    case '오른쪽':
      var newdata = [
        [],
        [],
        [],
        []
      ];
      data.forEach(function(colData, i) {
        colData.forEach(function(rowData, j) {
          if (rowData) {
            if (newdata[i][0] && newdata[i][0] === rowData) {
              newdata[i][0] *= 2;
              var nowScore = parseInt(score.textContent, 10);
              score.textContent = nowScore + newdata[i][0];
            } else {
              newdata[i].unshift(rowData);
            }
          }
        });
      });
      console.log(newdata);
      [1, 2, 3, 4].forEach(function(colData, i) {
        [1, 2, 3, 4].forEach(function(rowData, j) {
          data[i][3 - j] = newdata[i][j] || 0;
        });
      });
      break;
    case '위':
      var newdata = [
        [],
        [],
        [],
        []
      ];
      data.forEach(function(colData, i) {
        colData.forEach(function(rowData, j) {
          if (rowData) {
            if (newdata[j][newdata[j].length - 1] && newdata[j][newdata[j].length - 1] === rowData) {
              newdata[j][newdata[j].length - 1] *= 2;
              var nowScore = parseInt(score.textContent, 10);
              score.textContent = nowScore + newdata[j][newdata[j].length - 1];
            } else {
              newdata[j].push(rowData);
            }
          }
        });
      });
      console.log(newdata);
      [1, 2, 3, 4].forEach(function(rowData, i) {
        [1, 2, 3, 4].forEach(function(colData, j) {
          data[j][i] = newdata[i][j] || 0;
        });
      });
      break;
    case '아래':
      var newdata = [
        [],
        [],
        [],
        []
      ];
      data.forEach(function(colData, i) {
        colData.forEach(function(rowData, j) {
          if (rowData) {
            if (newdata[j][0] && newdata[j][0] === rowData) {
              newdata[j][0] *= 2;
              var nowScore = parseInt(score.textContent, 10);
              score.textContent = nowScore + newdata[j][0];
            } else {
              newdata[j].unshift(rowData);
            }
          }
        });
      });
      console.log(newdata);
      [1, 2, 3, 4].forEach(function(rowData, i) {
        [1, 2, 3, 4].forEach(function(colData, j) {
          data[3 - j][i] = newdata[i][j] || 0;
        });
      });
      break;
  	}
  	print();
  	createRandom();
}, {passive: false});


