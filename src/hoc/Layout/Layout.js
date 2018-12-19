import React from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import { NotificationContainer } from 'react-notifications';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

const layout = (props) => (
  <>
    <Toolbar />
    <main>
      {props.children}
    </main>
    <Alert stack={{ limit: 3 }} />
    <NotificationContainer />
  </>
)

export default layout;