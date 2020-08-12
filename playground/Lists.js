import React from 'react'
import {View, Text, ScrollView, FlatList, Image, StyleSheet} from 'react-native'
import getReview from './reviews'

function Review({name, text, avatar}){
    return(
        <View style={styles.row }>
            <Image 
                source={{uri : avatar}} 
                style={styles.logo}
                />
            <View style={{marginBottom: 24, paddingLeft: 10, paddingRight: 20}}>
                <Text style={{ fontSize: 18, marginBottom : 10 }}>{name}</Text>
                <Text style={{ flexShrink: 1 }}>{text}</Text>
            </View>
        </View>
    )
}




export default class ReviewList extends React.Component{
    renderItem({item}){
        return <Review {...item}/>
    }
    render(){
        const reviews = getReview();
        return(
            <View style={styles.container}>
                <FlatList 
                    data={reviews}
                    renderItem={this.renderItem}
                />
                
            </View>
        )
    }
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 10, 
    paddingRight : 10
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 66,
    borderRadius : 100
  },
  row :{
      flex: 1, 
      flexDirection: 'row'
  }
});