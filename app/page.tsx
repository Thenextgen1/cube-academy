import type { Metadata } from "next";
import Image from "next/image";
import Button from "./components/Buttons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "3cube Nomination",
  description: "Assessment Preview",
};

export default function Home() {
  return (
    <main>
      <section className="flex flex-col md:py-12 sm:px-6 lg:px-0 mx-auto justify-center items-center max-w-[800px]">
        <div>
          <Image
            src="/images/home/hero.svg"
            width={800}
            height={305}
            alt="Hero"
            className="hidden lg:block"
          />
          <Image
            src="/images/home/heroMobile.png"
            width={385}
            height={215}
            alt="Hero"
            className=" lg:hidden"
          />
        </div>
        <div className="bg-white pb-12 px-3 lg:pt-12 text-center pt-6 lg:pb-16 w-full">
          <h2 className="text-[2em] font-bold tracking-wide">
            CUBE OF THE MONTH NOMINATIONS
          </h2>
          <p className="font-Anoymous_Pro my-3 lg:my-6 max-w-[600px] mx-auto">
            At cube we&apos;re passionate about recognising the great work that
            our cubes do. Each month one of our cubes are crowned cube of the
            month 👑⭐. Please nominate who you think deserves this months
            title.
          </p>
          <p className=" lg:static fixed left-0 bottom-0 w-full bg-white lg:bg-none p-3 z-10">
            <Link href="/nominate/new">
              {" "}
              <Button text={"GET STARTED"} />
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
