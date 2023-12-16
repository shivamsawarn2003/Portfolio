"use client";

import { useState } from "react";


export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section
    id="contact"
    className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
  >
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
    
    
    <>
      
       
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
       
       
       <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="fullname"
            className="text-white block mb-2 text-sm font-medium">Full Name</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="name"
          />
          </div>
        

          <div className="mb-6">
          <label htmlFor="email"
           className="text-white block text-sm mb-2 font-medium">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="emailname@gmail.com"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message"
                className="text-white block text-sm mb-2 font-medium">Your Message</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="h-32"
            id="message"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"

            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full" type="submit">
          Send Message
        </button>
      </form>
      <div>
        {error &&
          error.map((e) => (
            <div
              className={`${
                success ? "text-secondary-800" : "text-primary-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}


<div>
  {/* GitHub Link */}
  <button
        onClick={() => window.open("https://github.com/shivamsawarn2003", "_blank")}
        className="text-primary-600 px-5 py-2 bg-transparent border border-primary-600 rounded-lg cursor-pointer hover:bg-primary-600 hover:text-white mb-2"
      >
        Visit My GitHub
      </button>

      {/* LinkedIn Link */}
      <button
        onClick={() => window.open("https://www.linkedin.com/in/shivam-kumar-b87290263", "_blank")}
        className="text-primary-600 px-5 py-2 bg-transparent border border-primary-600 rounded-lg cursor-pointer hover:bg-primary-600 hover:text-white"
      >
        Visit My LinkedIn
      </button>
</div>
  </div>
   
    </>
    </section>
    
  );
}