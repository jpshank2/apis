const express = require("express");
const posts   = require("../posts.json");
const router  = express.Router();
const Poster  = require("./poster")

router.get("/", (req, res) => {
    res.send(posts);
})

router.post("/", (req, res) => {
    Poster.postIt(req.body)
    res.sendStatus(200);
})

router.put("/", (req, res) => {
    Poster.editPost(req.body.id, req.body.text)
})

router.delete("/", (req, res) => {
    Poster.deletePost(req.body.id)
}) 

module.exports = router;