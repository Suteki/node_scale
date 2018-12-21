node . -> run index file
npm i loadteat -g
loadtest -n 300 http://localhost:3000

npm i -g pm2

pm2 start app.js -i 3
pm2 list
pm2 stop app
pm2 delete app
pm2 start app.js -i -1

loadtest -n 2000 http://localhost:3000

pm2 logs
pm2 monit
loadtest -n 3000 http://localhost:3000

pm2 reload app
======
npm i node-localstorage
===
(divide DB layer) - horizontal partitioning (sharding)
===
pm2 start ticket-system.js -i 3

curl http://localhost:3000

pm2 start show.js -i 4
pm2 start reservations.js -i 2

curl http://localhost:3001
curl http://localhost:3002

curl -X PUT http://localhost:3001/hold-seats -d "count=3&showID=5b805a00297ae6047030f2e0"

curl http://localhost:3001/5b805a00297ae6047030f2e0

pm2 reload all
===
!! API Orchestration
!! Messaging Layer - middleware
!! Fault Tolerance
queue -> reserve seats
===
Orchestration layer
===
pm2 start show.js -i 2
pm2 start reservations.js -i 2
pm2 start api.js -i 2
pm2 monit
curl http://localhost:3000
curl http://localhost:3000/reserve -X POST -d "name=Eve&count=5&showID=5b805a00297ae6047030f2e0"
curl http://localhost:3000
===
Database for Node.js Developers with Daniel Khan
RabbitMQ / Apache Kafka - messaging queue
Learning Redis Emmanuel Henri
