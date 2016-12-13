/**
* @author Oliver Blum <blumanski@protonmail.com>
* Example react-native app
* How to use firebase datase, simple example
* in app environemnt
*/


import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
  Navigator
} from 'react-native'

// third party
import Fire, { app, database } from 'firebase'

// Components
import StatusBar from './components/StatusBar'
import TitleBar from './components/TitleBar'
import AppBar from './components/AppBar'

// screens
import RatesScreen from './screens/rates/RatesScreen'
// config
import AppConfig from './AppConfig'
const Config = AppConfig.getConfig()

Firebase = Fire.initializeApp(Config.firebaseConfig)

class examplefiredata extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: Config.app.title
        }
    }

    changePage = (page) => {
        this.navProps.navigator.replace({ id: page })
    }

    provideNavigatorProps(navigator) {
        this.navProps = {navigator}
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style={{backgroundColor: 'green'}} />
                <AppBar appTitle={Config.app.title} />

                <Navigator
                    initialRoute={{id: 'RatesScreen'}}
                    style={styles.container}
                    ref={(navigator) => { this.provideNavigatorProps(navigator)} }
                    renderScene={(route, navigator) => { return this.renderScene(route, navigator)} }
                />
            </View>
        )
    }

    renderScene(route, navigator) {

        let changePage = this.changePage
        let globalProps = {
            Config,
            navigator,
            route,
            Firebase,
            changePage
        }

        // switch routes
        switch(route.id) {
            case "RateScreen":
                return (
                    <RatesScreen
                        {...globalProps}
                    />
            )

            default:
                return (
                    <RatesScreen
                        {...globalProps }
                    />
                )
        }
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    scrollTabMargin: {
        marginTop: 45
    }
})

module.exports = examplefiredata
