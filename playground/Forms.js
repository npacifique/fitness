import React from 'react';
import {Text, View, StyleSheet, Switch, TextInput, Image,  KeyboardAvoidingView } from 'react-native';


export default class Forms extends React.Component{

//    constructor(props){
//        super(props)
//         this.state={
//             input : '@jefferson', 
//             showInput : false
//         }

//         this.handleTextChange = this.handleTextChange.bind(this)
//         this.handleToggleSwitch = this.handleToggleSwitch.bind(this)
//    }
    

    state={
        input : '@jefferson', 
        showInput : false,
    }


   
    handleToggleSwitch(){
        this.setState((state)=>({
            showInput : !state.showInput
        }))
    }

    handleTextChange = (input)=>{
        let {text} = input.nativeEvent
        this.setState(()=>({
            input : text
        }))
    }


    render(){
        
        const {input , showInput} = this.state 
        return(
            <KeyboardAvoidingView behavior='padding'  style={styles.container}>

                <Image 
                    source={{uri : 'https://api.adorable.io/avatars/20/ken@adorable.png'}}
                    style={styles.img}
                />
                
                <Switch 
                    value={showInput}
                    onValueChange={this.handleToggleSwitch.bind(this)}
                    
                />

                {showInput === true && (
                    <TextInput 
                        value={input}
                        style={styles.input}
                        onChange={this.handleTextChange.bind(this)}
                    />
                )}

            </KeyboardAvoidingView>
        )
    }
}



const styles = StyleSheet.create({
    container :{
        flex : 1, 
        alignItems : 'center', 
        justifyContent : 'center', 
        paddingTop : 25, 
        backgroundColor : '#ecf0f1',
        

    },
    input :{
        width : 200, 
        height : 44, 
        padding : 8,
        borderWidth : 1, 
        borderBottomColor : '#757575', 
        margin : 50
    }, 
    img :{
        width : 100, 
        height : 100, 
        margin : 50
    }

})