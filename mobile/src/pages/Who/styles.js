import {StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
 container: {
     flex:1,
     paddingHorizontal: 24,
     paddingTop: Constants.statusBarHeight +20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize:30,
        color: '#737380',
    },
    
    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 20,
        lineHeight: 27,
        color: '#737380'
      },
    

})