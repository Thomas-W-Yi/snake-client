const { connect } = require('./client');

console.log('Connecting ...');
let conn = connect();
conn.on('connect', () => {
  // setTimeout(() => {
  //   conn.write("Move: up");
  // }, 50);
  // setInterval(() => {
  //   conn.write("Move: up");
  // }, 50);
  
});
