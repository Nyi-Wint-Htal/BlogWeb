import { useState } from "react";

type AboutAuthorProps = {
  name: string;
  imageId: number;
  description: string;
};

const AboutAuthor = ({ name, imageId, description }: AboutAuthorProps) => {
  const [follow, setFollow] = useState(() => {
    try {
      const followedAuthors: string[] = JSON.parse(
        localStorage.getItem("followedAuthors") || "[]",
      );
      return followedAuthors.includes(name);
    } catch {
      return false;
    }
  });
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
        const updatedAuthors = followedAuthors.filter(
          (author) => author !== name,
        );
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
  return (
    <div className="cardStyle p-5">
      <div className="flex flex-row items-center justify-start gap-x-3">
        <i className="fa-regular fa-user text-indigo-500"></i>
        <h1 className="font-semibold text-xl">About the Author</h1>
      </div>
      <div className="flex flex-col items-center justify-center text-center gap-y-5 pt-5">
        <img
          src={`https://picsum.photos/id/${imageId + 35}/200`}
          alt="Author's Profile"
          className="object-cover border w-30 rounded-full"
        />
        <h1 className="font-semibold text-lg">{name}</h1>
        <p className="text-gray-600 text-sm">{description}</p>
        <button
          onClick={handleFollow}
          className={`font-light px-4.5 py-2.5 gap-x-2 w-fit rounded-xl transition-all duration-300 ease-out cursor-pointer
            ${
              follow
                ? "bg-green-50 border border-green-200 text-green-700 hover:bg-green-100 hover:scale-105"
                : "bg-linear-to-r from-[#4F46E5] to-[#5B3DF5] text-white shadow-lg shadow-indigo-500/25 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/40 hover:from-[#5B3DF5] hover:to-[#6D28D9]"
            }
          `}
        >
          {follow ? "Followed" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default AboutAuthor;
