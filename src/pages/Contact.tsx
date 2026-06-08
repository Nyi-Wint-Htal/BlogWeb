const Contact = () => {
  return (
    <div className="px-3 py-10 sm:px-5 pb-30 lg:px-10">
      <div className="flex flex-col gap-y-5 md:grid md:grid-cols-2 gap-x-10">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-3xl font-bold">Get in Touch</h1>
          <p className="text-sm">
            Have a question or want to work together? We'd love to hear from
            you.
          </p>
          <div className="flex flex-row gap-x-3 items-center">
            <i className="fa-regular fa-envelope text-lg border px-1.5 py-2 rounded-md"></i>
            <div className="flex flex-col gap-y-1">
              <h2 className="text-md font-semibold">Email</h2>
              <p className="text-sm">nyiwinthtalnn@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row gap-x-3 items-center">
            <i className="fa-regular fa-envelope text-lg border px-1.5 py-2 rounded-md"></i>
            <div className="flex flex-col gap-y-1">
              <h2 className="text-md font-semibold">Email</h2>
              <p className="text-sm">nyiwinthtalnn@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row gap-x-3 items-center">
            <i className="fa-regular fa-envelope text-lg border px-1.5 py-2 rounded-md"></i>
            <div className="flex flex-col gap-y-1">
              <h2 className="text-md font-semibold">Email</h2>
              <p className="text-sm">nyiwinthtalnn@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="cardStyle p-5 gap-y-5">
          <h1 className="text-xl font-semibold">Send us a Message</h1>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="userName" className="text-xs font-medium">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="userName"
              placeholder="Your name"
              className="px-3 py-2 border rounded-lg text-sm"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="userName" className="text-xs font-medium">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="userName"
              placeholder="Your name"
              className="px-3 py-2 border rounded-lg text-sm"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="userName" className="text-xs font-medium">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="userName"
              placeholder="Your name"
              className="px-3 py-2 border rounded-lg text-sm"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="userName" className="text-xs font-medium">
              Name
            </label>
            <textarea
              name="user_name"
              id="userName"
              placeholder="Your name"
              className="px-3 py-2 border rounded-lg text-sm h-30"
            />
          </div>
          <button className="text-sm border px-3 py-2 rounded-xl">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
