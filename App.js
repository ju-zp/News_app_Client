import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './screens/landing/container/Landing'

import { createStackNavigator, createAppContainer } from 'react-navigation'

const MainNavigator = createStackNavigator({
  Home: {screen: Landing}
})

const AppContainer = createAppContainer(MainNavigator)

class App extends React.Component {
  render(){
    return <AppContainer/>
  }
}

export default createAppContainer(MainNavigator)