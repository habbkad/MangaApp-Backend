const axios = require("axios");

const chapters = async (manga_ID) => {
  try {
    const { data: chapters } = await axios(
      `https://api.mangadex.org/manga/${manga_ID}/aggregate`
    );

    return chapters;
  } catch (error) {
    console.log(error);
    return { volumes: "none" };
  }
};

module.exports = chapters;
