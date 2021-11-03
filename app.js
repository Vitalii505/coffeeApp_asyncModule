var axios = require("axios");

var async = require("async");

// !!! SCRIPT - 1

// async.waterfall(
//   [
//     function (callback) {
//       axios
//         .get("https://jsonplaceholder.typicode.com/posts/")
//         .then(function (response) {
//           callback(null, response.data);
//         });
//     },
//     function (arrPosts, callback) {
//       async.series(
//         [
//           function (callback) {
//             arrPosts.map((post) => {
//               if (post.id === 2) {
//                 return callback(null, post);
//               }
//             });
//           },
//           function (callback) {
//             arrPosts.map((post) => {
//               if (post.id === 4) {
//                 return callback(null, post);
//               }
//             });
//           },
//         ],
//         function (err, results) {
//           callback(null, results);
//         }
//       );
//       //   callback(null, postArrey);
//     },
//     //   callback(null, "done");
//   ],
//   function (err, result) {
//     console.log(result);
//   }
// );

// !!! SCRIPT - 2

var AsyncSquaringLibrary = (posts) =>
  function (number, callback) {
    posts.map((item) => {
      if (item.id === number) {
        callback(null, item);
      }
    });
    // setTimeout(function () {
    //   callback(null, result);
    // }, 200);
  };

async.waterfall(
  [
    function (callback) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/")
        .then(function (response) {
          callback(null, response.data);
        });
    },
    function (arrPosts, callback) {
      async.map(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        AsyncSquaringLibrary(arrPosts),
        function (err, result) {
          callback(null, result);
        }
      );
      //   callback(null, postArrey);
    },
    //   callback(null, "done");
  ],
  function (err, result) {
    console.log(result);
  }
);
