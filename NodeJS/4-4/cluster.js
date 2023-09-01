const http = require('http');
const cluster = require('cluster');
const numCPUs =require('os').cpus().length; // cpu 코어 수

if (cluster.isMaster) {
    console.log(`마스터 프로세스 아이디: ${process.pid}`);
    // CPU 개수만큼 워커를 생산
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    // 워커가 종료되었을 때
    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.procss.pid}번 워커가 종료되었습니다.`);
        console.log('code', code, 'signal', signal);
    });
} else {
    // 워커들이 포트에서 대기
    http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write('<h1>Hello Node!</h1>');
        res.end('<p>Hello Cluster!</p>');
    }).listen(8086);

    console.log(`${process.pid}번 워커 실행`);
}