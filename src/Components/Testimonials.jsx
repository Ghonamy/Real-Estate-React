import { testimonialsData } from "../Assets/assets";
import Testimonial from "./Testimonial";
import { motion } from "framer-motion";

function Testimonials() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="Testimonials"
      className="py-8 md:py-16"
    >
      <div className="container mx-auto px-5 md:px-10 lg:px-20">
        <div className="text-center">
          <h2 className="text-[30px] md:text-[45px] font-bold">
            Customer{" "}
            <span className="font-extralight underline underline-offset-4 decoration-2">
              Testimonials
            </span>
          </h2>
          <p className="my-3 max-w-[350px] mx-auto text-(--text-color)">
            Real Stories from Those Who Found Home with Us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mt-16">
          {testimonialsData.map((testimonial) => {
            const { id, name, title, image, alt, text } = testimonial;
            return (
              <Testimonial
                key={id}
                name={name}
                title={title}
                image={image}
                alt={alt}
                text={text}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Testimonials;
