const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval', // hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx'], 
  },
  
  entry: {
    app: './client'
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          // preset-env의 설정 입력
          ['@babel/preset-env', {
            // 한국에서 점유율이 5% 넘는 애들 // 크롬 최신 2버전
              targets: {browsers: ['> 5% in KR', 'last 2 chrome versions'],
            },
          }],
          '@babel/preset-react'
        ],
        plugins: []
      }
    }],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
  ],

  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  }
}


