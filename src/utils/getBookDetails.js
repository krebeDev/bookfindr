import defaultCover from '../images/default-cover.png'

const getBookDetails = (books) => {
  if (books.length < 1) return ['No records found']

  const transformedBooks = books.items.map((book) => ({
    id: book.etag,
    title: book.volumeInfo.title,
    summary: book.searchInfo?.textSnippet ?? 'Not available',
    authors: book.volumeInfo?.authors ?? 'Unknown',
    publisher: book.volumeInfo?.publisher ?? 'Unknown',
    infoLink: book.volumeInfo.infoLink,
    cover:
      book.volumeInfo.imageLinks?.thumbnail.replace('http', 'https') ??
      defaultCover,
  }))

  return transformedBooks
}

export default getBookDetails
