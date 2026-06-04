import logo from "../assets/My Logo.png";

const AboutAuthor = () => {
  return (
    <div className="cardStyle p-5">
      <div className="flex flex-row items-center justify-start">
        <i className="fa-regular fa-user"></i>
        <h1>About the Author</h1>
      </div>
      <div className="flex flex-col items-center justify-center text-center gap-y-5 pt-5">
        <img
          src={logo}
          alt="Author's Profile"
          className="object-cover border w-10 rounded-4xl"
        />
        <h1>Phoenix Developer</h1>
        <p>
          Full-stack developer passionate about creating elegant solutions and
          sharing knowledge with the community.
        </p>
        <button className="border rounded-xl px-4 py-2">Follow</button>
      </div>
    </div>
  );
};

export default AboutAuthor;
