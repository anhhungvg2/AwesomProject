import React, { Component,useEffect,useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    Image
} from 'react-native'
import Login from './login'
import Home from './home'
import Setting from './setting'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './register'
import Product from './product'
import Profile from './profile'
import Search from './search'
import User from './user'
import More from './more'
import Reels from './reels'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Calculator from './calculator'
import { ScreenStack } from 'react-native-screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Post from './post'
import Animation from './animation'
import Location from './location'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// const Drawer =createDrawerNavigator();
// const HomeDrawer = () => {
//     return (
//         <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
//             <Drawer.Screen name="Home" component={Home} />
//             <Drawer.Screen name="Setting" component={Setting} />
//          </Drawer.Navigator>

//     )
// }
// function MyTabs() {
//     return (
//       <Tab.Navigator screenOptions={{headerShown:false,tabBarShowLabel:false}}>
//         <Tab.Screen name="Home"  component={Home} options={{tabBarIcon:()=>(<Image source={require('./image/home.png')} style={{width:24,height:24}} resizeMode='stretch'/>) }} />
//         <Tab.Screen name="Search" component={Search} options={{tabBarIcon:()=>(<Image source={require('./image/search-interface-symbol.png')} style={{width:24,height:24}} resizeMode='stretch'/>)}}  />
//         <Tab.Screen name="More" component={More} options={{tabBarIcon:()=>(<Image source={require('./image/more.png')} style={{width:24,height:24}} resizeMode='stretch'/>)}} />
//         <Tab.Screen name="Location" component={Location} options={{tabBarIcon:()=>(<Image source={require('./image/video.png')} style={{width:24,height:24}} resizeMode='stretch'/>)}} />
//         <Tab.Screen name="User" component={User} options={{tabBarIcon:()=>(<Image source={require('./image/user.png')} style={{width:24,height:24}} resizeMode='stretch'/>)}} />
//       </Tab.Navigator>
//     );
//   }
export default RootComponent = function () {
    return (
        // <Calculator />
        //  <Login />
        //  <Home />,
        //  <Setting />
        // <Animation />
        <Location />
        // <NavigationContainer>{     
       
        // <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}} >
        //     <Stack.Screen name="Login" component={Login} />
        //     <Stack.Screen name="Register" component={Register} />
        //     <Stack.Screen name="MyTabs" component={MyTabs} />
        //  </Stack.Navigator>
        // }</NavigationContainer>
    )
}
