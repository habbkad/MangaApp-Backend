const axios = require("axios");

const search_manga = async (manga_name) => {
  try {
    const { data: manga } = await axios(
      `https://api.mangadex.org/manga?limit=10&title=${manga_name}`
    );
    return manga;
  } catch (error) {
    console.log(error);
  }
};

module.exports = search_manga;
