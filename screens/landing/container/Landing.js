import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'yellow',
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        left: '33%',
        fontSize: 30
    }
})

class Landing extends Component {

    static navigationOptions = {
        title: 'Landing',
        header: null
    }
    render(){
        return <View style={styles.screen}>
                <Text style={styles.title}>NewApp</Text>
            </View>
    }
}

export default Landing