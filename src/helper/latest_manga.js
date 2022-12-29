const manga = require("../api/manga");
const manga_details = require("./manga_details");
const cover_image = require("../api/manga-cover");

let id;
let description;
let cover_art;
let gener;
let author;
let artist;
let title;
let manga_list = [];

const latestMangaList = async () => {
  const data = await manga();
  for (item of data.data) {
    id = item.id;
    const { relationships } = item;
    const { title: name } = item.attributes;
    const { description: desc } = item.attributes;
    //get title
    if (name.en) {
      title = name.en;
    }
    //get description
    if (desc.en) {
      description = desc.en;
    }
    // console.log(description);

    //get cover art
    const details = await manga_details(id, relationships);
    cover_art = details.images;
    author = details.author;

    //All manga
    manga_list = [...manga_list, { id, title, description, cover_art, author }];
  }
  return manga_list;
};

module.exports = latestMangaList;
