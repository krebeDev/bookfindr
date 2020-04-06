import defaultCover from './../../assets/default-cover.png';

export function getThumbnail(book) {
  return book.imageLinks
    ? book.imageLinks.thumbnail.replace("http://", "https://")
    : defaultCover;
};

export function getAuthors(book) {
  return book.authors ? book.authors : "No authors found";
}

export function getPublisher(book) {
 return book.publisher ? book.publisher : "No publisher found";
}


export function getBookDetails(book) {
  const { title, infoLink, etag } = book;
  return {
    id: etag,
    title: title,
    authors: getAuthors(book),
    cover: getThumbnail(book),
    infoLink: infoLink,
  };
};