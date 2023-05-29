import React, { Component, useState } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    Dimensions,
    TextInput,
    Image
} from 'react-native'
export default Reels  = ({navigation}) => {
   
    return(
        <SafeAreaView style ={{flex:1}}>
        <View style={{height:'8%',width:'100%', flexDirection:'row'}}>
            <TouchableOpacity 
            style={{height:'100%',aspectRatio:1.7,alignItems:'center',flexDirection:'row'}}
            onPress={()=>{
                navigation.goBack();
            }}
            >
                <Image source={require('./image/icons8-back-32.png')} resizeMode='contain'></Image>
                <Text style={{fontSize:18,fontWeight:'500',marginRight:10}}>Back</Text>
            </TouchableOpacity>
           
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',width:'100%'}}>
            <Text style={{fontSize:30}}>Reels</Text>
            <TouchableOpacity 
            style={{width:'50%',height:50,borderWidth:1,marginTop:50,borderRadius:100,justifyContent:'center',alignItems:'center'}}
            onPress={()=>{
                navigation.popToTop()
            }}
            >
            <Text style={{fontSize:25}}>Logout</Text>


            </TouchableOpacity>

        </View>

    </SafeAreaView>
    )




   
}  