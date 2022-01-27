const router = require("express").Router();
const passport = require("../../authentication/passport");
const controller = require("../../controllers/userController");
const bcrypt = require("bcrypt");

router
  .route("/user/login")
  .get(controller.userFindByEmail)
  .post(controller.userFindIfDoubleCreate);


router.route("/user/lostPassword").get(function (req, res) {
  controller.userFindByEmail(req.body.email).then((resp) => {
    console.log(resp);
    res.json(resp);
  });
});
module.exports = router;
