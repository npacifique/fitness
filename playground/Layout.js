import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'

class FlexboxExamples extends Component {
  render() {
    return (
      <View >
        <View style={styles.container}>
            <View style={styles.box}/>
            <View style={styles.box}/>
            <View style={styles.box}/>
        </View>
        <View style={styles.FlexProperty}>
            <View style={[styles.box1, {flex: 1}]}/>
            <View style={[styles.box1, {flex: 2}]}/>
            <View style={[styles.box1, {flex: 1}]}/>
        </View>
        <View style={styles.container, {flex : 3}}>
            <View style={styles.box}/>
            <View style={[styles.box, {alignSelf: 'flex-end'}]}/>
            <View style={styles.box}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    //Centering Content
  container: {
    //flex: 1,
    alignItems : "center",
    justifyContent : "center", 
    flexDirection : 'row'


  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  }, 
  //FlexProperty
  FlexProperty: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    width: 50,
    height: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  },
  //Aligning Individual Flex Items
  
})

export default FlexboxExamples;