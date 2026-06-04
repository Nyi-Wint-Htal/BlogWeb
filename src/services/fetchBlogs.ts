async function fetchBlogs(limit: number) {
  try {
    const response = await fetch(
      `https://dummyjson.com/posts?limit=${limit}&skip=0&select=title,reactions,userId`,
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log("An error has occured");
  }
}

export default fetchBlogs;
