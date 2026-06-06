async function fetchSingleBlog(id: number) {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  if (!response.ok) {
    console.log("An error has occured");
  }
  const data = await response.json();
  return data;
}

export default fetchSingleBlog;
