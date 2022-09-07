import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal({showLogIn,setShowLogIn,setSignUp}) {

  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowLogIn(true)}>Log In</button>
      {showLogIn && (
        <Modal onClose={() => setShowLogIn(false)}>
          <LoginForm setShowLogIn={setShowLogIn} setSignUp={setSignUp}/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
