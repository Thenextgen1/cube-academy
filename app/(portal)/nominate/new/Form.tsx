"use client";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useGetNominee } from "@/app/hooks/useApiService/nominee";
import { useStore } from "@/app/hooks/useStore";
import Ratings from "./Ratings";
import Slider from "@/app/components/UI/Slider";
import { useState } from "react";
import ContentNav from "./ContentNav";

interface FormData {
  name: string;
  comment: string;
  rating?: string;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  comment: yup.string().required("Please add a comment"),
  rating: yup.string(),
});

const Form: React.FC = () => {
  const appStore = useStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { data, isSuccess } = useGetNominee();
  const [sliderValue, setSliderValue] = useState(0);
  console.log(sliderValue);

  const onSubmit = async (data: FormData) => {};

  return (
    <div className="w-full bg-white p-4 lg:px-7 lg:py-6">
      <div className="my-2">
        <Image
          src="/images/nominate/hero_form.png"
          width={1187}
          height={493}
          alt="Hero"
          className="hidden lg:block"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          {" "}
          <h2 className="font-Poppins mt-6 mb-3 text-2xl font-bold tracking-wide">
            I&apos;D LIKE TO NOMINATE
          </h2>
          <p className="font-Anoymous_Pro mb-6 text-[#444] max-w-[38rem]">
            Please select a cube who you feel has done something honourable this
            month or just all round has a great work ethic.
          </p>
          <div className="mt-7">
            <label
              htmlFor="name"
              className="font-Poppins font-bold tracking-wider block"
            >
              <span className=" text-secondaryPink">*</span> Cube&rsquo;s name
            </label>
            <select
              name="name"
              defaultValue={"Select Option"}
              id="name"
              onChange={(e) =>
                appStore.setStore((prevValue) => {
                  return {
                    ...prevValue,
                    nominatedPerson: e.target.value,
                  };
                })
              }
              className="font-Anoymous_Pro mt-2 w-1/2 border-solid border-[1px] py-3 px-2 border-[#c3c3c3]"
            >
              <option
                value="Select Option"
                className="font-Anoymous_Pro "
              >
                Select Option
              </option>
              {isSuccess &&
                data?.data.data.map((data) => {
                  return (
                    <option
                      key={data.nominee_id}
                      value={data.first_name}
                    >
                      {data.first_name} {data.last_name}
                    </option>
                  );
                })}
            </select>
          </div>
        </fieldset>

        <fieldset className="border-t-[1px] border-solid border-b-[1px] pt-12 my-12 pb-12 border-greyMid">
          <h2 className="font-Poppins text-2xl font-bold tracking-wide">
            I&apos;D LIKE TO NOMINATE{" "}
            <span className="text-[#F70087]">
              {appStore.store.nominatedPerson &&
                appStore.store.nominatedPerson.toUpperCase()}
            </span>{" "}
            BECAUSE...
          </h2>
          <p className="font-Anoymous_Pro my-3 text-[#444] max-w-[38rem]">
            Please let us know why you think this cube deserves the ‘cube of the
            month&apos; title 🏆⭐
          </p>
          <div className="mt-4">
            {" "}
            <label
              htmlFor="name"
              className="font-Poppins font-bold tracking-wider block"
            >
              <span className=" text-secondaryPink">*</span> Reasoning
            </label>
            <textarea
              className="w-full mt-3 border-solid border-[1px] text-black p-2 font-Anoymous_Pro lg:p-3 border-[#5B5B5B]"
              rows={5}
            />
          </div>
        </fieldset>

        <fieldset>
          {" "}
          <h2 className="font-Poppins max-w-xl lg:text-2xl font-bold tracking-wide">
            IS HOW WE CURRENTLY RUN CUBE OF THE MONTH FAIR?
          </h2>
          <p className="font-Anoymous_Pro mt-3 mb-8 text-[#444] max-w-[38rem]">
            As you know, out the nominees chosen, we spin a wheel to pick the
            cube of the month. What&apos;s your opinion on this method?
          </p>
          <Slider setSliderValue={setSliderValue} />
          <Ratings
            sliderValue={sliderValue}
            setSliderValue={setSliderValue}
          />
        </fieldset>
        <fieldset>
          <ContentNav />
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
