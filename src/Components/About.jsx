import { assets } from "../Assets/assets";
import { motion } from "framer-motion";
function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="About"
      className="py-8 md:py-16"
    >
      <div className="container mx-auto px-5 md:px-10 lg:px-20">
        <div className="text-center">
          <h2 className="text-[30px] md:text-[45px] font-bold">
            About{" "}
            <span className="font-extralight underline underline-offset-4 decoration-2">
              Our Brand
            </span>
          </h2>
          <p className="text-(--text-color) text-[17px] md:text-[19px] my-3 w-[350px] mx-auto">
            Passionate About Properties, Dedicated to Your Vision.
          </p>
        </div>
        <div className="grid gird-col-1 md:grid-cols-2 gap-10 mt-16 items-center">
          <img
            src={assets.brand_img}
            className="max-w-[300px] mx-auto md:max-w-[400px] lg:max-w-[550px]"
          />
          <div className="md:ml-16 text-center md:text-left">
            <div className="flex space-x-10">
              <div>
                <span className="text-[33px] md:text-[38px] font-semibold">
                  10+
                </span>
                <p className="text-(--text-color) text-[16px] md:text-[18px]">
                  Years of Excellence
                </p>
              </div>
              <div>
                <span className="text-[33px] font-semibold">12+</span>
                <p className="text-(--text-color) text-[16px] md:text-[18px]">
                  Projects Completed
                </p>
              </div>
            </div>
            <div className="flex space-x-10 mt-7 mb-10">
              <div>
                <span className="text-[33px] font-semibold">20+</span>
                <p className="text-(--text-color) text-[16px] md:text-[18px]">
                  Mn. Sq. Ft. Delivered
                </p>
              </div>
              <div>
                <span className="text-[33px] font-semibold">25+</span>
                <p className="text-(--text-color) text-[16px] md:text-[18px]">
                  Ongoing Projects
                </p>
              </div>
            </div>

            <p className="text-(--text-color) text-[16px] md:text-[18px] max-w-[600px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <a
              href="#"
              className="bg-(--button-color)px-8 py-2 text-white mt-10 block w-fit mx-auto md:mx-0 rounded-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
