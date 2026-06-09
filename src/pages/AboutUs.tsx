import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center py-20 px-3 sm:px-5">
      <div className="cardStyle bg-white max-w-200 p-10 md:p-15">
        <div className="flex flex-col gap-y-15 w-full">
          <div className="flex flex-col gap-y-5">
            <h1 className="text-3xl font-bold">About InsightHub</h1>
            <p className="text-lg font-light">
              Welcome to DevBlog, a modern platform dedicated to sharing
              knowledge, insights, and best practices in software development,
              web technologies, and programming.
            </p>
          </div>
          <div className="flex flex-col gap-y-5">
            <h1 className="text-3xl font-bold">Our Mission</h1>
            <p className="text-lg font-light">
              We believe in the power of shared knowledge. Our mission is to
              create high-quality, practical content that helps developers of
              all levels improve their skills and stay up-to-date with the
              latest trends in technology.
            </p>
          </div>
          <div className="flex flex-col gap-y-5">
            <h1 className="text-3xl font-bold">What We Cover</h1>
            <p className="text-lg font-light">
              From modern JavaScript frameworks to AI and machine learning, we
              cover a wide range of topics that matter to today's developers.
              Whether you're just starting out or you're a seasoned
              professional, you'll find valuable content here.
            </p>
          </div>
          <div className="flex flex-col gap-y-5 pb-5">
            <h1 className="text-3xl font-bold">Join Our Community</h1>
            <p className="text-lg font-light">
              DevBlog is more than just articles—it's a community of passionate
              developers. Subscribe to our newsletter, follow us on social
              media, and join the conversation.
            </p>
          </div>
        </div>
        <div className="h-[0.04px] bg-[#202937] w-full"></div>
        <div className="flex flex-col gap-y-3 items-start pt-5">
          <h1 className="text-md font-semibold">Get in Touch</h1>
          <p className="text-sm">
            Have questions or suggestions? We'd love to hear from you.
          </p>
          <Link
            to={"/contact-us"}
            className="font-light px-4.5 py-2.5 gap-x-2 w-fit rounded-xl bg-linear-to-r from-[#4F46E5] to-[#5B3DF5] text-white shadow-lg shadow-indigo-500/25 hover:scale-105 duration-300 transition-all ease-out inset-shadow-xs inset-shadow-indigo-300/50 hover:from-[#5B3DF5] hover:to-[#6D28D9] active:scale-95"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
