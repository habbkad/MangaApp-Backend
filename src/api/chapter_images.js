const axios = require("axios");

const chapters_images = async (chapter_Id) => {
  try {
    const { data: chaptersImages } = await axios(
      `https://api.mangadex.org/at-home/server/${chapter_Id}`
    );

    return chaptersImages;
  } catch (error) {
    console.log(error);
    return { images: "none" };
  }
};

module.exports = chapters_images;
