const BannerModel = require("../../models/banner");
exports.findAll = async (req, res) => {
  try {
    const query = {};
    let sortIndex = 1;
    const limit = Number(req.query.limit) || 5;
    if (req.query.sort) sortIndex = Number(req.query.sort);
    const banners = await BannerModel.find(query)
      .sort({
        _id: sortIndex,
      })
      .limit(limit);
    return res.status(200).json({
      status: "success",
      message: "Get banners successfully",
      data: banners,
    });
  } catch (error) {
    return res.status(500).json({
      status: "success",
      message: "Internal server error",
      error: error.message,
    });
  }
};
