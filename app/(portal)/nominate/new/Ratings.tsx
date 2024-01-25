import { ratings } from "@/app/data/ratings";
import { numbersInRange } from "@/app/utilities/numberRange";
import Image from "next/image";
import { Dispatch, SetStateAction, useId } from "react";

interface Props {
  sliderValue: number;
  setSliderValue: Dispatch<SetStateAction<number>>;
}

const Ratings = ({ sliderValue, setSliderValue }: Props) => {
  const id = useId();

  return (
    <div className="flex items-center justify-between mt-16 lg:mx-12 mx-4">
      {ratings.map((data) => {
        return (
          <div
            className="mx-2 flex flex-col items-center justify-center cursor-pointer"
            key={data.remark + id}
          >
            <div
              className={`p-2 bg-[#f8f8f8] my-3 hover:border-4 hover:border-solid hover:border-[#F70087] 
               ${numbersInRange(
                 data.value,
                 sliderValue,
                 data.value - 20,
                 data.value,
                 "border-4 border-solid border-[#F70087]",
                 "border-none",
               )}
              `}
            >
              <Image
                width={35}
                height={35}
                src={data.avatar}
                alt={data.remark}
              />
            </div>
            <p
              className={`font-Anoymous_Pro    ${numbersInRange(
                data.value,
                sliderValue,
                data.value - 20,
                data.value,
                "font-bold",
                "font-normal",
              )}`}
            >
              {data.remark}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Ratings;
