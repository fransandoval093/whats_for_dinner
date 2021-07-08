const router = require('express').Router();
const { User } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        where: {
          userId: req.session.userId,
        },
      });
      const newUser = userData.map((user) => user.get({ plain: true }));
      res.render('homepage', {
        layout: 'main',
        newUser,
      });
    } catch (err) {
      console.log(err);
      res.redirect('login');
    }
});
module.exports = router;