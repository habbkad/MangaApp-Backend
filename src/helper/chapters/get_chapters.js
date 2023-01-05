const chaptersApi = require("../../api/chapters-api");

const mangaChapter = [];
const get_chapters = async (manga_ID) => {
  const { volumes } = await chaptersApi(manga_ID);

  for (key in volumes) {
    const { chapters } = volumes[key];

    for (chap in chapters) {
      const { chapter } = chapters[chap];
      const { id } = chapters[chap];

      const eachChapter = {
        volumes: key,
        chapter,
        id,
      };
      mangaChapter.push(eachChapter);
    }
    return mangaChapter;
  }
};

module.exports = get_chapters;
