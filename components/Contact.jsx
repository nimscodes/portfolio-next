import React, { useState } from "react";
import Title from "./layout/Title";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await axios.post("https://formspree.io/f/mvonjapw", {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        setSubmissionStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      setSubmissionStatus("error");
    }

    setIsSubmitting(false);
  };
  return (
    <div>
      {submissionStatus === "success" && (
        <div className="bg-green-100 text-green-800 p-4 rounded mb-4">
          Message sent successfully!
        </div>
      )}
      {submissionStatus === "error" && (
        <div className="bg-red-100 text-red-800 p-4 rounded mb-4">
          Failed to send the message. Please try again later.
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-transparent">
        <div className="mb-8">
          <input
            type="text"
            id="name"
            className="bg-transparent font-light w-full px-2 py-2 border-b border-gray-300 focus:outline-none focus:border-[#5651ef]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name!"
            required
          />
        </div>
        <div className="mb-8">
          <input
            type="email"
            id="email"
            className="bg-transparent w-full px-2 py-2 border-b border-gray-300 focus:outline-none focus:border-[#5651ef]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-8">
          <textarea
            id="message"
            className="bg-transparent w-full px-2 py-2 border-b border-gray-300 focus:outline-none focus:border-[#5651ef]"
            rows="8"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message!"
            required
          ></textarea>
        </div>
        <div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="cursor-pointer uppercase text-lg text-[#5651ef] p-2 w-fit border-2 border-[#5651ef] hover:bg-[#5651ef] hover:text-white ease-in duration-300"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
};

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-[1240px] px-2 md:px-10 flex items-center justify-center min-h-screen lg:mx-auto mb-20"
    >
      <div className="md:w-[95%] w-full flex flex-col p-5 gap-7">
        <Title title="Contact" desc="hit me up" />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
