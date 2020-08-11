import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {FontAwesome, Entypo} from '@expo/vector-icons'


export default function Stepers({max, unit, step, value, onIncrease, onDecrease}){
    return(
        <View>
            <View>
                <TouchableOpacity onPress={onDecrease}>
                    <FontAwesome name="minus" size={30} color={'black'} />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={onIncrease}>
                    <FontAwesome name="plus" size={30} color={'black'} />
                </TouchableOpacity>
            </View>
            <View>
                <Text>{value}</Text>
                <Text>{unit}</Text>
            </View>
        </View>
    )
}