import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import ReactNotification from 'react-notifications-component';

import Layout from 'components/Layout/Layout';

import 'react-notifications-component/dist/theme.css';

class Main extends Component {

  render() {
    const params = window.location.href.indexOf('?') > -1 ? window.location.href.split('?')[1] : undefined;
    return (
      <div className='app-container'>
        <ReactNotification />
        <Layout history={this.props.history} params={params} />
      </div>
    );
  }
}

export default withTranslation()(Main);