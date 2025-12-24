const mongoo = require("../../common/init.mongo")();
const bannerSchema = new mongoo.Schema({
  image: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    default: null,
  },
  target: {
    type: Boolean,
    default: false,
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
const BannerModel = mongoo.model("Banners", bannerSchema, "banners");
module.exports = BannerModel;
