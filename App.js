import React from 'react';
import Landing from './screens/landing/container/Landing'
import News from './screens/news/container/News'
import { View, StatusBar } from 'react-native'

import { createStackNavigator, createAppContainer } from 'react-navigation'

const MainNavigator = createStackNavigator(
  {Home: {screen: Landing},
  News: {screen: News}},
  {
    initialRouteName: 'Home'
  }
)

const AppContainer = createAppContainer(MainNavigator)

class App extends React.Component {
  render(){
    return <View style={{flex:1}}>
      <StatusBar backgroundColor='#66fcf1' barStyle='dark-content'/>
      <AppContainer/>
    </View>
  }
}

export default createAppContainer(MainNavigator)