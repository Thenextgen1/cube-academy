"use client";

import Image from "next/image";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <nav className="lg:flex hidden bg-black items-center justify-between py-6 px-6">
      <h1>
        <Image
          src="/images/home/logo.svg"
          alt="Logo"
          height={37}
          width={239}
        />
      </h1>
      <div className="font-Anoymous_Pro underline text-white  tracking-wider">
        {" "}
        <p>
          <Link href="/your-nominations">Your Nominations (3)</Link>
        </p>
      </div>
    </nav>
  );
};

export default DesktopNav;
