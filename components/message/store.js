const db = require("mongoose");
const Model = require("./model");

/* mongodb+srv://user:user123@cluster0-m7wl6.mongodb.net/telegrame?retryWrites=true&w=majority */
db.Promise = global.Promise;

db.connect(
  "mongodb+srv://user:user123@cluster0-m7wl6.mongodb.net/telegrame?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
console.log("Conexion ok");

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
  console.log(message);
}

async function getMessages() {
  const messages = await Model.find();
  return messages;
}

module.exports = {
  add: addMessage,
  list: getMessages,
};
