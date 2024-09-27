import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //emailJS service ID, template ID, public key
    const serviceId = "service_z1v9a0i";
    const templateId = "template_on4upem";
    const publicKey = "yNc-zlSV6xW6hJA0p";

    //create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Maurice Quandus",
      message: message,
    };

    //send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent succesfully", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error sending email:", error);
      });
  };

  return (
    <>
      <div className=" w-full font-aileron md:my-20 ">
        <form
          className="w-full flex flex-col gap-4 items-start bg-gray-200 px-4 md:px-20 py-20 md:mb-8"
          onSubmit={handleSubmit}
        >
          <div className=" w-full md:w-1/2 flex flex-col gap-2 text-2xl md:text-4xl ">
            <div className="">Name</div>
            <div>
              <label htmlFor="Name">
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="block w-full appearance-none  focus:outline-none text-xl "
                />
              </label>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-2  text-2xl md:text-4xl">
            <div className="">E-Mail</div>
            <div>
              <label htmlFor="Email">
                <input
                  type="text"
                  name="Email"
                  id="Email"
                  value={email}
                  placeholder="Your E-Mail"
                  onChange={(e) => setEmail(e.target.value)}
                  className=" block w-full appearance-none  focus:outline-none text-xl "
                />
              </label>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-2  text-2xl md:text-4xl">
            <div className="">Message</div>
            <div>
              <label htmlFor="Message">
                <textarea
                  type="text"
                  name="Message"
                  id="Message"
                  rows={3}
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="block w-full appearance-none  focus:outline-none text-xl "
                />
              </label>
            </div>
          </div>

          <div className="p-4 text-2xl bg-gray-400 self-end md:self-start">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
