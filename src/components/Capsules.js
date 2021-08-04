// COMPONENT:
import Header from './Header';

import React from 'react';

class Capsules extends React.Component {
  render() {
    return(
      <>
        <Header />

        <div className='page-container'>
          <div className='section'>

            <div className='capsule-name-and-status p-1'>
              <div className='frame-container element-shadow'>
              </div>
            </div>
            <div className='capsule-name-and-status p-pt5'>
              <div className='section'>

                <div className='capsule-status p-pt5'>
                  <div className='frame-container element-shadow'>
                  </div>
                </div>
                <div className='capsule-status p-pt5'>
                  <div className='frame-container element-shadow'>
                  </div>
                </div>

              </div>
              <div className='section'>

                <div className='capsule-status p-pt5'>
                  <div className='frame-container element-shadow'>
                  </div>
                </div>
                <div className='capsule-status p-pt5'>
                  <div className='frame-container element-shadow'>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
          <div className='section'>

            <div className='capsule-properties p-1'>
              <div className='frame-container element-shadow'>
              </div>
            </div>
            <div className='capsules-list p-1'>
              <div className='frame-container element-shadow'>
              </div>
            </div>

          </div>
        </div>
      </>
    )
  }

  componentDidMount() {
    // HIGHLIGHT LOCATION:
    document.querySelector('.capsules-link').classList.add('current-page');
  }

  componentWillUnmount() {
    // HIGHLIGHT LOCATION REMOVE:
    document.querySelector('.capsules-link').classList.remove('current-page');
  }
}

export default Capsules;