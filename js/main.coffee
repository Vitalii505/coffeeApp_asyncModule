axios = require("axios");
asyncs = require("async");

# !!! SCRIPT 1
# asyncs.waterfall([
#     (callback) -> axios(
#           method: "get",
#           url: "https://jsonplaceholder.typicode.com/posts/").then( (response) -> callback null, response.data)
          
#     (arrPosts, callback) -> 
#       asyncs.series([
#         (callback) -> arrPosts.map (post) -> 
#           if post.id == 5 then callback(null, post)
#         (callback) -> arrPosts.map (post) -> 
#           if post.id == 25 then callback(null, post)
#       ], (err, results) -> callback null, results)
#   ],
#   (err, results) -> console.log results 
# )

# !!! SCRIPT 2
asynchronousSearchPosts = (posts) ->
  (number, callback) -> posts.map (post) ->
    if post.id == number then callback(null, post)

asyncs.waterfall([
    (callback) -> axios(
          method: "get",
          url: "https://jsonplaceholder.typicode.com/posts/").then( (response) -> callback null, response.data)
          
    (arrPosts, callback) -> 
      asyncs.map [1..10], 
        asynchronousSearchPosts arrPosts
      ,
      (err, result) -> callback null, result
  ],
  (err, results) -> console.log results 
)