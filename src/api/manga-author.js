const axios = require("axios");

const author = async (author_id) => {
  try {
    const { data: author_data } = await axios(
      `https://api.mangadex.org/author/${author_id}`
    );
    const { data } = author_data;
    const { name } = data.attributes;
    return name;
  } catch (error) {
    console.log(error);
  }
};

module.exports = author;
