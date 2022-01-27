const userModel = require("./models/user");
const bcrypt = require("bcrypt");

module.exports = {
  userFindAll: function (req, res) {
    userModel
      .find(req.body)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  userFindByName: function (req, res) {
    userModel
      .findOne({ name: req.params.name })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  userCreate: function (req, res) {
    async () => {
      let phash = await bcrypt.hash(req.body.password, 11);
      console.log(phash);
      req.body.password = phash;
      userModel
        .create(req.body)
        .then((dbModel) => {
          res.json(dbModel);
        })
        .catch((err) => res.status(422).json(err));
    };
  },
  userUpdate: function (req, res) {
    userModel
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  userRemove: function (req, res) {
    userModel
      .findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  userFindByEmail: function (req, res) {
    userModel
      .findOne({ email: req.body.email })
      .then((dbModel) => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  userFindIfDoubleCreate: function (req, res) {
    userModel
      .findOne({ email: req.body.email })
      .then((account) => {
        if (account === null) {
          async function makeUser() {
            req.body.plaintextpw = req.body.password;
            let phash = await bcrypt.hash(req.body.password, 11);
            console.log(phash);
            req.body.password = phash;
            console.log(req.body);
            userModel
              .create(req.body)
              .then((dbModel) => {
                res.json(dbModel);
              })
              .catch((err) => res.status(422).json(err));
          }
          makeUser();
        } else {
          res.status(406).json(res);
        }
      })
      .catch((err) => res.status(422).json(err));
  },
};
