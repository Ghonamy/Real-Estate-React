import { assets } from "../Assets/assets";

function Footer() {
  return (
    <div className="pt-5 md:pt-12 bg-gray-900">
      <div className="container mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-5 md:mb-0">
            <img src={assets.logo_dark} alt="" />
            <p className="text-gray-400 max-w-[400px] mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>
          <div className="mb-5 md:mb-0">
            <h3 className="text-[22px] text-white font-bold mb-4">Company</h3>
            <ul>
              <li className="cursor-pointer text-gray-400 duration-300 hover:text-white mb-2 text-[18px]">
                Home
              </li>
              <li className="cursor-pointer text-gray-400 duration-300 hover:text-white mb-2 text-[18px]">
                About
              </li>
              <li className="cursor-pointer text-gray-400 duration-300 hover:text-white mb-2 text-[18px]">
                Contact
              </li>
              <li className="cursor-pointer text-gray-400 duration-300 hover:text-white mb-2 text-[18px]">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-[22px] font-bold">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-400 max-w-[350px] my-4 text-[18px]">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="text-gray-400 outline-0 border-0 rounded px-2 md:px-4 py-2 bg-gray-800"
              />
              <button className="bg-(--button-color) ml-2 md:ml-3 px-2 md:px-4 py-2 text-white cursor-pointer rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="text-[#fcf8f83b] my-5" />
        <p className="text-center text-[16px] md:text-[17px] text-gray-400 pb-5">
          Copyright 2024 © GreatStack. All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
