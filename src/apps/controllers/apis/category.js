const CategoryModel = require("../../models/category");
const ProductModel = require("../../models/product");
const paginate = require("../../../libs/paginate");
exports.findAll = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    return res.status(200).json({
      status: "success",
      message: "Get categories successfully",
      data: categories,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await CategoryModel.findById(id);
    return res.status(200).json({
      status: "success",
      message: "Get category successflly",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};
exports.findProductsByCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const query = {};
    query.category_id = id;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = page * limit - limit;
    const products = await ProductModel.find({ query })
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit);
    return res.status(200).json({
      status: "success",
      message: "Get products successfully",
      data: products,
      pages: await paginate(page, limit, query, ProductModel),
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};
