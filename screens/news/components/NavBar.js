import React, { Component } from 'react'

import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#45a29e',
        height: '25%'
    },
    nav: {
        backgroundColor: '#66fcf1',
        height: '47%'
    }
   
})

class NavBar extends Component {

    render(){
        return <View style={styles.container}>
            <View style={styles.nav}>
                <Text>Navigation</Text>
            </View>
        </View>
    }
}

export default NavBar