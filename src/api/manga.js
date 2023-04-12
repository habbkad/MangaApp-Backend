const moment = require("moment");
const axios = require("axios");

const time = moment().format();
const formated_time = time.split("+");

console.log("gjgjhg");
const manga = async () => {
  try {
    const { data } = await axios.get(
      `https://api.mangadex.org/manga?limit=50`,
      {
        updatedAtSince: formated_time[0],
        includedTagsMode: "AND",
        includedTagsMode: "OR",
        contentRating: ["safe", "suggestive", "erotica"],
        availableTranslatedLanguage: ["en"],
        hasAvailableChapters: "true",
        order: { latestUploadedChapter: "desc" },
        excludedOriginalLanguage: ["fr", "ar", "es", "ko", "id", "ru"],
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = manga;
