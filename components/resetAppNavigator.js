import React from 'react';
import { Image } from 'react-native';
import { createSwitchNavigator,createAppContainer} from 'react-navigation';
import { AppStackNavigator } from './AppStackNavigator'
import ResetPassword from '../screens/ResetScreen';
import WelcomeScreen from '../screens/WelcomeScreen'


const resetSwitchNavigator = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  Reset: ResetPassword
})

const AppContainer =  createAppContainer(resetSwitchNavigator);




