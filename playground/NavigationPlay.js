import React from 'react'
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import {timeToString} from '../utils/helpers';


class Home extends React.Component {
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{timeToString()}</Text>
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
                <Text>{timeToString()}</Text>
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
                <Text>{timeToString()}</Text>
                <Text>Private</Text>
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

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



class MyTab extends React.Component {
    render(){
        return(
             <Tab.Navigator>
                <Tab.Screen name="Home" component={MyStack} />
            </Tab.Navigator>
        )
    }
}


class MyStack extends React.Component {
    render(){
        return(
             <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                    backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                    fontWeight: 'bold',
                    },
                }}
                >

                <Stack.Screen 
                    options={{ title: 'My home',  
                    headerStyle: {
                    backgroundColor: '#f4511e',
                 },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
            },
             }} name="Home" component={Home} />
                
                 </Stack.Navigator>
           
        )
    }
}


class MyStackDash extends React.Component {
    render(){
        return(
             <Stack.Navigator screenOptions={{
                    headerStyle: {
                    backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                    fontWeight: 'bold',
                    },
                }}>
                <Stack.Screen name="Dashboard" component={Dashboard} />
            </Stack.Navigator>
           
        )
    }
}


class MyStackPrivate extends React.Component {
    render(){
        return(
             <Stack.Navigator 
                    screenOptions={{
                    headerStyle: {
                    backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                    fontWeight: 'bold',
                    },
                }}
             >
                <Stack.Screen name="Private" component={Private} />
            </Stack.Navigator>
           
        )
    }
}








class NavigationPlay extends React.Component {
    render(){
        return(
            <NavigationContainer>
            <Tab.Navigator>
                    <Tab.Screen 
                        options={{
                            tabBarIcon: ({ focused, color, size }) => <Ionicons name="ios-home" size={size} color={color} />
                        }} name="home" component={MyStack} />
                    <Tab.Screen 
                        options={{
                            tabBarIcon: ({ focused, color, size }) => <AntDesign name="dashboard" size={size} color={color} />
                        }}
                    name="Dashboard" component={MyStackDash} />
                    <Tab.Screen 
                        options={{
                            tabBarIcon: ({ focused, color, size }) => <Ionicons name="ios-person" size={size} color={color} />
                        }}
                    name="Private" component={MyStackPrivate} />
            </Tab.Navigator>
            </NavigationContainer>
        )
    }
}


export default  NavigationPlay