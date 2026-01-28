const CustomerModel = require("../../models/customer");
exports.updateMyProfile = async (req, res) => {
  try {
    const { customer, body } = req;
    const { fullName, phone, address } = body;
    const phoneExists = await CustomerModel.findOne({
      phone,
      _id: { $ne: customer._id },
    });
    if (phoneExists)
      return res.status(400).json({
        status: "error",
        message: "phone already exists",
      });
    const myProfile = await CustomerModel.findOneAndUpdate(
      { _id: customer._id },
      {
        $set: { fullName, phone, address },
      },
      { new: true },
    );

    return res.status(200).json({
      status: "success",
      message: "Update profile successfully",
      data: myProfile,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};
