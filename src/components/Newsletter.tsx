const Newsletter = () => {
  return (
    <div className="w-full px-5 sm:px-10">
      <div className="flex flex-col justify-center items-center text-center p-10 gap-y-5 rounded-3xl bg-linear-to-r from-[#4F46E5] to-[#5B3DF5] text-white shadow-xl shadow-indigo-500/25 overflow-hidden relative">
        <i className="fa-regular fa-envelope text-2xl bg-white/10 border border-white/20 px-3 py-3.5 rounded-full"></i>
        <h1 className="text-3xl font-bold">Subscribe to Our Newsletter</h1>
        <p className="text-sm text-indigo-100 max-w-2xl">
          Get the latest articles and insights delivered directly to your inbox.
          Join 10,000+ developers who are already subscribed.
        </p>
        <div className="flex flex-col justify-center items-center text-center gap-y-5 w-full sm:flex-row gap-x-3">
          <input
            type="text"
            placeholder="Enter your email"
            className="text-sm w-full px-4 py-3 rounded-xl bg-white text-slate-800 sm:w-70 outline-none"
          />
          <button className="text-sm w-full py-3 rounded-xl sm:w-40 bg-slate-900 text-white hover:bg-slate-800 transition-all duration-300 cursor-pointer">
            Coming Soon...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
