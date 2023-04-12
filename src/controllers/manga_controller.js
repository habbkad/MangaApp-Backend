const latest = require("../helper/manga/latest_manga");
const genres = require("../helper/genres/get_genres");
const searchManga = require("../helper/search_manga/search_manga");
const getChapterImages = require("../helper/chapter_images/chapter_images");
const manga = require("../api/manga");
let mangaList = [];
let carousel = [];

//desc    get all manga (latest first)
//route   manga-app/api/v1/manga
//req     GET
exports.latestMangaList = async (req, res, next) => {
  try {
    const data = await latest();
    mangaList = [...data, ...mangaList];
    let manga = mangaList.filter(
      (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
    );
    carousel = [];
    if (data) {
      carousel.push(mangaList[1]);
      carousel.push(mangaList[3]);
      carousel.push(mangaList[12]);
      carousel.push(mangaList[4]);
      carousel.push(mangaList[7]);
      carousel.push(mangaList[10]);
    }

    // setInterval(async () => {
    //   const newData = await latest();
    //   mangaList = [...newData, ...mangaList];
    //   manga = mangaList.filter(
    //     (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
    //   );
    // }, 120000);

    res.status(200).json({
      status: "successful",
      data: { length: manga.length, manga, carousel },
    });
    next();
  } catch (error) {
    if (manga) {
      res.status(200).json({
        status: "successful",
        data: { length: manga.length, manga, carousel },
      });
    }
    res.status(200).json({
      status: "unsuccessful",
      data: {},
    });
  }
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

//desc    get chapter Images
//route   manga-app/api/v1/chapImages
//req     POST
exports.chapter_images = async (req, res, next) => {
  const { chapter_id } = req.body;

  const chap = await getChapterImages(chapter_id);

  res.status(200).json({ status: "successful", chap });
  next();
};
//desc    get carousel chapters
//route   manga-app/api/v1/carousel
//req     GET
exports.carousel_chapters = async (req, res, next) => {
  const data = mangaList;

  if (data) {
    carousel.push(data[1]);
    carousel.push(data[3]);
    carousel.push(data[12]);
    carousel.push(data[2]);
  }

  res.status(200).json({
    status: "successful",
    data: carousel,
  });
  next();
};
