import React, { useState } from 'react'
import Navigation from '../Navigation'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { Avatar } from '@mui/material';
import { Link, Router, useHistory } from 'react-router-dom';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import ProfileButton from '../Navigation/ProfileButton';
import Button from '@mui/material/Button';
import { fetchQueryListings } from '../../store/listings';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Header = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [showSignUp, setSignUp] = useState(false);
  const [showLogIn,setShowLogIn] = useState(false);
  const [searchInput, setSearchInput] = useState('');


  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  console.log(sessionUser)

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${searchInput}`);
  }

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push(`/`)
  };



  return (
    <>
        <div className='header'>
            <div className='header-left'>
              <Link to='/'>
                <img src="https://i.postimg.cc/SsWWb96D/worent-900-270-px.png" className='header-icon'
                alt='header-img'/>
              </Link>
            </div>

            <div className='header-center'>
              <form onSubmit={handleSubmit}>
                <input className='search-bar'
                value={searchInput}
                onChange={(e)=> setSearchInput(e.target.value)}
                type='text'
                placeholder='Start your search'
                />
                  <button className='search-bar-button' type='submit'>Search</button>
              </form>
              <SearchIcon className='searchIcon' />
            </div>

            <div className='header-right'>
              <p onClick={handleOpen} className='header-text'>Become a Host</p>

              <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            The site isn't accepting new host right now
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            We are sorry, as of right now we are no longer accepting new hosts.
          </Typography>
        </Box>
      </Modal>


              <Link to='/search'>
                <LanguageIcon className='header-globe'/>
              </Link>
              <div className='dropdown'>
                  <button className='link'>
                    <ViewHeadlineIcon />
                    {(sessionUser) && <Avatar src='https://i.postimg.cc/br5kzQ2J/pexels-pixabay-220453.jpg' />}
                    {(!sessionUser && <Avatar/>)}
                  </button>
                  <div className='dropdown-menu'>
                    {
                      sessionUser ? ([<Button onClick={()=> history.push(`/reservation`)}>My Reservation</Button>,<Button onClick={logout}>Log Out</Button>]) : ([<LoginFormModal showLogIn={showLogIn} setShowLogIn={setShowLogIn} setSignUp={setSignUp}/>,<SignupFormModal showSignUp={showSignUp}  setSignUp={setSignUp} setShowLogIn={setShowLogIn}/>])
                    }
                  </div>
              </div>



              {/* <Navigation /> */}
            </div>
        </div>
    </>
  )
}

export default Header
