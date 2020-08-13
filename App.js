import * as React from "react";
import { FontAwesome5 } from '@expo/vector-icons'; 
import AddEntry from './components/AddEntry'
import { View, Text, StyleSheet,  } from "react-native";
import ReviewList from './playground/Lists'
import Forms from './playground/Forms';
import reducer from './reducers'
import {Provider} from 'react-redux'
import {createStore} from 'redux'



export default class App extends React.Component {

  state = {
    value : 0
  }

  handleOnValueChange(value){
    this.setState(()=>({value}))
  }
  
  render(){
    return (
      <Provider store={createStore(reducer)}>
        <View>
          <AddEntry />
        </View>
      </Provider>
      
    );
  }
}






