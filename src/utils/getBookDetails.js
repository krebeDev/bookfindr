import defaultCover from '../images/default-cover.png'

const getBookDetails = (books, shelfBooksIds) => {
  if (books.length < 1) return ['No records found']
  const regex =
    /<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;|&#39;|&amp;|&quot;/g

  const transformedBooks = books.items.map((book) => ({
    id: book.etag,
    title: book.volumeInfo.title,
    summary: book.searchInfo?.textSnippet.replace(regex, '') ?? 'Not available',
    authors: book.volumeInfo?.authors ?? 'Unknown',
    publisher: book.volumeInfo?.publisher ?? 'Unknown',
    infoLink: book.volumeInfo.infoLink,
    cover:
      book.volumeInfo.imageLinks?.thumbnail.replace('http', 'https') ??
      defaultCover,

    // inShelf: shelfBooksIds.includes(book.etag),
  }))

  return transformedBooks
}

export default getBookDetails
