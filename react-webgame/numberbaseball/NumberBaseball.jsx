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
            ['바나나', '맛있다'],
            ['포도', '맛있다'],
            ['귤', '맛있다'],
            ['감', '맛있다'],
            ['배', '맛있다'],
            ['복숭아', '맛있다'],
          ].map((v)=>{ // map을 반복문으로 사용
            return (
            <li><b> {v[0]} </b> - {v[1]} </li>
            )
          })}
          {/* <li><b>사과</b> - 맛있다</li>
          <li><b>바나나</b> - 맛있다</li>
          <li><b>포도</b> - 맛있다</li>
          <li><b>귤</b> - 맛있다</li>
          <li><b>감</b> - 맛있다</li>
          <li><b>배</b> - 맛있다</li>
          <li><b>복숭아</b> - 맛있다</li> */}
        </ul>
      </>
    );
  }
}

// export const hello = 'hello'; // import { hello };
// export const bye = 'hello'; // import { hello, bye };

export default NumberBaseball; // import NumberBaseball;
// default는 한번만
// webpack에 들어있는 babel이 알아서 import를 바꿔줌
// Node 에서는 밑에만 지원
// const React = require('react');
// exports.hello = 'hello';
// module.exports = NumberBaseball;
