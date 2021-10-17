import defaultBookCover from '../images/default-cover.png'

export const getQuery = (queryString) => {
  return new URLSearchParams(queryString).get('query')
}

export const getPublishedYear = (date) => {
  return date ? new Date(date).getFullYear() : ''
}

export const getISBN = (idObj) => {
  return idObj?.map(({ identifier }) => identifier).join(', ') || 'Unavailable'
}

export const getBookDetails = (books, shelfBooksIds) => {
  const htmlRegex =
    /<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;|&#39;|&amp;|&quot;/g

  return books.items.map((book) => ({
    id: book.id,
    title: book.volumeInfo.title,
    summary:
      book.searchInfo?.textSnippet.replace(htmlRegex, '') ??
      'Book summary unavailable',
    authors: book.volumeInfo?.authors ?? 'Unavailable',
    publisher: book.volumeInfo?.publisher ?? 'Unavailable',
    infoLink: book.volumeInfo.infoLink,
    cover:
      book.volumeInfo.imageLinks?.thumbnail.replace('http', 'https') ??
      defaultBookCover,

    inShelf: shelfBooksIds.includes(book.id),
    year: getPublishedYear(book.volumeInfo.publishedDate),
    length: book.volumeInfo?.pageCount + ' pages' ?? 'Unavailable',
    isbn: getISBN(book.volumeInfo.industryIdentifiers),
  }))
}
