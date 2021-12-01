import React, { Component } from 'react';
import { Loader } from 'react-loaders';
import { withTranslation } from 'react-i18next';

import MapAPICNIG from 'components/MapAPICNIG/MapAPICNIG';
//import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import CustomModal from 'components/CustomModal/CustomModal';
import { initMap } from 'utils/Visor';

//import 'loaders.css/loaders.min.css';
import './Layout.css';

class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blocking: true,
    };
  }

  componentDidMount() {
    initMap(this.unblock, this.props.t, this.props.params);
  }

  unblock = () => {
    this.setState({ blocking: false });
  }

  render() {
    return (
      <div className='content-wrapper'>
        <Header />
        <section className='layout-wrapper'>
          <MapAPICNIG />
        </section>
        {/*<Footer />*/}
        <CustomModal open={this.state.blocking} blocking={true} onClose={this.unblock}>
          <div className='block-loader-container'>
            {/* <Loader active type={'ball-triangle-path'} color='#8f2031'/> */}
          </div>
        </CustomModal>
      </div>
    );
  }
}

export default withTranslation()(Layout);