const React = require('react');
// import React from 'react';
const { Component } = React;

class NumberBaseball extends Component {

}


export const hello = 'hello'; // import { hello };
export const bye = 'hello'; // import { hello, bye };

export default NumberBaseball; // import NumberBaseball;
// default는 한번만

// webpack에 들어있는 babel이 알아서 import를 바꿔줌
// Node 에서는 밑에만 지원
// const React = require('react');
// exports.hello = 'hello';
// module.exports = NumberBaseball;
