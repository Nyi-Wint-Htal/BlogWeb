import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "3fa1e038-27e2-436d-abc2-1f620a1c0387");
    try {
      setLoading(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data.success ? "Success" : "Error");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };
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
          <form
            onSubmit={(e) => {
              onSubmit(e);
            }}
            className="flex flex-col gap-y-5"
          >
            <div className="flex flex-col gap-y-2">
              <label htmlFor="userName" className="text-xs font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="userName"
                placeholder="Your name"
                required
                className="px-3 py-2 border rounded-lg text-sm"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email" className="text-xs font-medium">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Your Gmail..."
                className="px-3 py-2 border rounded-lg text-sm"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="message" className="text-xs font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter a message..."
                required
                className="px-3 py-2 border rounded-lg text-sm h-30"
              />
            </div>
            <button
              type="submit"
              className="text-sm border px-3 py-2 rounded-xl"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              {loading && (
                <svg
                  className="inline-block animate-spin ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    opacity="0.25"
                  />
                  <path
                    d="M22 12a10 10 0 0 1-10 10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
              )}
            </button>
            {result && (
              <p
                className={
                  result === "Success" ? "text-green-500" : "text-red-500"
                }
              >
                {result === "Success"
                  ? "Successfully Sent!"
                  : "Could not send the message!"}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
