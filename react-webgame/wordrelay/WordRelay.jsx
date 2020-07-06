const React = require('react');
const { Component } = React;

class WordRelay extends React.Component {
  state = {
    word: '지혜인',
    value: '',
    result: '',
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length -1] === this.state.value[0]) {
      this.setState({
        result: '딩동댕',
        word: this.state.value,
        value: '',
      });
      this.input.focus();
    } else {
      this.setStete({
        result: '땡',
        value: '',
      });
      this.input.focus();
    }
  }

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  }

  input;

  onRefInput = (c) => {
    this.input = c;
  };

  render () {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.onRefInput} onChange={this.onChangeInput} value={this.state.value} />
          <button>입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    )
  }
}
// value와 onChange는 세트 그게 아니면 defaultValue={this.state.value}
module.exports = WordRelay;
