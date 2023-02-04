const searchManga = require("../../api/search_manga_api");
const manga_details = require("../manga/manga_details");
const get_genres = require("../manga/get_genres");
const cover_image = require("../../api/manga-cover");
const mangaChapters = require("../chapters/get_chapters");

let id;
let description;
let cover_art;
let genre;
let author;
let artist;
let title;

const search_manga = async (manga_name) => {
  const data = await searchManga(manga_name);
  //console.log(data);
  let manga_list = [];
  for (item of data.data) {
    id = item.id;
    // console.log(item);
    const { relationships } = item;
    const { title: name } = item.attributes;
    //get status
    const { status } = item.attributes;

    const { description: desc } = item.attributes;

    //get title
    if (name.en) {
      title = name.en;
    }
    //get description
    if (desc.en) {
      description = desc.en;
    }

    //get genres
    const genres = get_genres(item);
    genre = genres;
    // console.log(description);

    //get cover art
    const details = await manga_details(id, relationships);
    cover_art = details.images;

    //get author
    author = details.author;
    console.log({ title, description, genres, cover_art });

    //get chapters
    const chapters = await mangaChapters(id);

    //All manga
    manga_list = [
      ...manga_list,
      { id, title, description, status, cover_art, author, genre, chapters },
    ];
  }

  return manga_list;
};

module.exports = search_manga;
