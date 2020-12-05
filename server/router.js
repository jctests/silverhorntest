const Router = require("@koa/router");
const { Todo, Setting } = require("./db/models");
const axios = require("axios");

const router = new Router();

const QUERY_MAP = {
  true: true,
  false: false,
};

router.get("/", async (ctx) => {
  const isFirstTime = await Setting.findOne({});

  if (!isFirstTime) {
    let result = await axios.get("https://jsonplaceholder.typicode.com/todos");

    await Todo.insertMany(result.data.slice(0, 9));
    await Setting.create({ isFirstTime: false });
  }

  await ctx.render("index");
});

router.get("/todos", async (ctx) => {
  if (["true", "false"].includes(ctx.query.completed)) {
    ctx.body = await Todo.find({ completed: QUERY_MAP[ctx.query.completed] });
  } else {
    ctx.body = await Todo.find({});
  }
});

router.post("/add", async (ctx) => {
  ctx.body = await Todo.create(ctx.request.body);
});

router.post("/toggle", async (ctx) => {
  const doc = await Todo.findOne({ _id: ctx.query._id });

  ctx.body = await Todo.updateOne(
    { _id: ctx.query._id },
    { completed: !doc.completed },
    { new: true }
  );
});

router.delete("/delete", async (ctx) => {
  ctx.body = await Todo.deleteOne({ _id: ctx.query._id });
});

router.get("/settings", async (ctx) => {
  ctx.body = await Settings.find({});
});

module.exports = router;
