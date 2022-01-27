const router = require('express').Router();
const mailTransporter = require('./mailTransporter');
// route to use transporerfunction
router.route('/email/request')
.post(function(req,res){
    res.json(mailTransporter(req.body.email));
});

module.exports = router;