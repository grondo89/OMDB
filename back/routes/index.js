const express = require("express");
const passport = require("../passport/passport");
const S = require("sequelize");

const templates = require("../templates");
const User = require("../models/Users");

const router = express.Router();

//---------- MIDDLEWARE isLogedIn: check if the user is logged
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    // passport method that check if a user is authenticated or not
    next();
  } else {
    res.redirect("/login");
  }
}

function isLogged(req, res, next) {
  if (req.isAuthenticated()) {
    // passport method that check if a user is authenticated or not
    res.redirect("/");
  } else {
    next();
  }
}
// ------------ //

// router.get("/login", isLogged, (req, res) => {
//   res.send(templates.login);
// });

// router.get("/register", isLogged, (req, res) => {
//   res.send(templates.register);
// });

// router.get("/public", (req, res) => {
//   res.send(templates.public);
// });

router.get("/usercheck", function(req, res) {
  console.log("SOY USER EN EL BACK!", req.user, )
  res.send(req.user);
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.post("/users", (req, res) => {
  User.create(req.body).then(user => {
    res.status(200).send(user);
  });
});

router.put("/addmovie/:userId", (req, res) => {
  User.update(
    {
      favorites: S.fn("array_append", S.col("favorites"), req.body.peli)
    },
    {
      where: {
        id: req.body.userId
      }
    }
  ).then(data => {
    res.send(data);
  });
});

router.put("/remmovie/:userId", (req, res) => {
  let peli2 = req.body.peli;
  let user2 = req.body.userId;
  User.findByPk(req.body.userId)
    .then(data => {
      let favs = data.favorites;
      let editFavs = favs.filter(fav => {
        return fav !== peli2;
      });
      return editFavs;
    })
    .then(editFavs => {
      User.update(
        {
          favorites: editFavs
        },
        {
          where: {
            id: user2
          }
        }
      ).then(data => {
        res.send(data);
      });
    });
});

router.post("/logout", (req, res) => {
  if (req.isAuthenticated()) {
    req.logout(); // passport method for logout
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});

router.get("/findusers/:user", function(req, res) {
  let nombre = req.params.user;

  User.findAll({
    where: {
      email: S.where(S.fn("LOWER", S.col("email")), "LIKE", "%" + nombre + "%")
    }
  }).then(users => {
    return res.json(users);
  });
});

router.get("/findsingleuser/:userId", function(req, res) {
  let nombre = req.params.userId;

  User.findAll({
    where: {
      id: nombre
    }
  }).then(user => {
    return res.json(user);
  });
});

module.exports = router;
