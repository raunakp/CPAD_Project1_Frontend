import React from 'react';

import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import Login from './pages/login.js'
import Dashboard from './pages/dashboard.js'

const RootStack = createSwitchNavigator({
Home: {
  screen: Login
},
Dashboard: {
  screen: Dashboard
}
});

const App = createAppContainer(RootStack);

export default App;
