interface Props {
  children: React.ReactNode;
}

const ModalContainer = ({ children }: Props) => {
  return (
    <div className="bg-white sm:max-w-[500px] fixed block shadow-overlay left-0 my-0 mx-[1em] sm:mx-auto right-0 top-[20%] z-[100]">
      {children}
    </div>
  );
};

export default ModalContainer;
