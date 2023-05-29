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
export default Calculator = () => {
    return (
        <SafeAreaView style ={{flex:1}}>
        <View style ={{width:'100%', height:'100%',justifyContent:'flex-end',alignItems:'flex-end',backgroundColor:'black' }}>
            

            <View style={{width:'100%', height:'60%',backgroundColor:'black'}}>
                <View style={{flexDirection:'row',width:'100%',height:'20%'}}>
                    <TouchableOpacity style={{width:'22%',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:100,backgroundColor:'#A9A9A9',marginLeft:13}}>
                        <Text style={{fontSize:20,fontWeight:'600'}}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'22%',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:100,backgroundColor:'#A9A9A9',marginLeft:10}}>
                        <Text style={{fontWeight:'600',fontSize:20}}>+/-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'22%',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:100,backgroundColor:'#A9A9A9',marginLeft:10}}>
                        <Text style={{fontWeight:'600',fontSize:20}}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'22%',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:100,backgroundColor:'#FFA500',marginLeft:10}}>
                        <Text style={{fontWeight:'600',fontSize:20,color:'white'}}>/</Text>
                    </TouchableOpacity>
                </View>
               
                <View style={{flexDirection:'row',width:'100%',height:'20%'}}>
                    <TouchableOpacity style={{width:'22%',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:100,backgroundColor:'#202020',marginLeft:13}}>
                        <Text style={{fontSize:20,fontWeight:'600',color:'white'}}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'22%',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:100,backgroundColor:'#202020',marginLeft:10}}>
                        <Text style={{fontWeight:'600',fontSize:20,color:'white'}}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'22%',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:100,backgroundColor:'#202020',marginLeft:10}}>
                        <Text style={{fontWeight:'600',fontSize:20,color:'white'}}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'22%',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:100,backgroundColor:'#FFA500',marginLeft:10}}>
                        <Text style={{fontWeight:'600',fontSize:20,color:'white'}}>x</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',width:'100%',height:'20%'}}>
                    <TouchableOpacity style={{width:'22%',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:100,backgroundColor:'#202020',marginLeft:13}}>
                        <Text style={{fontSize:20,fontWeight:'600',color:'white'}}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'22%',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:100,backgroundColor:'#202020',marginLeft:10}}>
                        <Text style={{fontWeight:'600',fontSize:20,color:'white'}}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'22%',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:100,backgroundColor:'#202020',marginLeft:10}}>
                        <Text style={{fontWeight:'600',fontSize:20,color:'white'}}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'22%',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:100,backgroundColor:'#FFA500',marginLeft:10}}>
                        <Text style={{fontWeight:'600',fontSize:20,color:'white'}}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',width:'100%',height:'20%'}}>
                    <TouchableOpacity style={{width:'22%',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:100,backgroundColor:'#202020',marginLeft:13}}>
                        <Text style={{fontSize:20,fontWeight:'600',color:'white'}}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'22%',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:100,backgroundColor:'#202020',marginLeft:10}}>
                        <Text style={{fontWeight:'600',fontSize:20,color:'white'}}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'22%',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:100,backgroundColor:'#202020',marginLeft:10}}>
                        <Text style={{fontWeight:'600',fontSize:20,color:'white'}}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'22%',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:100,backgroundColor:'#FFA500',marginLeft:10}}>
                        <Text style={{fontWeight:'600',fontSize:20,color:'white'}}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',width:'100%',height:'20%'}}>
                    <TouchableOpacity style={{width:'47%',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:100,backgroundColor:'#202020',marginLeft:13}}>
                        <Text style={{fontSize:20,fontWeight:'600',color:'white'}}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'22%',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:100,backgroundColor:'#202020',marginLeft:10}}>
                        <Text style={{fontWeight:'600',fontSize:20,color:'white'}}>,</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'22%',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:100,backgroundColor:'#FFA500',marginLeft:10}}>
                        <Text style={{fontWeight:'600',fontSize:20,color:'white'}}>=</Text>
                    </TouchableOpacity>
                </View>
                
            </View>    
        </View>
        </SafeAreaView>

    )
}