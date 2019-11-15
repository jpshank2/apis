const express    = require("express");
const cors       = require("cors");
const bodyParser = require("body-parser");
const postRouter = require("./routes/posts");
const app        = express();
const PORT       = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/posts", postRouter);

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`)
});

module.exports = app;