

const dateFilter1 = (cards, date1, date2) => {
  if (date1) {
    const date = new Date(date1);
    const arr = cards.filter((c) => {
      const d = new Date(c.publishedAt)
      return  date < d
    })
    return dateFilter2(arr, date2)
  } else {
    return dateFilter2(cards, date2)
  }
}

const dateFilter2 = (cards, date2) => {
  if (date2) {
    const date = new Date(date2);
    const arr = cards.filter((c) => {
      const d = new Date(c.publishedAt)
      return  d < date
    })
    return arr
  } else {
    return cards
  }
}

export const handleFilterCards = (cards, { author, date1, date2 }) => {
  if (author) {
    const arr = cards.filter(c => c.author.toLowerCase().match(author.toLowerCase()))
    return dateFilter1(arr, date1, date2)
  } else {
    return dateFilter1(cards, date1, date2)
  }
}