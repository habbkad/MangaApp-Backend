const getGenres = (detail_obj) => {
  const { tags } = detail_obj.attributes;

  let genres = [];
  for (item of tags) {
    const { name } = item.attributes;
    genres = [...genres, name.en];
  }
  return genres;
};

module.exports = getGenres;
