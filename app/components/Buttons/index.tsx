import { cva, VariantProps } from "class-variance-authority";

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  text: string;
  handleClick?: () => void;
}

const buttonStyles = cva(
  "max-w-[327px] font-bold text-center w-full py-3 text-sm tracking-wide",
  {
    variants: {
      intent: {
        active: ["text-primaryWhite bg-primaryBlack"],
        inActive: ["text-primaryWhite bg-greyMid"],
        loading: ["bg-primaryBlack"],
        hover: ["bg-primaryWhite text-primaryBlack"],
        back: ["bg-white border-solid border-[2px] border-[#000] max-w-[92px]"],
        next: ["max-w-[223px] text-white bg-greyMid"],
        modal: [
          "max-w-none w-full bg-white text-black border-[2px] border-[#000] border-solid",
        ],
      },
    },
    defaultVariants: {
      intent: "active",
    },
  },
);

export default function Button({ intent, text, ...props }: ButtonProps) {
  return (
    <button
      className={buttonStyles({ intent })}
      {...props}
    >
      {text}
    </button>
  );
}
