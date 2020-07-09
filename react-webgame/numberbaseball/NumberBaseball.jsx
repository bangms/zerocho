const React = require('react');
const { Component } = React;

import Try from './Try';

function getNumbers() { // 숫자 네개를 겹치지 않고 랜덤하게 뽑는 함수

}

class NumberBaseball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      value: '',
      answer: getNumbers(),
      tries: [],
    };
    this.onSubmitForm = this.onSubmitForm.bind(this);
    // this.onChangeInput = this.onChangeInput.bind(this);
  }

  onSubmitForm(e) {
    e.preventDefault();
    console.log(this.state.value);
  };

  onChangeInput(e) {
    console.log(this); // bind를 안해주면 this가 undefined
    this.setState({
      value: e.target.value,
    })
  };

  fruits = [
    { fruit: '사과', taste: '맛있다'},
    { fruit: '바나나', taste: '맛없다'},
    { fruit: '포도', taste: '시다'},
    { fruit: '귤', taste: '쓰다'},
    { fruit: '감', taste: '떫다'},
    { fruit: '배', taste: '달다'},
    { fruit: '복숭아', taste: '딱딱하다'},
  ]

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          {/* jsx에서 주석을 남기는 방법 */}
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도 : {this.state.tries.length}</div>
        <ul>
          {this.fruits.map( (v, i) => {
            return (
              <Try key={v.fruit + v.taste} value={v} index={i} /> // 가독성 재사용성 성능최적화를 위해서 component 단위로 분해하는 게 좋음
            )
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball; 
