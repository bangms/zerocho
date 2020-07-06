const path = require('path');

module.exports = {
  name: 'word-relay-setting',
  mode: 'development', // 실 서비스 : production
  devtool: 'eval', // 빠르게
  resolve: {
    extensions: ['.js', '.jsx'], 
  },
  
  entry: { // 입력
    app: ['./client'],
  },  

  module: {
    rules: [{
      test: /\.jsx?/, // 정규 표현식
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env','@babel/preset-react'],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-hot-loader/babel',
        ],
      }
    }],
  },

  output: { // 출력
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/', // app.use('/dist', express.static(__dirname, 'dist')) // 가상 경로
  },
}