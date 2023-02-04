const chapter_images = require("../../api/chapter_images");

const chapImages = async (manga_Id) => {
  const image_data = await chapter_images(manga_Id);
  let imageUrls;
  if (image_data) {
    const { chapter } = image_data;
    // console.log(chapter);
    const { hash } = chapter;

    const { data } = chapter;
    if (data) {
      imageUrls = data.map((element) => {
        const url = `https://uploads.mangadex.org/data/${hash}/${element}`;
        return url;
      });
    }
  }
  return imageUrls;
};

module.exports = chapImages;
