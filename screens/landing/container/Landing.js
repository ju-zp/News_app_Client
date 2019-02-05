import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Landing extends Component {

    static navigationOptions = {
        title: 'Landing',
        header: null
    }
    render(){
        return <View>
                <Text>Hello</Text>
            </View>
    }
}

export default Landing