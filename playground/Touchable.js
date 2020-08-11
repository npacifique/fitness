import React from 'react'
import {
    StyleSheet,
    View, 
    Text, 
    Button, 
    TouchableHighlight, 
    TouchableOpacity, 
    TouchableNativeFeedback, 
    TouchableWithoutFeedback} from 'react-native'

export default class Touchable extends React.Component{

    handlePress(){
        //alert('Hello!')
    }

    render(){
        return(
            <View style={styles.container}>

                <Button
                    title="Button" 
                    onPress={this.handlePress} 
                    color="#E53334"
                    accessibilityLabel="Learn more about this purple button"
                   
                />
                    
                
                <Text />

                <TouchableOpacity style={styles.btn} onPress={this.handlePress} underlayColor='#d4271b'>
                    <Text style={styles.btnText}>TouchableOpacity</Text>
                </TouchableOpacity>

                <Text />

                {/** android support only */}
                <TouchableNativeFeedback
                     onPress={this.handlePress} underlayColor='#d4271b'>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>

                <Text />

                <TouchableHighlight style={styles.btn} onPress={this.handlePress} underlayColor='#d4271b'>
                    <Text style={styles.btnText}>TouchableHighlight</Text>
                </TouchableHighlight>
            </View>
        )
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
    btn :{
        backgroundColor : "#E53334",
        padding : 10, 
        paddingLeft: 50, 
        paddingRight : 50, 
        justifyContent : 'center',
        alignItems : 'center', 
        borderRadius : 5
    }, 
    btnText :{
        color : '#fff'
    }



})