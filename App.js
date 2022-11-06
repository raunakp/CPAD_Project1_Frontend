import React from 'react';

import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import Login from './pages/login.js'
import Dashboard from './pages/dashboard.js'
import ManageStudents from './pages/manage-students.js'
import StudentList from './pages/student-list.js'

console.reportErrorsAsExceptions = false;

const RootStack = createSwitchNavigator({
  Login: {
  screen: Login
},
Dashboard: {
  screen: Dashboard
},
ManageStudents: {
  screen: ManageStudents
},
StudentList: {
  screen: StudentList
}
});

const App = createAppContainer(RootStack);

export default App;
