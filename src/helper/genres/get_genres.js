const manga_collection = require("../manga/latest_manga");

const get_genres = async () => {
  let action = [];
  let web_comic = [];
  let romance = [];
  let comedy = [];
  let martial_art = [];
  let isekai = [];
  let adventure = [];
  let fantasy = [];
  const manga_list = await manga_collection();
  for (item of manga_list) {
    //action genre for manga
    if (item.genre.includes("Action")) {
      action = [item, ...action];
    }
    //Web Comic genre for manga
    if (item.genre.includes("Web Comic")) {
      web_comic = [item, ...web_comic];
    }
    //Romance genre for manga
    if (item.genre.includes("Romance")) {
      romance = [item, ...romance];
    }
    //Comedy genre for manga
    if (item.genre.includes("Comedy")) {
      comedy = [item, ...comedy];
    }
    //Martial Arts genre for manga
    if (item.genre.includes("Martial Arts")) {
      martial_art = [item, ...martial_art];
    }
    //Isekai Arts genre for manga
    if (item.genre.includes("Isekai")) {
      isekai = [item, ...isekai];
    }
    //Adventure genre for manga
    if (item.genre.includes("Adventure")) {
      adventure = [item, ...adventure];
    }
    //Fantasy genre for manga
    if (item.genre.includes("Fantasy")) {
      fantasy = [item, ...fantasy];
    }
  }
  return {
    action,
    web_comic,
    romance,
    comedy,
    martial_art,
    isekai,
    adventure,
    fantasy,
  };
};

module.exports = get_genres;
