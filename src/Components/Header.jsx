import Navbar from "./Navbar";
import { motion } from "framer-motion";
function Header() {
  return (
    <div
      id="Header"
      className="min-h-screen bg-center bg-cover px-5 md:px-10 lg:px-20"
      style={{ backgroundImage: "url('/header_img.png')" }}
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{duration: 1.5}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once: true}}
        className="flex flex-col gap-16 text-center pt-[160px] md:pt-[200px]"
      >
        <h1 className="text-white text-[40px] md:text-[50px] lg:text-[70px] font-extrabold leading-16 max-w-[700px] mx-auto">
          Explore Homes That Fit Your Dreams
        </h1>
        <div className="flex items-center gap-8 mx-auto">
          <a
            href="#Projects"
            className="px-7 md:px-10 py-3 border-2 border-white rounded-lg text-white"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="px-7 md:px-10 py-3 border-2 border-(--button-color) bg-(--button-color) rounded-lg text-white"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
