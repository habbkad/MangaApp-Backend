const axios = require("axios");

const coverImage = async (cover_ID) => {
  try {
    const { data: cover_data } = await axios(
      `https://api.mangadex.org/cover/${cover_ID}`
    );
    const { data } = cover_data;
    const { fileName } = data.attributes;
    return fileName;
  } catch (error) {
    console.log(error);
  }
};

module.exports = coverImage;
