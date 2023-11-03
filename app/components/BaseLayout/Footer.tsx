import Image from "next/image";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";

const location = [
  {
    city: "Bournemouth",
    address: "Telephone House Bournemouth, BH1 3NE",
  },
  {
    city: "London",
    address: "51 Eastcheap London, EC3M 1JP",
  },
  {
    city: "Washington",
    address: "80 M Street SE Washington, D.C 20003",
  },
  {
    city: "Florida",
    address: "7901 4th St N, STE 300 St. Petersburg FL 33702",
  },
];

const Footer = () => {
  return (
    <footer className="bg-primaryBlack py-8 px-6 sm:px-12">
      <section className="xl:max-w-5xl xl:mx-auto">
        <div className="pb-5 flex justify-center items-center lg:justify-normal border-b-[#c3c3c3] border-b-2">
          <Image
            src="/images/home/logo.svg"
            alt="logo"
            width={239}
            height={37}
          />
        </div>
        <section className="lg:flex items-baseline">
          <div className="my-6 lg:flex items-baseline">
            {location.map((data) => {
              return (
                <div
                  key={data.city}
                  className=" text-xs my-6 lg:my-0 text-white mr-12"
                >
                  <p className="uppercase font-bold">{data.city}</p>
                  <p className="font-Anoymous_Pro max-w-[14em] opacity-70 leading-normal mt-1">
                    {data.address}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 lg:mt-0">
            <p className="font-bold text-xs text-white  tracking-wide">
              GET SOCIAL
            </p>
            <ul className="flex child:mr-3 mt-2 child:text-white child:text-[1.3em]">
              <li>
                <BsTwitter />
              </li>
              <li>
                <IoLogoInstagram />
              </li>
              <li>
                <ImFacebook />
              </li>
              <li>
                <BiLogoLinkedinSquare />
              </li>
              <li>
                <BsYoutube />
              </li>
            </ul>
          </div>
        </section>
        <div className="flex items-center child:opacity-70 font-Anoymous_Pro child:my-1 lg:child:my-0 mt-12 mb-24 lg:mb-0 lg:mt-16 text-xs text-white font-bold lg:flex-row flex-col lg:justify-between">
          <p>© 2023 3 Sided Cube</p>
          <p>Let&apos;s Build Tech For Good</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
