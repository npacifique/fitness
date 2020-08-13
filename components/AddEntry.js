import React, {Component} from 'react'
import {Text, View, TouchableOpacity, StyleSheet, Platform} from 'react-native'
import {getMetricMetaInfo, timeToString, getDailyReminderValue} from '../utils/helpers'
import AppSlider from './AppSlider'
import Stepers from './Stepers'
import DateHeader from './DateHeader'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TextButton from './TextButton'
import {submitEntry, removeEntry} from '../utils/api';
import {connect } from 'react-redux'
import {addEntry} from '../actions';
import {white, purple} from '../utils/colors'
import { Ionicons } from '@expo/vector-icons';



function SubmitBtn ({onPress}) {
  return (
    <TouchableOpacity
        style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
      onPress={onPress}>
        <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

class AddEntry extends Component{
    state ={
        run : 0, 
        bike : 0, 
        swim : 0, 
        sleep : 0, 
        eat : 0
    }

    increment = (metric)=>{
        this.setState((state)=>{
            const {max ,step } = getMetricMetaInfo(metric)

            const count = state[metric] + step

            return{
                ...state, 
                [metric] : count > max ? max : count
            }
        })

    }

    decrement = (metric)=>{
        this.setState((state)=>{
            const count = state[metric] - getMetricMetaInfo(metric).step
            return{
                ...state, 
                [metric] : count < 0 ? 0 : count
            }
        })

        }


    slide(metric, value){
        this.setState((state)=>{
            return{
                ...state, [metric] : value
            }
        })
    }

    submit =()=>{
        const key = timeToString()
        const entry=  this.state

        this.props.dispatch(addEntry({
            [key] : entry
        }))


        this.setState(()=>({
            run : 0, 
            bike : 0, 
            swim : 0, 
            sleep : 0, 
            eat : 0
        }))


        submitEntry({key, entry})
    }


    reset =()=>{
        const key = timeToString()

        this.props.dispatch(addEntry({
            [key] : getDailyReminderValue()
        }))

        removeEntry(key)
    }

    render(){
        const metaInfo = getMetricMetaInfo()

        if(this.props.alreadyLogged){
            return(
                <View style={styles.center}>
                    <Ionicons 
                        name={Platform.OS === 'ios' ? "ios-happy" :  "md-happy" } 
                        size={100} color="black" />
                    <Text>You already your information for today </Text>
                    <TextButton style={{padding : 10 }} onPress={this.reset}>
                        Reset
                    </TextButton>
                </View>
                
            )
        }

        return(
            <View style={styles.container}>
               
                
                <DateHeader date={(new Date()).toLocaleDateString()} />
                {Object.keys(metaInfo).map((key)=>{
                    const {getIcon, type, ...rest} = metaInfo[key]
                    const value = this.state[key]

                    return(
                        <View key={key} style={styles.row}>
                            {getIcon()}

                            {type === "slider" ? 
                                <AppSlider 
                                    value={value} 
                                    onChange={(value)=>this.slide(key, value)}
                                    {...rest}
                                />
                            : 
                            <Stepers
                                value={value}
                                onIncrease={()=>this.increment(key)}
                                onDecrease={()=>this.decrement(key)}
                                {...rest}
                            />
                        }
                        </View>
                    )
                })}

               <SubmitBtn onPress={this.submit} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container :{
        flex : 1, 
        paddingTop : 40,
        paddingRight : 20, 
        paddingLeft : 20,
        paddingBottom : 20,
        backgroundColor : white
    },
    row :{
        flexDirection : 'row',
        flex : 1, 
        alignItems : "center"
    },
    center :{
        flex : 1,
        justifyContent : "center",
        alignItems : "center", 
        marginLeft : 30, 
        marginRight : 30, 
    },
    iosSubmitBtn :{
        backgroundColor : purple,
        padding : 10, 
        borderRadius : 7, 
        height : 45,
        marginLeft : 40, 
        marginRight : 40
    },
    androidSubmitBtn :{
        backgroundColor : purple,
        padding : 10, 
        borderRadius : 2, 
        height : 45,
        marginLeft : 30, 
        marginRight : 30, 
        alignSelf : "flex-end",
        justifyContent : "center", 
        alignItems : "center"

    },
    submitBtnText: {
        color: white, 
        fontSize : 22, 
        textAlign : "center"
    }
})


const mapStateToProps = (state)=>{
    const key = timeToString()

    return{
        alreadyLogged : state[key] && typeof state[key].today === 'undefined'
    }
}



export default connect(mapStateToProps)(AddEntry)