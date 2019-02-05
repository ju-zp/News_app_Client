import React, { Component} from 'react'
import { Animated, StyleSheet, Text, View, StatusBar } from 'react-native'

import NavBar from '../components/NavBar.js'

class News extends Component {

    static navigationOptions = {
        header: null, 
        androidStatusBarColor: "#34495e"
    }

    render(){
        return <View style={{flex: 1}}>
            <StatusBar backgroundColor='#66fcf1' barStyle='dark-content'/>
            <NavBar/>
            <Text>hello</Text>
        </View>
    }
}

export default News