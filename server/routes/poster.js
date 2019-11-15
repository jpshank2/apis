const fs  = require("fs");
let posts = JSON.parse(fs.readFileSync("./posts.json"))

let writePost = () => {
    fs.writeFileSync("./posts.json", JSON.stringify(posts))
    console.log("worked!")
}

let postIt = (post) => {
    posts.data.push(post)
    console.log("working...")
    writePost()
}

let editPost = (id, post) => {
    posts.data[id].text = post
    writePost()
}

let deletePost = id => {
    posts.data.splice(id, 1);
    writePost()
}

module.exports = {
    postIt: postIt,
    editPost: editPost,
    deletePost: deletePost
}