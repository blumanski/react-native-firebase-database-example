import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Modal
} from 'react-native'

class LoaderModal extends Component {

    constructor(props) {
        super(props)
    }

    // render the page loader
    render() {

        // this is part of the modal loader
        let modalBackgroundStyle = {
          backgroundColor: this.props.parentProps.transparent ? 'rgba(0, 0, 0, 0.3)' : '#f5fcff',
        };

        return (
            <Modal
              animationType={"fade"}
              transparent={this.props.parentProps.transparent}
              visible={this.props.parentProps.modalVisible}
              onRequestClose={() => this._setModalVisible(false)}
              >
                <View style={[styles.listViewContainer, modalBackgroundStyle]}>
                    <ActivityIndicator
                      animating={this.props.parentProps.animating}
                      size="large" color="#aa00aa"
                      style={
                        [styles.centering, {
                            transform: [{scale: 1.5}]
                        }
                      ]}
                      size="large"
                    />
                </View>
            </Modal>
        )
    }
}

export default styles = StyleSheet.create({
  centering: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 100,
  },
  listViewContainer: {
      flex: 1,
      paddingTop: 0,
      paddingBottom:10,
      flexDirection: 'column',
  }
});

module.exports = LoaderModal
