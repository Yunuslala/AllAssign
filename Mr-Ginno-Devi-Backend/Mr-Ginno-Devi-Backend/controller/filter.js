const paginateProductSearch = async (req, res) => {
  try {
    const {
      search,
      fromDate,
      toDate,
      brandId,
      nutritionId,
      productTypeId,
      skinConditionId,
      skinTypeId,
      quantity,
      status,
      page,
      limit,
    } = req.query;
    let query = {};
    if (search) {
      query.$or = [
        { name: { $regex: req.query.search, $options: "i" } },
        { description: { $regex: req.query.search, $options: "i" } },
      ];
    }
    if (status) {
      query.status = status;
    }
    if (brandId) {
      query.brandId = brandId;
    }
    if (nutritionId) {
      query.nutritionId = nutritionId;
    }
    if (productTypeId) {
      query.productTypeId = productTypeId;
    }
    if (skinConditionId) {
      query.skinConditionId = skinConditionId;
    }
    if (skinTypeId) {
      query.skinTypeId = skinTypeId;
    }
    if (quantity) {
      query.quantity = quantity;
    }
    if (fromDate && !toDate) {
      query.createdAt = { $gte: fromDate };
    }
    if (!fromDate && toDate) {
      query.createdAt = { $lte: toDate };
    }
    if (fromDate && toDate) {
      query.$and = [
        { createdAt: { $gte: fromDate } },
        { createdAt: { $lte: toDate } },
      ];
    }
    let options = {
      page: Number(page) || 1,
      limit: Number(limit) || 15,
      sort: { createdAt: -1 },
      populate: "brandId",
    };
    let data = await product.paginate(query, options);
    return res
      .status(200)
      .json({ status: 200, message: "Product data found.", data: data });
  } catch (err) {
    return res
      .status(500)
      .send({ msg: "internal server error ", error: err.message });
  }
};
