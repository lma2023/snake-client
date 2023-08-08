const { MOVES } = require("./constants");

let connection;

const setupInput = function(conn) {
  connection = conn;// Assign the conn object to the connection variable
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      // Ctrl + C was pressed, terminate the game
      process.exit();
    } else if (MOVES[key]) {
      connection.write(MOVES[key]);
    };
  }

module.exports = { setupInput };
