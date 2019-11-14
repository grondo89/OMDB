const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const router = require("./routes/index");
const path = require("path");
const db = require("./db/db");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({ secret: "GG-OMDB" }));
// app.use(passport.initialize());
// app.use(passport.session());

app.use(express.static(path.join(__dirname, "public")));

/* ------------ PASSPORT -----------*/

// passport init and session connection
app.use(passport.initialize());
app.use(passport.session()); // Express stuffs the id of the session object into a cookie on the client's browser, which gets passed back to express in a header on every request. This is how Express identifies multiple requests as belonging to a single session even if the user is not logged in.

//     /* ------------ PASSPORT -----------*/

app.use("/", router);

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/public", "index.html"));
});

db.sync({ force: false }).then(c => {
  console.log(`connected to ${c.config.database} DB`);
  app.listen(3000, () => console.log("listening at port 3000!"));
});
