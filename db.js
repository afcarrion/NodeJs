const db = require("mongoose");

/* mongodb+srv://user:user123@cluster0-m7wl6.mongodb.net/telegrame?retryWrites=true&w=majority */
db.Promise = global.Promise;

////"mongodb+srv://db_user_node:platzi@cluster0-m7wl6.mongodb.net/telegrame?retryWrites=true&w=majority",
//"mongodb://localhost:27017/telegrame"

async function connect(url){
    await db.connect( url, 
        { useNewUrlParser: true, useUnifiedTopology:true}
      ).then((resolve)=> console.log('[DB] Success Conected'))
      .catch((reject) => console.error(`[DB] Fail Connect ${reject}`));
}

module.exports = connect;