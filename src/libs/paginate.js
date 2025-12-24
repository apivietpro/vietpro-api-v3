module.exports = async (page, limit, query, model) => {
  const totalItems = await model.find(query).countDocuments();
  const totalPages = Math.ceil(totalItems / limit);
  const nextPage = page + 1;
  const prevPage = page - 1;
  const hasNextPage = nextPage > totalPages ? false : true;
  const hasPrevPage = prevPage <= 0 ? false : true;

  return {
    page,
    limit,
    totalPages,
    totalItems,
    nextPage,
    prevPage,
    hasNextPage,
    hasPrevPage,
  };
};
