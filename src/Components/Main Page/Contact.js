import { React, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (Object.values(formData).some((value) => value === "")) {
      setShowMessage("Fill in the Fields!");
      setTimeout(() => setShowMessage(false), 3000);
      return;
    }
    setShowMessage("Form Submitted ❤");
    setTimeout(() => setShowMessage(false), 3000);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <section className="section-contact border-t-4 py-12">
      <h2 className="text-orange-500 text-4xl md:text-7xl text-5xl text-center mb-12 underline underline-offset-[8px] animate-wiggle">
        Contact Me
      </h2>
      <div className="container mx-auto ">
        <div className="max-w-md mx-auto ">
          <div className="shadow-md shadow-white rounded-lg shadow-lg p-10 text-center text-xl bg-gradient-to-r from-zinc-500">
            {showMessage && (
              <div className="bg-orange-500 text-white px-4 py-2 rounded mb-4">
                {showMessage}
              </div>
            )}
            <form name="contact" data-netlify="true" className="bg-transparent">
              <div className="mb-4 bg-transparent">
                <label
                  htmlFor="name"
                  className="block text-orange-500 font-bold mb-2 bg-transparent"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border  text-white border-gray-300 px-4 py-2 rounded w-full bg-transparent"
                  required
                />
              </div>
              <div className="mb-4 bg-transparent">
                <label
                  htmlFor="email"
                  className="block text-orange-500 font-bold mb-2 bg-transparent"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 px-4 py-2 rounded w-full bg-transparent text-white"
                  required
                />
              </div>
              <div className="mb-4 bg-transparent">
                <label
                  htmlFor="subject"
                  className="block text-orange-500 font-bold mb-2 bg-transparent"
                >
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border border-gray-300 px-4 py-2 text-white rounded w-full bg-transparent"
                  required
                />
              </div>
              <div className="mb-4 bg-transparent">
                <label
                  htmlFor="message"
                  className="block text-orange-500 font-bold mb-2 bg-transparent"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border border-gray-300 px-4 py-2 text-white rounded w-full bg-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="border-2 mt-8 text-white hover:bg-orange-500 transition-all duration-500 cursor-pointer px-4 py-2 rounded-xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
