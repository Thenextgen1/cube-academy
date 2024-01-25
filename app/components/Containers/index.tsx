interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <section className="flex flex-col md:py-12 sm:px-6 lg:px-0 mx-auto justify-center items-center max-w-[800px]">
      {children}
    </section>
  );
};

export default Container;
