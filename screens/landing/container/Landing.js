import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'yellow',
        height: 740
    }
})

class Landing extends Component {

    static navigationOptions = {
        title: 'Landing',
        header: null
    }
    render(){
        return <View style={styles.screen}>
                <Text>Hello</Text>
            </View>
    }
}

export default Landing