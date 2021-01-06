import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn21190470Navigator from '../features/SignIn21190470/navigator';
import UserProfile3190468Navigator from '../features/UserProfile3190468/navigator';
import BlankScreen0190465Navigator from '../features/BlankScreen0190465/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn21190470: { screen: SignIn21190470Navigator },
UserProfile3190468: { screen: UserProfile3190468Navigator },
BlankScreen0190465: { screen: BlankScreen0190465Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
