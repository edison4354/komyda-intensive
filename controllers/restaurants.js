const Restaurant = require('../models/restaurant');

module.exports = (app) => {
  // INDEX
  // app.get('/', async (req, res) => {
  //   const { user } = req;
  //   const currentUser = req.user;
  //   try { 
  //     const posts = await Post.find({}).lean().populate('author');
  //     res.render('posts-index', { posts, currentUser });
  //   } catch (err) {
  //     console.log(err.message);
  //   };
  // });

  app.get('/', function (req, res) {
    Restaurant.find({}).lean()
      .then((restaurants) => res.render('home', { restaurants }))
      .catch((err) => {
        console.log(err.message);
    })
  });
};