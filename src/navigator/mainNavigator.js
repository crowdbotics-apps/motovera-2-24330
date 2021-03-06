import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfCopyOfBlankScreen0201392Navigator from '../features/CopyOfCopyOfBlankScreen0201392/navigator';
import CopyOfBlankScreen0201391Navigator from '../features/CopyOfBlankScreen0201391/navigator';
import BlankScreen0201390Navigator from '../features/BlankScreen0201390/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfCopyOfBlankScreen0201392: { screen: CopyOfCopyOfBlankScreen0201392Navigator },
CopyOfBlankScreen0201391: { screen: CopyOfBlankScreen0201391Navigator },
BlankScreen0201390: { screen: BlankScreen0201390Navigator },

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
