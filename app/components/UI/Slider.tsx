import { Dispatch, SetStateAction } from "react";
import ReactSlider from "react-slider";

interface Props {
  setSliderValue: Dispatch<SetStateAction<number>>;
}

const Slider = ({ setSliderValue }: Props) => {
  return (
    <div className="mb-10">
      <ReactSlider
        className="horizontal-slider cursor-pointer"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        onChange={(value: number) => {
          setSliderValue(value);
        }}
      />
    </div>
  );
};

export default Slider;
