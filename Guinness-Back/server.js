const port = 3000,
  express = require("express"),
  app = express();

app
  .get("/", (req, res) => {
    res.send("connect.");
  })
  .listen(port, () => {
    console.log(
      `The Express.js server hs started and is listening on port number: ${port}`
    );
  });
