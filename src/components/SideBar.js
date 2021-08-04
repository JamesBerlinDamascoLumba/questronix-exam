// IMAGE:
import spacexLogo from '../assets/spacex-logo.png';

import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
  render() {
    return(
      <div className='side-bar'>
        <div className='section'>
          <img src={spacexLogo} alt='SpaceX-Logo' className='spacex-logo' />
        </div>
        <ul className='vertical-menu'>
          <li className='menu-item home-link'>
            <Link to={'/'} >
              Home
            </Link>
          </li>
          <li className='menu-item capsules-link'>
            <Link to={'/capsules'} >
              Capsules
            </Link>
          </li>
          <li className='menu-item'>
            <Link to={'#'}>
              Item 1
            </Link>
          </li>
          <li className='menu-item'>
            <Link to={'#'}>
              Item 2
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default SideBar;