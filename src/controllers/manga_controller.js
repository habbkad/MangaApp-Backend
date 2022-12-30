const latest = require("../helper/manga/latest_manga");
const genres = require("../helper/genres/get_genres");
let mangaList = [];

//desc    get all manga (latest first)
//route   manga-app/api/v1/manga
exports.latestMangaList = async (req, res, next) => {
  const data = await latest();
  mangaList = [...data, ...mangaList];

  res.status(200).json({
    status: "successful",
    data: { lnegth: mangaList.length, mangaList },
  });
  next();
};

//desc    get all genres
//route   manga-app/api/v1/genres
exports.get_genres = async (req, res, next) => {
  const genre = await genres();

  res.status(200).json({
    status: "successful",
    data: genre,
  });
  next();
};
