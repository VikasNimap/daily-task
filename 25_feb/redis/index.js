const redis = require('redis');
const client = redis.createClient({
  host: 'localhost',
  port: 6379
});

client.on('connect', function() {
    console.log('Redis client connected');
});
client.set('key', 'value', redis.print);

client.get('key', function(error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log('Result: ' + result);
  }
});
// client.quit();
client.quit(function (err, reply) {
    console.log('Redis client closed');
    // the client has been closed, you can no longer use it
});
