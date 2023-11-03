"use client";

import Image from "next/image";

const MobileNav = () => {
  return (
    <nav className="lg:hidden flex justify-between items-center bg-primaryBlack px-6 py-3">
      <h1>
        <Image
          src="/icons/desktopLogo.svg"
          alt="3cube logo"
          width={40}
          height={37}
        />
      </h1>
      <div className="child:ml-4 child:inline-block">
        <Image
          src="/icons/plus.svg"
          alt="plus"
          width={23}
          height={23}
        />
        <Image
          src="/icons/inbox.svg"
          alt="plus"
          width={27}
          height={27}
        />
      </div>
    </nav>
  );
};

export default MobileNav;
