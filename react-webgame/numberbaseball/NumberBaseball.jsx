const React = require('react');
const { Component } = React;

function getNumbers() { // 숫자 네개를 겹치지 않고 랜덤하게 뽑는 함수

}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = () => {

  };

  onChangeInput = () => {

  };

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도 : {this.state.tries.length}</div>
        <ul>
          {[
            { fruit: '사과', taste: '맛있다'},
            { fruit: '바나나', taste: '맛없다'},
            { fruit: '포도', taste: '시다'},
            { fruit: '귤', taste: '쓰다'},
            { fruit: '감', taste: '떫다'},
            { fruit: '배', taste: '달다'},
            { fruit: '복숭아', taste: '딱딱하다'},
          ].map( (v, i) => // map을 반복문으로 사용 // 화살표 함수에서는 리턴이 없어도 가능 // return 대신 ()만 사용 가능
            <li key={i}><b> {v.fruit} </b> - {v.taste} </li> // key는 고유한 값으로 // key에 index 값을 넣으면 안됨 // 나중에 성능 최적화 할 때 문제가 생김 // 요소가 추가만 되는 배열인 경우 i를 써도 되긴 함 (삭제 X) 
            // react에서 key를 기준으로 엘리먼트를 추가하거나 수정 삭제를 판단하기 때문에 배열의 순서가 바뀌면 문제가 생김
          )}
        </ul>
      </>
    );
  }
}

export default NumberBaseball; 

