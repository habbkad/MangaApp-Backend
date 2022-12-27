const cover_image = require("../api/manga-cover");

const image_url = async (id, relationships) => {
  for (item of relationships) {
    if (item.type === "cover_art") {
      const image_id = await cover_image(item.id);
      console.log(image_id);
      console.log(image_id);
      const url = `https://uploads.mangadex.org/covers/${id}/${image_id}`;
      const url_256 = `https://uploads.mangadex.org/covers/${id}/${image_id}.256.jpg`;
      const url_512 = `https://uploads.mangadex.org/covers/${id}/${image_id}.512.jpg`;

      return { url, url_256, url_512 };
    }
  }
};

module.exports = image_url;
