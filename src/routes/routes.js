const express = require("express");
const { latestMangaList } = require("../controllers/mangaList-controller");

const router = express.Router();

router.route("/latest").get(latestMangaList);

module.exports = router;
