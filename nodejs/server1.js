const http = require('http'); // http 모듈이 서버의 역할을 하는 것
const fs = require('fs');

const server = http.createServer((request, response) => {
	console.log('서버 실행');
	fs.readFile('./server1.html', (err, data) => {
		if (err) {
			throw err;
		}
		response.end(data);
	});
}).listen(3000);

server.on('listening', () => {
	console.log('3000번 포트에서 서버 대기중입니다.');
});

server.on('error', (error) => {
	console.error(error);
});