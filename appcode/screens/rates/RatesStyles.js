import { StyleSheet } from 'react-native'

var styles = StyleSheet.create({
    listViewContainer: {
        flex: 1,
        paddingTop: 0,
        paddingBottom:10,
        flexDirection: 'column',
    },
    itemBlock: {
        borderWidth: 0,
        borderColor: '#dedede',
        borderBottomWidth: 1,
        padding: 15
    },
    viewContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch'
    },
    mainPadding: {
      padding: 0
    },
    topPadding: {
        marginTop: 0,
        marginBottom: 0
  },
  row: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '#F6F6F6',
  },
  itemHeadline: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  centering: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50,
  },
  arrowUp: {
    marginRight: 20,
    color: '#379239',
    fontSize: 18,
},
  arrowDown: {
    marginRight: 20,
    color: '#ff0000',
    fontSize: 18,
},
sorterView: {
    top: 22,
    right: 10,
    width: 44,
    height: 44,
    position: 'absolute',
    backgroundColor: '#efefef',
    borderRadius: 10,
    opacity: 0.5
},
    sorter: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        textAlign:'center',
    },
    angleUp: {
        fontSize: 36,
        color: '#111',

    }
});


export default styles
