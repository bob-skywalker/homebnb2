import React from 'react'
import Navigation from '../Navigation'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { Avatar } from '@mui/material';
import { Link, Router } from 'react-router-dom';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import ProfileButton from '../Navigation/ProfileButton';




const Header = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);



  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
        <div className='header'>
            <div className='header-left'>
              <img className='header-icon'
              src='https://i.postimg.cc/nVXJ207G/kisspng-airbnb-logo-coupon-privately-held-company-airbnb-logo-5b167f0c91db57-0436925715282009725974.png' alt='header-img'/>
            </div>

            <div className='header-center'>
              <input type='text'/>
              <SearchIcon />
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
                      sessionUser ? (<button onClick={logout}>Log Out</button>) : ([<LoginFormModal/>,<SignupFormModal/>])
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
