/* Modules */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
/* Local Files */
import BottomTabs from './tabs/Bottom.tab.js';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default AppNavigation;
