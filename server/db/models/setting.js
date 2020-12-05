const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const settingSchema = new Schema({
  isFirstTime: Boolean,
});

const Setting = mongoose.model("Setting", settingSchema);

module.exports = Setting;
