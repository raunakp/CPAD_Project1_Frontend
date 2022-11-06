import React from 'react';

import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import Login from './pages/login.js'
import Dashboard from './pages/dashboard.js'
import ManageStudents from './pages/manage-students.js'
import StudentList from './pages/student-list.js'
import VaxedStudentList from './pages/vaxed-student-list.js'
import UnVaxedStudentList from './pages/unvaxed-student-list.js'
import Reports from './pages/reports.js';
import ManageVaxDrives from './pages/manage-vax-drives.js'
import AllVaxDrives from './pages/vax-drives-list.js'
import PastVaxDrives from './pages/past-vax-drives-list.js'
import UpcomingVaxDrives from './pages/upcoming-vax-drives-list.js'
import StudentDetails from './pages/studentDetails.js'

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
  },
  VaxedStudentList: {
    screen: VaxedStudentList
  },
  UnvaxedStudentList: {
    screen: UnVaxedStudentList
  },
  Reports: {
    screen: Reports
  },
  ManageVaxDrives: {
    screen: ManageVaxDrives
  },
  AllVaxDrives: {
    screen: AllVaxDrives
  },
  UpcomingVaxDrives: {
    screen: UpcomingVaxDrives
  },
  PastVaxDrives: {
    screen: PastVaxDrives
  },
  StudentDetails: {
    screen: StudentDetails
  }

});

const App = createAppContainer(RootStack);

export default App;
