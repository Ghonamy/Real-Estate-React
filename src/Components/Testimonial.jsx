import { assets } from "../Assets/assets";

function Testimonial({ name, title, image, alt, text }) {
  return (
    <div className="p-5 md:p-12 bg-gray-50 rounded-xl shadow-[0_0_1px_gray]">
      <img src={image} alt={alt} className="mx-auto" />
      <h3 className="mt-2 text-[22px]">{name}</h3>
      <p className="text-(--text-color) font-medium text-[16px]">{title}</p>
      <div className="flex justify-center my-3 gap-2">
        <img src={assets.star_icon} alt="Star_Icon" />
        <img src={assets.star_icon} alt="Star_Icon" />
        <img src={assets.star_icon} alt="Star_Icon" />
        <img src={assets.star_icon} alt="Star_Icon" />
        <img src={assets.star_icon} alt="Star_Icon" />
      </div>
      <p className="text-(--text-color) mt-4 text-[17px]">{text}</p>
    </div>
  );
}

export default Testimonial;
