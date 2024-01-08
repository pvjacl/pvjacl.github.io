import React, {useState} from 'react';
import Modal from './Modal';

type Props = {
  btnText: string;  
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const ButtonTriggerModal = ({btnText, hasCloseBtn, onClose, children}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const onCloseLocal = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  }
  return (
    <>
      <button onClick={() => setIsOpen(true)}>{btnText}</button>
      <Modal isOpen={isOpen} hasCloseBtn={hasCloseBtn} onClose={onCloseLocal} children={children} />
    </>
  );
}

export default ButtonTriggerModal;