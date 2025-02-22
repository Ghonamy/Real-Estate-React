import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
function Contact() {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "322d1897-7e6f-40e0-bc3a-7993d49b5929");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="Contact"
      className="py-12"
    >
      <div className="container mx-auto px-5 md:px-10 lg:px-20">
        <div className="text-center">
          <h2 className="text-[30px] md:text-[45px]">
            Contact{" "}
            <span className="underline underline-offset-4 decoration-2 font-extralight">
              With Us
            </span>
          </h2>
          <p className="text-(--text-color) mx-auto max-w-[350px] my-3">
            Ready to Make a Move? Let’s Build Your Future Together
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="max-w-3xl mx-auto text-gray-600 pt-10"
        >
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 text-left">
              Your Name
              <input
                type="text"
                placeholder="Your Name"
                name="Name"
                required
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2 outline-0"
              />
            </div>
            <div className="w-full md:w-1/2 text-left md:pl-8 mt-4 md:mt-0">
              Your Email
              <input
                type="emil"
                placeholder="Your Email"
                name="Email"
                required
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2 outline-0"
              />
            </div>
          </div>
          <div className="text-left my-6">
            Message
            <textarea
              required
              name="Message"
              placeholder="Message"
              className="w-full resize-none mt-2 outline-0 border border-gray-300 rounded px-4 py-3 h-48"
            ></textarea>
          </div>
          <button className="bg-(--button-color) text-white px-8 py-2 rounded cursor-pointer block mx-auto mb-10 mt-5">
            {result ? result : "Send Message"}
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
