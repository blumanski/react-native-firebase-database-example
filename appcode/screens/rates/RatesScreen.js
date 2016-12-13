import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity
} from 'react-native'

// screen styles
import styles from './RatesStyles'
// third party
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'
// internal components
import LoaderModal from '../../components/LoaderModal'

class RatesScreen extends Component {

    constructor(props) {
        super(props)

        this.deviceUuid = null

        // set state defaults
        this.state = {
          animating: true,
          modalVisible: true,
          transparent: true,
          dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          }),
        }
    }

    // on didMount we subcribed to the firebase reference path
    // Now this has to get unsubscribed to free this.
    componentWillUnmount() {
        // set this path reference to off (unsubscribe channel callback)
        this.props.Firebase.database.ref('latestMarkets/').off()
    }

    // api call live here
    componentDidMount() {

        // subscribe to the firebase real-time database path
        // on data change, this will synchronise data with all connected devices.
        this.props.Firebase.database().ref('latestMarkets/').on('value', snapshot => {
            let snapper = snapshot.val()

            if (snapper) {
                // new object
                let newRates = {}
                let i = 0
                // Transform the data into a better format and prepare for displaying it.
                Object.keys(snapper).forEach((key) => {
                    i++

                    if(snapper[key]['Symbol']) {
                        newRates[i] = {}
                        newRates[i]['name'] = snapper[key]['Symbol']
                        newRates[i]['Ask'] = snapper[key].Ask
                        newRates[i]['Bid'] = snapper[key].Bid
                        newRates[i]['Direction'] = snapper[key].Direction
                        newRates[i]['High'] = snapper[key].High
                        newRates[i]['Low'] = snapper[key].Low
                        newRates[i]['Last'] = snapper[key].Last
                    }
                })
                // add data to state via setState
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(newRates),
                    // stop the loader animation
                    animating: false,
                    modalVisible: false,
                })
            }
        })
    }

    // render the direction Icon and return the result
    renderDirection(direction) {
        if(direction == 0) {
            return(
                <Icon style={styles.arrowDown} name="arrow-circle-down" />
            )
        } else {
            return(
                <Icon style={styles.arrowUp} name="arrow-circle-up" />
            )
        }
    }

    // render each item
    renderRow(row) {
        return (
          <View style={styles.itemBlock} key={row.name}>
              <Text style={styles.itemHeadline}>
                {this.renderDirection(row.Direction)} {`${row.name}`} {`${row.Ask}`}
              </Text>
              <Text>
                Buy: {`${row.Ask}`} Sell: {`${row.Bid}`}
              </Text>
              <Text>
                Low: {`${row.Bid}`} High: {`${row.Ask}`}
              </Text>
          </View>
        )
    }

    // render component
    render() {

        return (
            <View style={styles.mainPadding, styles.listViewContainer}>

                <LoaderModal parentProps={this.state} />

                <ListView
                    style={styles.listViewContainer}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => {return this.renderRow(rowData)}}
                />
            </View>
        )
    }
}

module.exports = RatesScreen
