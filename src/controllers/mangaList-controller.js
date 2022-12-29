const latest = require("../helper/latest_manga");
let mangaList = [];

exports.latestMangaList = async (req, res, next) => {
  const data = await latest();
  mangaList = [...data, ...mangaList];

  res.status(200).json({
    status: "successful",
    data: { lnegth: mangaList.length, mangaList },
  });
  next();
};
