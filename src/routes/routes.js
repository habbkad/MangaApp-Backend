const express = require("express");
const {
  latestMangaList,
  get_genres,
  search_manga,
} = require("../controllers/manga_controller");

const router = express.Router();

router.route("/latest").get(latestMangaList);
router.route("/genres").get(get_genres);
router.route("/search").post(search_manga);

module.exports = router;
