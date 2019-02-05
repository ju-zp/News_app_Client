import React, { Component } from 'react'

import { View, Text, StyleSheet, StatusBar } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#45a29e',
        height: '25%'
    },
    nav: {
        // backgroundColor: '#83fbf3',
        height: '47%'
    }
   
})

class NavBar extends Component {

    render(){
        return <View >
            <View >
                <Text>Navigaion</Text>
            </View>
        </View>
    }
}

export default NavBar