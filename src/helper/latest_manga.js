const manga = require("../api/manga");
const image_url = require("../helper/generate_image");
const cover_image = require("../api/manga-cover");

const latestMangaList = async () => {
  const data = await manga();

  for (item of data.data) {
    let id = item.id;
    const { relationships } = item;
    const cover_url = await image_url(id, relationships);
  }
  return data;
};

module.exports = latestMangaList;
