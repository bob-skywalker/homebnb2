import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupFormPage from '../SignupFormPage';
import { Button } from '@mui/material';

function SignupFormModal({showSignUp,setSignUp,setShowLogIn}) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setSignUp(false);
    setShowLogIn(true);
  }

  return (
    <>
      <Button onClick={() => setSignUp(true)}>Sign up</Button>
      {showSignUp && (
        <Modal onClose={() => setSignUp(false)}>
          <SignupFormPage setSignUp={setSignUp} setShowLogIn={setShowLogIn}/>
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
