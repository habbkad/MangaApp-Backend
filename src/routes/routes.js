const express = require("express");
const {
  latestMangaList,
  get_genres,
  search_manga,
  chapter_images,
} = require("../controllers/manga_controller");

const router = express.Router();

router.route("/latest").get(latestMangaList);
router.route("/genres").get(get_genres);
router.route("/search").post(search_manga);
router.route("/images").post(chapter_images);

module.exports = router;
