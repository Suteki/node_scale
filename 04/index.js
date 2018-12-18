const http = require('http')
const cluster = require('cluster')
const cpus = require('os').cpus()
const numCPUs = require('os').cpus().length

// console.log('cpus', cpus);
// console.log('numCPUs', numCPUs);

if (cluster.isMaster) {
  console.log('this is the master process: ', process.pid)
  // cluster.fork()
  // cluster.fork()
  // cluster.fork()

  for (let i=0; i<numCPUs; i++) {
    cluster.fork()
  }
} else {
  console.log('this is the worker process: ', process.pid)
  http.createServer((req, res) => {
    const message = `worker ${process.pid}...`
    console.log(message)
    res.end(message)
  }).listen(3000)
}
