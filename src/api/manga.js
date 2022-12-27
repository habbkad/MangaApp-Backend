const moment = require("moment");
const axios = require("axios");

const time = moment().format();
const manga = async () => {
  try {
    const { data } = await axios.get(`https://api.mangadex.org/manga?`, {
      limit: 1,
      updatedAtSince: time,
      includedTagsMode: "AND",
      includedTagsMode: "OR",
      contentRating: ["safe", "suggestive", "erotica"],
      availableTranslatedLanguage: ["en"],
      hasAvailableChapters: "true",
      order: { latestUploadedChapter: "desc" },
      excludedOriginalLanguage: ["fr", "ar", "es", "ko", "id", "ru"],
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = manga;
