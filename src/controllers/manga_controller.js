const latest = require("../helper/manga/latest_manga");
const genres = require("../helper/genres/get_genres");
const searchManga = require("../helper/search_manga/search_manga");
let mangaList = [];

//desc    get all manga (latest first)
//route   manga-app/api/v1/manga
//req     GET
exports.latestMangaList = async (req, res, next) => {
  const data = await latest();
  mangaList = [...data, ...mangaList];
  const manga = mangaList.filter(
    (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
  );
  res.status(200).json({
    status: "successful",
    data: { length: manga.length, manga },
  });
  next();
};

//desc    get all genres
//route   manga-app/api/v1/genres
//req     GET
exports.get_genres = async (req, res, next) => {
  const genre = await genres();

  res.status(200).json({
    status: "successful",
    data: genre,
  });
  next();
};

//desc    search manga
//route   manga-app/api/v1/search
//req     POST
exports.search_manga = async (req, res, next) => {
  const { manga_name } = req.body;

  const search_result = await searchManga(manga_name);

  res.status(200).json({ status: "successful", search: search_result });
  next();
};
