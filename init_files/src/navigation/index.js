/* Modules */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useReduxDevToolsExtension} from '@react-navigation/devtools';
/* Local Files */
import BottomTabs from './tabs/Bottom.tab.js';

const AppNavigation = () => {
  const navigationRef = React.useRef();
  useReduxDevToolsExtension(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default AppNavigation;
