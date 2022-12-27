const latest = require("../helper/latest_manga");

exports.latestMangaList = async (req, res) => {
  const { data } = await latest();
  res.status(200).json({ status: "successful", data });
};
