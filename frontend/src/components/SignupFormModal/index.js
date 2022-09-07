import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupFormPage from '../SignupFormPage';

function SignupFormModal({showSignUp,setSignUp,setShowLogIn}) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setSignUp(false);
    setShowLogIn(true);
  }

  return (
    <>
      <button onClick={() => setSignUp(true)}>Sign up</button>
      {showSignUp && (
        <Modal onClose={() => setSignUp(false)}>
          <SignupFormPage setSignUp={setSignUp} setShowLogIn={setShowLogIn}/>
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
