import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal({showLogIn,setShowLogIn,setSignUp}) {

  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowLogIn(true)}>Log In</Button>
      {showLogIn && (
        <Modal onClose={() => setShowLogIn(false)}>
          <LoginForm setShowLogIn={setShowLogIn} setSignUp={setSignUp}/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
