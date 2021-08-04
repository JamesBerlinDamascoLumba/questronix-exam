// IMAGE:
import spacexWallpapaer from '../assets/spacex-wallpaper.jpg';

import React from 'react';

class Home extends React.Component {
  render() {
    return(
      <div className='page-container'>
        <div className='spacex-wallpaper'>
          <div className='frame-container element-shadow'>
            <img src={spacexWallpapaer} className='spacex-image' alt='wallpaper' />
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    // HIGHLIGHT LOCATION:
    document.querySelector('.home-link').classList.add('current-page');
  }

  componentWillUnmount() {
    // HIGHLIGHT LOCATION:
    document.querySelector('.home-link').classList.remove('current-page');
  }
}

export default Home;