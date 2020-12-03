/* Modules */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
/* Local Files */
import HomeStack from '../stacks/Home.stack.js';
import SettingsStack from '../stacks/Settings.stack.js';
import {HOME_TAB, SETTINGS_TAB} from '../../constants/navigation.js';
import {LocalizationContext} from '../../redux/store.js';
import colors from '../../theme/colors.js';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const {t} = React.useContext(LocalizationContext);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={HOME_TAB}
        component={HomeStack}
        options={{
          title: t('home'),
          tabBarIcon: () => (
            <Icon name="home" size={30} color={colors.primary} />
          ),
        }}
      />
      <Tab.Screen
        name={SETTINGS_TAB}
        component={SettingsStack}
        options={{
          title: t('settings'),
          tabBarIcon: () => (
            <Ionicon name="settings-sharp" size={30} color={colors.primary} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
