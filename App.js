import React from 'react';
import Landing from './screens/landing/container/Landing'
import News from './screens/news/container/News'

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
    return <AppContainer/>
  }
}

export default createAppContainer(MainNavigator)