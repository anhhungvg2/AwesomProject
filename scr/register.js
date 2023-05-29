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

export default Register = ({navigation}) => {
    return (
        <SafeAreaView style ={{flex:1}}>
        <View style ={{width:'100%', height:'100%'}}>
            <View style ={{width:'100%', height:'30%',marginLeft:10,marginTop:'30%'}}>
                <View style={{width:'70%', height:30, flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{color:'black',fontWeight:"bold"}}>Name:</Text>
                    <TextInput style= {{height:'100%', width:'70%', borderBottomColor:'black',borderBottomWidth:1, textAlign:'left',color:'black'}}autoCapitaize ='none'/>
                </View>
                <View style={{width:'70%', height:30, flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{color:'black',fontWeight:"bold"}}>Email:</Text>
                    <TextInput style= {{height:'100%', width:'70%', borderBottomColor:'black',borderBottomWidth:1, textAlign:'left',color:'black'}}autoCapitaize ='none' />
                </View>
                <View style={{width:'70%', height:30, flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{color:'black',fontWeight:"bold"}}>Password:</Text>
                    <TextInput style= {{height:'100%', width:'70%', borderBottomColor:'black',borderBottomWidth:1, textAlign:'left',color:'black',}}autoCapitaize ='none' secureTextEntry={true}/>
                </View>
                <View style={{width:'70%', height:30, flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{color:'black',fontWeight:"bold"}}>Record:</Text>
                    <TextInput style= {{height:'100%', width:'70%', borderBottomColor:'black',borderBottomWidth:1, textAlign:'left',color:'black'}}autoCapitaize ='none' secureTextEntry={true}/>
                </View>
            </View> 
         <View style={{flex:1,justifyContent:'center',alignItems:'center',width:'100%'}}>
         <TouchableOpacity 
            style={{width:'50%',height:30,borderWidth:1,marginBottom:'50%',borderRadius:100,justifyContent:'center',alignItems:'center'}}
            onPress={()=>{
                navigation.navigate('Login')
            }}
            >
            <Text style={{fontSize:25}}>Đăng Ký</Text>


            </TouchableOpacity>
         </View>  
        </View>    
        </SafeAreaView>

    )
}