const mongoo = require("../../common/init.mongo")();
const sliderSchema = new mongoo.Schema({
  image: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
    default: null,
  },
  publish: {
    type: Boolean,
    default: true,
  },
});
const SliderModel = mongoo.model("Sliders", sliderSchema, "sliders");
module.exports = SliderModel;
