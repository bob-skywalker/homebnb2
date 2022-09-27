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


const Header = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [showSignUp, setSignUp] = useState(false);
  const [showLogIn,setShowLogIn] = useState(false);
  const [searchInput, setSearchInput] = useState('');


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
              <p className='header-text'>Become a Host</p>
              <LanguageIcon className='header-globe'/>
              <div className='dropdown'>
                  <button className='link'>
                    <ViewHeadlineIcon />
                    <Avatar />
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
