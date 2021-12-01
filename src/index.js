import React from 'react';  //Así podemos utilizar JSX
import ReactDOM from 'react-dom';
import App from 'App';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'languages/i18n';

import Main from 'pages/Main';

import { unregister } from './registerServiceWorker';

import 'static/fonts/fonts.css';

/*ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );*/

  ReactDOM.render(<I18nextProvider i18n={i18n} >
    <Router basename='/apicnig'>
      <Routes>
        {/* <Route path='*' exact={true} component={Main}/> */}
        <Route exact path="*" element={<Main/>}/>
      </Routes>
    </Router>
  </I18nextProvider>, document.getElementById('root'));
  

unregister();