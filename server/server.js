const Koa = require("koa");
// const serve = require("koa-static");
// const render = require("koa-ejs");
const bodyParser = require("koa-bodyparser");

const mongoose = require("mongoose");
const serve = require("koa-static");
const render = require("koa-ejs");
const path = require("path");

const router = require("./router");

mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = new Koa();

app.use(bodyParser());
app.use(serve(path.resolve(__dirname, "../dist")));

render(app, {
  root: path.resolve(__dirname, "views"),
  layout: "index",
  viewExt: "ejs",
  cache: false,
});

app.use(router.routes());

app.listen(3001, () => console.log("Listening on 3001..."));
