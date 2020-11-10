const app = require("./src/app");
const { DB_URI } = require("./src/configs");
//const mongoose = require("mongoose");
//mongoose.connect(DB_URI);

app.listen(25565, () => {
  console.log("running on port 25565");
  console.log("--------------------------");
});
