import { Link } from "react-router-dom";

const footerContent = [
    {
      title: "AZ.",
      subtitles: [
        {
          text: "About Us",
          href: "/about",
        },
        {
          text: "Contact Us",
          href: "/blank",
        },
        {
          text: "Sale In AZ",
          href: "/blank",
        },
        {
          text: "Career Opportunities",
          href: "/blank",
        },
      ],
    },
    {
      title: "Cstomer Services",
      subtitles: [
        {
          text: "Common Questions",
          href: "/blank",
        },
        {
          text: "Return Procedures",
          href: "/blank",
        },
        {
          text: "Privacy",
          href: "/blank",
        },
      ],
    },
    {
      title: "Shopping Guide",
      subtitles: [
        {
          text: "How To Place AnOrder",
          href: "/blank",
        },
        {
          text: "Order Submission Procedure",
          href: "/blank",
        },
        {
          text: "Payment Methods",
          href: "/blank",
        },
      ],
    },
  ];

const FooterColumns = () => {
  return (
    <div className="flex justify-between flex-wrap flex-grow min-width-[800px] xl:rtl:pl-60">
      {footerContent.map((item) => {
        return (
          <div className="mt-6 md:mt-0" key={item.title}>
            <h2 className="text-xl font-serif  rtl:border-r-4  ltr:border-l-4  px-2">
              {item.title}
            </h2>
            <div className="flex flex-col mt-2">
              {item.subtitles.map((subItem) => {
                return (
                  <Link to={subItem.href} key={subItem.text}>
                    <a className="text-md text-black font-serif border-l-4 border-indigo-500   px-4 py-2 hover:text-palette-base/100">
                      {subItem.text}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FooterColumns;
