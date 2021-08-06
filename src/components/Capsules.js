// SERVICE:
import CapsulesService from '../services/CapsulesService';
import SearchService from '../services/SearchService';

import React from 'react';

class Capsules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      searchResult: '',
      capsules: [],
      capsulesName: [],
      capsule: null
    };
  };

  handleSearchInput = (e) => {
    this.setState({
      searchInput: e.target.value,
      searchResult: ''
    });
    const { capsulesName } = this.state;

    const result = SearchService.find(e.target.value, capsulesName);
    this.setState({searchResult: result});
  }

  handleGetCapsule = (id) => {
    CapsulesService.getWithId(id)
      .then(res => this.setState({searchInput: '', searchResult: '', capsule: res}));
  };

  render() {
    const { searchInput, searchResult, capsules, capsule } = this.state;

    return(
      <>
        <header className='header'>
          <div className='input-group'>
            <input
              id='search-input'
              className='element-shadow'
              type='text'
              autoComplete='off'
              placeholder='Search Capsule'
              value={searchInput}
              onChange={this.handleSearchInput}
            />
            { searchResult &&
              <div
                className='search-result frame-container element-shadow p-1'
                onClick={() => {this.handleGetCapsule(searchResult)}}
              >
                {searchResult}
              </div>
            }
          </div>
        </header>

        <div className='page-container'>
          <div className='section'>

            <div className='frame-container element-shadow size-quarter p-1 m-1'>
              { capsule &&
                <>
                  <h5 className='title'>{capsule['capsule_serial']}</h5>
                  <div className='body-paragraph'>
                    <p>Type: {capsule.type}</p>
                    <p>Details: {capsule.details}</p>
                  </div>
                </>
              }
            </div>
            <div className='size-quarter p-pt5'>
              <div className='section'>

                <div className='frame-container element-shadow white-blue size-16ths m-pt5 p-1'>
                  { capsule &&
                    <>
                      <h5 className='title'>Status</h5>
                      <h2 className='body-word'>{capsule.status}</h2>
                    </>
                  }
                </div>
                <div className='frame-container element-shadow orange-white size-16ths m-pt5 p-1'>
                  { capsule &&
                    <>
                      <h5>Missions</h5>
                      <h2 className='body-word'>{capsule.missions.length}</h2>
                    </>
                  }
                </div>

              </div>
              <div className='section'>

                <div className='frame-container element-shadow white-lightBlue size-16ths m-pt5 p-1'>
                  { capsule &&
                    <>
                      <h5 className='title'>Landings</h5>
                      <h2 className='body-word'>{capsule.landings}</h2>
                    </>
                  }
                </div>
                <div className='frame-container element-shadow white-red size-16ths m-pt5 p-1'>
                  { capsule &&
                    <>
                      <h5 className='title'>Reuse count</h5>
                      <h2 className='body-word'>{capsule['reuse_count']}</h2>
                    </>
                  }
                </div>

              </div>
            </div>
            
          </div>
          <div className='section'>

            <div className='frame-container element-shadow size-pt375 m-1 p-1'>
              { capsule &&
                <>
                  <h5 className='title'>Missions</h5>
                  <div className='body-paragraph'>
                    { capsule.missions.map(mission =>
                      <div key={mission.name}>
                        <p>Name: {mission.name}</p>
                        <p>Flight: {mission.flight}</p>
                      </div>)
                    }
                  </div>
                </>
              }
            </div>
            <div className='frame-container element-shadow size-pt125 m-1 p-1'>
              <h5 className='title'>Capsules</h5>
              <ul className='capsules-selection'>
                { capsules.length > 0 &&
                  capsules.map(capsule =>
                    <li
                      key={capsule['capsule_serial']}
                      onClick={() => this.handleGetCapsule(capsule['capsule_serial'])}
                    >{capsule['capsule_serial']}</li>
                  )
                }
              </ul>
            </div>

          </div>
        </div>
      </>
    )
  }

  componentDidMount() {
    // HIGHLIGHT LOCATION:
    document.querySelector('.capsules-link').classList.add('current-page');

    // GET ALL CAPSULES:
    CapsulesService.getAll()
      .then(res => {
        let capsulesName = [];
        res.forEach(capsule => {
          capsulesName = [...capsulesName, capsule.capsule_serial];
        });
        const randomId = Math.floor(Math.random() * (res.length - 1));
        this.setState({
          capsules: res,
          capsulesName: capsulesName.sort(),
          capsule: res[randomId]
        })
      });
  }

  componentWillUnmount() {
    // HIGHLIGHT LOCATION REMOVE:
    document.querySelector('.capsules-link').classList.remove('current-page');
  }
}

export default Capsules;