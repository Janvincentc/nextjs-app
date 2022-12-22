import React from "react";
import Image from "next/image";

const CONTACT_FORM = [
  {
    label: "Name",
    type: "text",
    cname: "flex flex-col",
    name: "name",
  },
  {
    label: "Phone Number",
    type: "text",
    cname: "flex flex-col",
    name: "phone",
  },
];

const CONTACT_FORM2 = [
  {
    label: "Email",
    cname: "flex flex-col py-2",
    element: (
      <input
        className="border-2 rounded-lg p-3 flex border-gray-300"
        type="email"
        name="email"
      />
    ),
  },
  {
    label: "Subject",
    cname: "flex flex-col py-2",
    element: (
      <input
        className="border-2 rounded-lg p-3 flex border-gray-300"
        type="text"
        name="subject"
      />
    ),
  },
  {
    label: "Message",
    cname: "flex flex-col py-2",
    element: (
      <textarea
        className="border-2 rounded-lg p-3 border-gray-300"
        rows={10}
        name="message"
      />
    ),
  },
];

const Contact = () => {
  return (
    <div id="contact" className="w-full lg-h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get in touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src=""
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2">Jan Vincent P. Claudio</h2>
                <p>Front-end Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let's talk
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with Me</p>
                <div></div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  {CONTACT_FORM.map((contact) => {
                    const { label, type, name, cname } = contact;
                    return (
                      <div key={label} className={cname}>
                        <label className="uppercase text-sm py-2">
                          {label}
                        </label>
                        <input
                          className="border-2 rounded-lg p-3 flex border-gray-300"
                          type={type}
                          name={name}
                        />
                      </div>
                    );
                  })}
                </div>
                {CONTACT_FORM2.map((contact) => {
                  const { label, cname, element } = contact;
                  return (
                    <div key={label} className={cname}>
                      <label className="uppercase text-sm py-2">{label}</label>
                      {element}
                    </div>
                  );
                })}
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
