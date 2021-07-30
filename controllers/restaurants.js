const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');

module.exports = (app) => {

  // Show all restaurants
  app.get('/', (req, res) => {
    const { user } = req;
    const currentUser = req.user;
    // console.log(currentUser);
    // console.log(req.cookies);
    Post.find({}).lean().populate('author')
      .then((posts) => res.render('posts-index', { posts, currentUser }))
      .catch((err) => {
        console.log(err.message);
      });
  });
}