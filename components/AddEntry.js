import React, {Component} from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import {getMetricMetaInfo, timeToString} from '../utils/helpers'
import AppSlider from './AppSlider'
import Stepers from './Stepers'
import DateHeader from './DateHeader'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TextButton from './TextButton'
import {submitEntry, removeEntry} from '../utils/api';


function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}>
        <Text>SUBMIT</Text>
    </TouchableOpacity>
  )
}


export default class AddEntry extends Component{
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

        removeEntry(key)
    }

    render(){
        const metaInfo = getMetricMetaInfo()

        if(this.props.alreadyLogged){
            return(
                <View>
                    <MaterialCommunityIcons name="emoticon-happy-outline" size={100} color="black" />
                    <Text>You already your information for today </Text>
                    <TextButton onPress={this.reset}>
                        Reset
                    </TextButton>
                </View>
                
            )
        }

        return(
            <View>
                {/**getMetricMetaInfo("run").getIcon()*/}
                
                <DateHeader date={(new Date()).toLocaleDateString()} />
                {Object.keys(metaInfo).map((key)=>{
                    const {getIcon, type, ...rest} = metaInfo[key]
                    const value = this.state[key]

                    return(
                        <View key={key}>
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
            </View>
        )
    }
}