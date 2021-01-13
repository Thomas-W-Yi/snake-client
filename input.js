// const { connect } = require('./client');
let connection;
const { cannedMsg, moves } = require('./constants');

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write(moves[0]);
  } else if (key === 'a') {

    connection.write(moves[1]);
  } else if (key === 's') {
    
    connection.write(moves[2]);
 
  } else if (key === 'd') {
    
    connection.write(moves[3]);

  } else if (key === '1') {
    connection.write(`Say: ${cannedMsg[0]}`);
  } else if (key === '2') {
    connection.write(`Say: ${cannedMsg[1]}`);
  } else if (key === '3') {
    connection.write(`Say: ${cannedMsg[2]}`);
  }
};
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);

  });
  return stdin;
};

module.exports = { setupInput };