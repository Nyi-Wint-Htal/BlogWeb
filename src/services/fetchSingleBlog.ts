async function fetchSingleBlog(id: number) {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  if (!response.ok) {
    throw new Error("Could not fetch the blogs");
  }
  const data = await response.json();
  return data;
}

export default fetchSingleBlog;
