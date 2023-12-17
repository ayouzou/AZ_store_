import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaTwitterSquare, FaTelegramPlane } from "react-icons/fa";

 const socialMedia = [
    {
      name: "Instagram",
      icon: AiFillInstagram,
      href: "/",
    },
    {
      name: "linkedin",
      icon: FaLinkedin,
      href: "/",
    },
    {
      name: "twitter",
      icon: FaTwitterSquare,
      href: "/",
    },
    {
      name: "telegram",
      icon: FaTelegramPlane,
      href: "/",
    },
  ];

const SocialPart = () => {

  return (
    <div className="mt-8 rtl:md:mt-0 ltr:xl:mt-0 rtl:lg:mr-12 ltr:xl:ml-12  ltr:2xl:ml-48">
        <h2 className="text-md sm:text-xl font-serif">Be With Us</h2>
        <div className="flex gap-5 text-indigo-950 ">
          {socialMedia.map((SocialItem) => {
            return (
              <Link to={SocialItem.href} key={SocialItem.name}>
                <a
                  className="px-4 ga opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out"
                  aria-label={SocialItem.name}
                >
                  <SocialItem.icon
                    style={{
                      fontSize: "2rem",
                      
                    }}
                  />
                </a>
              </Link>
            );
          })}
        </div>
      
      <div className="mt-6">
        <h2 className="text-md sm:text-lg">Stay up to date with the latest discounts by emailing us</h2>
        <form className="flex gap-3 items-center flex-wrap sm:flex-nowrap mt-4 " onSubmit={(e) => {
            e.preventDefault();
          }}>
          <input placeholder="Please Enter Your Email..."
          className=" w-full py-3 px-4 outline-none rounded-lg sm:rounded-none ltr:sm:rounded-tl-lg ltr:sm:rounded-bl-lg rtl:sm:rounded-tr-lg rtl:sm:rounded-br-lg shadow-md sm:shadow-none focus:shadow-sm" type="email" />                     <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-transform hover:scale-105">Start right now</button>
        </form>
      </div>
    </div>
  );
};

export default SocialPart;
