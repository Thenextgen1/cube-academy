import Container from "@/app/components/Containers";
import type { Metadata } from "next";
import Form from "./Form";
import ModalContainer from "@/app/components/Modals/ModalContainer";
import Button from "@/app/components/Buttons";

export const metadata: Metadata = {
  title: "3cube Nomination",
  description: "Your Nomination",
};

export default function Nominate() {
  return (
    <main>
      <Container>
        <Form />
      </Container>
      {/* <ModalContainer>
        <div className="pt-6">
          <div className="px-[2em]">
            <h4 className="uppercase font-bold text-lg  tracking-wide">
              Are you sure?
            </h4>
            <p className="tracking-wider my-4 font-Anoymous_Pro">
              If you leave this page, you will lose any progress made.
            </p>
          </div>

          <div className="flex shadow-strong p-6 mt-12 justify-center child:my-1 items-center flex-col child:flex-1">
            <Button
              text="YES, LEAVE PAGE"
              intent={"modal"}
            />
            <Button
              text="CANCEL"
              intent={"modal"}
            />
          </div>
        </div>
      </ModalContainer> */}
    </main>
  );
}
