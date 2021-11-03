// Generated by CoffeeScript 2.5.0
(function() {
  var asynchronousSearchPosts, asyncs, axios;

  axios = require("axios");

  asyncs = require("async");

  asynchronousSearchPosts = function(posts) {
    return function(number, callback) {
      return posts.map(function(post) {
        if (post.id === number) {
          return callback(null, post);
        }
      });
    };
  };

  asyncs.waterfall([
    function(callback) {
      return axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/posts/"
      }).then(function(response) {
        return callback(null,
    response.data);
      });
    },
    function(arrPosts,
    callback) {
      return asyncs.map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    asynchronousSearchPosts(arrPosts),
    function(err,
    result) {
        return callback(null,
    result);
      });
    }
  ], function(err, results) {
    return console.log(results);
  });

}).call(this);
