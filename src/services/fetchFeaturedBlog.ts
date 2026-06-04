async function fetchFeaturedBlog(post: number) {
  const response = await fetch(`https://dummyjson.com/posts/${post}`);
  if (!response.ok) {
    console.log("An error has occured");
  }
  const data = await response.json();
  return data;
}

export default fetchFeaturedBlog;
