const Newsletter = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center border p-10 gap-y-5 rounded-xl">
      <i className="fa-regular fa-envelope text-2xl border px-3 py-3.5 rounded-4xl"></i>
      <h1 className="text-3xl">Subscribe to Our Newsletter</h1>
      <p className="text-sm">
        Get the latest articles and insights delivered directly to your inbox.
        Join 10,000+ developers who are already subscribed.
      </p>
      <div className="flex flex-col justify-center items-center text-center gap-y-5 w-full sm:flex-row gap-x-3">
        <input
          type="text"
          placeholder="Enter your email"
          className="text-sm w-full px-3 sm:w-70 py-2"
        />
        <button className="text-sm border w-full py-2 rounded-xl sm:w-30">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
