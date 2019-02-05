import React, { Component} from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

import NavBar from '../components/NavBar.js'

class News extends Component {

    static navigationOptions = {
        header: null
    }

    render(){
        return <View>
            <NavBar/>
            <Text>hello</Text>
        </View>
    }
}

export default News