import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { IconClose, IconMenu } from "./Icons";
import { useState } from "react";

const CustomModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogTrigger>
      {!isOpen && (
        <Button
          onPress={() => {
            setIsOpen(!isOpen);
          }}
          className="md:hidden"
        >
          <IconMenu></IconMenu>
        </Button>
      )}
      <ModalOverlay
        isOpen={isOpen}
        className="fixed bg-gradient-to-b from-black/5 to-black/60 inset-0 flex flex-row justify-center"
      >
        <Modal className="fixed top-20 bg-neutral-5 text-primary-2 text-lg w-10/12 z-10">
          <Dialog className="flex flex-col items-center py-8">
            {({ close }) => (
              <>
                {isOpen && (
                  <Button
                    onPress={() => {
                      close;
                      setIsOpen(!isOpen);
                    }}
                    className="absolute -top-12 right-4"
                  >
                    <IconClose></IconClose>
                  </Button>
                )}

                <ul className="flex flex-col items-center gap-8 font-bold">
                  <li>
                    <a href="">Pricing</a>
                  </li>
                  <li>
                    <a href="">Product</a>
                  </li>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Careers</a>
                  </li>
                  <li>
                    <a href="">Community</a>
                  </li>
                </ul>
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};

export default CustomModal;
