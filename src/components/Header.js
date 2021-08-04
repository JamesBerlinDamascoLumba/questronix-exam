import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='input-group'>
          <input id='search-input' className='element-shadow' type='text' placeholder='Search Capsule' />
        </div>
      </header>
    );
  }
}

export default Header;