
var es = require('event-stream')
var JSONStream = require('JSONStream')

process.stdin  
  .pipe(es.split())
  .pipe(JSONStream.stringify())
  .pipe(process.stdout)
