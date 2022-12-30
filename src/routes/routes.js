const express = require("express");
const {
  latestMangaList,
  get_genres,
} = require("../controllers/manga_controller");

const router = express.Router();

router.route("/latest").get(latestMangaList);
router.route("/genres").get(get_genres);

module.exports = router;
