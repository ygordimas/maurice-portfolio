import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className=" w-full font-aileron md:my-20 ">
        <div className="w-full flex flex-col gap-4 items-start bg-gray-200 px-4 md:px-20 py-20 md:mb-8">
          <div className=" w-full md:w-1/2 flex flex-col gap-2  text-4xl ">
            <div className="">Name</div>
            <div>
              <label htmlFor="Name">
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  className="block w-full appearance-none  focus:outline-none text-xl "
                />
              </label>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-2  text-4xl">
            <div className="">E-Mail</div>
            <div>
              <label htmlFor="Email">
                <input
                  type="text"
                  name="Email"
                  id="Email"
                  className="block w-full appearance-none  focus:outline-none text-xl "
                />
              </label>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-2  text-4xl">
            <div className="">Message</div>
            <div>
              <label htmlFor="Message">
                <textarea
                  type="text"
                  name="Message"
                  id="Message"
                  rows={3}
                  className="block w-full appearance-none  focus:outline-none text-xl "
                />
              </label>
            </div>
          </div>

          <div className="p-4 text-2xl bg-gray-400 self-end md:self-start">
            <button>Send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
