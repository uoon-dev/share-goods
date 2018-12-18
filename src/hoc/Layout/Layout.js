import React from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import { NotificationContainer } from 'react-notifications';

const layout = (props) => (
  <>
    <Toolbar />
    <main>
      {props.children}
    </main>
    <NotificationContainer />
  </>
)

export default layout;