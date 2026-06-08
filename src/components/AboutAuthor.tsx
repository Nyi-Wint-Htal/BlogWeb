import { useEffect, useState } from "react";

type AboutAuthorProps = {
  name: string;
  imageId: number;
  description: string;
};

const AboutAuthor = ({ name, imageId, description }: AboutAuthorProps) => {
  const [follow, setFollow] = useState(false);
  const handleFollow = () => {
    try {
      const followedAuthors: string[] = JSON.parse(
        localStorage.getItem("followedAuthors") || "[]",
      );
      if (!followedAuthors.includes(name)) {
        followedAuthors.push(name);
        localStorage.setItem(
          "followedAuthors",
          JSON.stringify([...followedAuthors]),
        );
        setFollow(true);
        return;
      } else {
        const updatedAuthors = followedAuthors.filter((author) => {
          author !== name;
        });
        localStorage.setItem(
          "followedAuthors",
          JSON.stringify([...updatedAuthors]),
        );
        setFollow(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const followedAuthors: string[] = JSON.parse(
      localStorage.getItem("followedAuthors") || "[]",
    );
    setFollow(followedAuthors.includes(name));
  }, [name]);
  return (
    <div className="cardStyle p-5">
      <div className="flex flex-row items-center justify-start">
        <i className="fa-regular fa-user"></i>
        <h1>About the Author</h1>
      </div>
      <div className="flex flex-col items-center justify-center text-center gap-y-5 pt-5">
        <img
          src={`https://picsum.photos/id/${imageId + 35}/200`}
          alt="Author's Profile"
          className="object-cover border w-10 rounded-4xl"
        />
        <h1>{name}</h1>
        <p>{description}</p>
        <button onClick={handleFollow} className="border rounded-xl px-4 py-2">
          {follow ? "Followed" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default AboutAuthor;
