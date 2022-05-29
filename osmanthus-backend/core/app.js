import http from 'http';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';
import responseTime from 'response-time';
import compression from 'compression';
import timeout from 'connect-timeout';
import createError from 'http-errors';

class Application {
  #app = null;
  server = null;
  #datasource = null;
  #self = null;
  #version = '1.0.0';
  #clients = new Set();
  #connections = new Set();

  constructor() {

  }

  createApp() {
    this.app = express();

    // view engine setup
    this.app.set('views', path.join(path.dirname('.'), 'view'));
    this.app.set('view engine', 'hbs');

    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(responseTime());
    this.app.use(compression());
    this.app.use(timeout('10s'));
    this.app.use(logger('dev'));
    // parse application/json
    this.app.use(express.json());
    // parse application/x-www-form-urlencoded
    this.app.use(express.urlencoded({ extended: false }));

    this.app.use('/static', express.static(path.join(path.dirname('../'), 'public')));
  }

  createServer() {
    this.server = http.createServer(this.app);
  }

  /**
   * Event listener for HTTP server "listening" event.
   */
  onServerListening() {
    var addr = this.server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    console.log(`Listening on ${colors.green(bind)}`);
  }

  /**
   * Event listener for HTTP server "error" event.
   */
  onServerError(error) {
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

  onServerRequest(req, res) {
    console.log('request listen')
  }

  onServerConnection(connection) {
    this.connections.add(connection);

    connection.on('close', () => {
      this.connections.delete(connection);
    });
  }


  // catch 404 and forward to error handler
  handleNotFound(req, res, next) {
    next(createError(404));
  }

  // error handler
  handleError(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  }

  addRouter() {

  }

  run() {
    this.createApp();
    this.app.use('/api', apiRouter);
    this.app.use(this.handleNotFound)
    this.app.use(this.handleError)

    this.createServer();
  }
}
