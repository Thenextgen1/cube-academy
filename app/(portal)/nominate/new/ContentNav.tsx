import Button from "@/app/components/Buttons";

const ContentNav = () => {
  return (
    <div className="flex items-center justify-between mt-20 mb-8">
      <Button
        intent={"back"}
        text="BACK"
      />
      <Button
        intent={"next"}
        text="NEXT"
      />
    </div>
  );
};

export default ContentNav;
