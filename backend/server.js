//server -> iniciar com ng serve e node server.js
const app = require("./app");
const debug = require("debug")("node-angular");
const http = require("http");

// http.createServer((req, res)=>{
//   res.end('Primeira requisição);
// });

// serve.listen(process.env.PORT || 3000)

const normalizePort = val => {
  var port = parseInt(val, 10);

console.log(port)
  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " esta em uso");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// app.listen(port, function() {
//   console.log('BACKEND is running on port', port,'.')
// })

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
