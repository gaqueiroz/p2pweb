import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FC, useState } from "react";

// import { Container } from './styles';

export const Modal: FC = () => {
  return (
    function ScrollingExample() {
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [scrollBehavior, setScrollBehavior] = useState('inside')
    
      const btnRef = React.useRef(null)
      return (
        <>
          <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>
            <Stack direction='row'>
              <Radio value='inside'>inside</Radio>
              <Radio value='outside'>outside</Radio>
            </Stack>
          </RadioGroup>
    
          <Button mt={3} ref={btnRef} onClick={onOpen}>
            Trigger modal
          </Button>
    
          <Modal
            onClose={onClose}
            finalFocusRef={btnRef}
            isOpen={isOpen}
            scrollBehavior={scrollBehavior}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Lorem count={15} />
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
    }
  )
}
