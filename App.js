import * as React from "react";
import { FontAwesome5 } from '@expo/vector-icons'; 
import AddEntry from './components/AddEntry'
import { View, Text, StyleSheet,  } from "react-native";
import ReviewList from './playground/Lists'
import Forms from './playground/Forms';



export default class App extends React.Component {

  state = {
    value : 0
  }

  handleOnValueChange(value){
    this.setState(()=>({value}))
  }
  
  render(){
    return (
      <View>
        <AddEntry />
        {/**
          <ReviewList />
          <Forms />
      */}
      </View>
    );
  }
}




const styles = StyleSheet.create({
    container : {
        flex : 1, 
        marginLeft : 10, 
        marginRight : 10, 
        alignItems : 'center', 
        justifyContent : 'center' 
    }, 

})

