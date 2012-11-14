
var es = require('event-stream')
var JSONStream = require('JSONStream')

process.stdin  
  .pipe(es.split(/\r?\n/))
  .pipe(JSONStream.stringify())
  .pipe(process.stdout)
