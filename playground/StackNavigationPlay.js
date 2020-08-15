import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';



class Home extends React.Component {
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <Text>Home</Text>
               <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('Dashboard')}
                style={{ padding: 10 , backgroundColor : '#3f3f3f', paddingLeft: 40, paddingRight : 40, borderRadius: 3 }}>
                    <Text style={{color : '#fff'}}>Go To Dashboard</Text>
               </TouchableOpacity>
               
            </View>
        )
    }
}


class Dashboard extends React.Component {
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Dashboard</Text>
                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('Private')}
                style={{ padding: 10 , backgroundColor : '#3f3f3f', paddingLeft: 40, paddingRight : 40, borderRadius: 3 }}>
                    <Text style={{color : '#fff'}}>Go To Private</Text>
               </TouchableOpacity>
            </View>
        )
    }
}

class Private extends React.Component {
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Dashboard</Text>
                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('Home')}
                style={{ padding: 10 , backgroundColor : '#3f3f3f', paddingLeft: 40, paddingRight : 40, borderRadius: 3 }}>
                    <Text style={{color : '#fff'}}>Go To Home</Text>
               </TouchableOpacity>
            </View>
        )
    }
}


//const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

class StackNavigationPlay extends React.Component {
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                    <Stack.Screen name="Private" component={Private} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}


export default  StackNavigationPlay