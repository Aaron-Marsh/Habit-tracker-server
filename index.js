const app = require("./server") // bring in server from server.js

const port = process.env.PORT || 3001; // set port to environment port, if not available run on 3001

app.listen(port, (console.log(`Express departing from port ${port}`))) // runs server
