const cover_image = require("../../api/manga-cover");
const author = require("../../api/manga-author");

const manga_details = async (id, relationships) => {
  let url;
  let url_256;
  let url_512;
  let manga_author;

  for (item of relationships) {
    if (item.type === "cover_art") {
      const image_id = await cover_image(item.id);

      url = `https://uploads.mangadex.org/covers/${id}/${image_id}`;
      url_256 = `https://uploads.mangadex.org/covers/${id}/${image_id}.256.jpg`;
      url_512 = `https://uploads.mangadex.org/covers/${id}/${image_id}.512.jpg`;
    }

    // get author
    if (item.type === "author") {
      manga_author = await author(item.id);
    }
  }
  return { images: [url, url_256, url_512], author: manga_author };
};

module.exports = manga_details;
