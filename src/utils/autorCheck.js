
export const handleAutorCheck = (posts) => {
  posts.forEach(post => {
    if (post.author === null) return post.author = 'unknown'
  });
  return posts
}