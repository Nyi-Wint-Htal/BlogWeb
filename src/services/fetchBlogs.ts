async function fetchBlogs(limit: number) {
  const response = await fetch(`https://dummyjson.com/posts?limit=${limit}`);
  if (!response.ok) {
    console.log("An error has occured");
  }
  const data = await response.json();
  return data.posts;
}

export default fetchBlogs;
