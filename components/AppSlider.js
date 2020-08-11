import React from 'react'
import {View, Text , Slider} from 'react-native'



function AppSlider({max , step, unit, value, onChange}){

    return(
        <View>
            <Slider
            step={step}
            value={value}
            maximumValue={max}
            minimumValue={0}
            onValueChange={onChange}
        />
        <View>
            <Text>{value}</Text>
            <Text>{unit}</Text>
        </View>
        </View>


    )
}

export default AppSlider