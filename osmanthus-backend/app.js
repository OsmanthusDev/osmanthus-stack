import http from 'http';
import colors from 'colors';
import config from './config/index.js';
import apiRouter from './api/index.js';

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}



/**
 * Get port from environment and store in Express.
 */



const createAppServer = function (app) {
  const connections = new Set();
  
  const port = normalizePort(process.env.PORT || config.port);

  app.use('/api', apiRouter);


  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  app.set('port', port);

  /**
   * Event listener for HTTP server "error" event.
   */
  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */
  function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    console.log(`Listening on ${colors.green(bind)}`);
  }

  /**
   * Create HTTP server.
   */
  const server = http.createServer(app);

  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);
  // 监听请求事件
  server.on('request', (req, res) => {
    console.log('request listen')
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.end(JSON.stringify({
    //   data: 'Hello World!'
    // }));
  });

  server.on('connection', connection => {
    connections.add(connection);

    connection.on('close', () => {
      connections.delete(connection);
    });
  });

}

export default createAppServer
