import React, { Component } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#1f2833',
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        left: '33%',
        fontSize: 30,
        color: '#66fcf1'
    }
})

class Landing extends Component {

    state = {
        fadeAni: new Animated.Value(0),
        interval: null
    }

    componentDidMount(){
        Animated.timing(
            this.state.fadeAni,{
                toValue: 1,
                duration: 1000
            }
        ).start()
    }

    static navigationOptions = {
        title: 'Landing',
        header: null
    }
    render(){
        const { fadeAni } = this.state
        return <View style={styles.screen}>
                <Animated.Text style={{...styles.title, opacity: fadeAni}}>NewsApp</Animated.Text>
            </View>
    }
}

export default Landing