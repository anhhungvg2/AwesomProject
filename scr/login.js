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
let windowWidth = Dimensions.get('window').width
let windowHeight = Dimensions.get('window').height
export default Login  = ({navigation}) => {
     const [getPasswordVisible, setPasswordVisible] = useState(false)
     const [getEmail, setEmail] = useState('')
    return (
    <ImageBackground style = {{height:'100%', width: '100%'}} source={require('./image/z3742185797711_010e7d30a04c5cfc8a1ab3806a13bee2.jpg')}>
        <StatusBar barStyle='light-content'/>
        <SafeAreaView style ={{flex:1}}>
            <View style ={{width:'100%', height:'100%'}}>
                <View style ={{width:'100%', height:'20%',marginTop: 0.3 * windowHeight}}>
                    <View style={{ alignItems: 'center'}}>
                    <View style={{width:'70%', height:30, flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={{color:'white',fontWeight:"bold"}}>Email</Text>
                        <TextInput style= {{height:'100%', width:'70%', borderBottomColor:'white',borderBottomWidth:1, textAlign:'left',color:'white'}}
                        autoCapitaize ='none'
                        value={getEmail}
                        onChangeText={setEmail}
                        />
                    </View>
                    <View style={{width:'70%', height:30, flexDirection:'row',alignItems:'center',justifyContent:'space-between', marginTop:10}}>
                        <Text style={{color:'white',fontWeight:"bold"}}>Password</Text>
                        <TextInput style= {{height:'100%', width:'70%', borderBottomColor:'white',borderBottomWidth:1,textAlign:'left',paddingRight:30,color:'white'}}autoCapitaize ='none' secureTextEntry={getPasswordVisible ? false : true}/>
                    <TouchableOpacity 
                    style={{height:'100%',aspectRatio:1, position:"absolute",right:0}}
                    onPress={()=> {
                        setPasswordVisible(!getPasswordVisible)
                    }}
                    >
                     { getPasswordVisible?
                        <Image source={require('./image/icons8-invisible-24.png')} style={{width:'100%',height:'100%'}} resizeMode='contain' />
                        :
                        <Image source={require('./image/icons8-eye-24.png')} style={{width:'100%',height:'100%'}} resizeMode='contain' />
                    }                    
                    </TouchableOpacity>
                    </View>
                
                    </View>
                    <TouchableOpacity style={{marginTop:5,alignItems:'flex-end'}}>
                        <Text style={{fontSize:15,color:'white'}}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                </View>
                <View style ={{width:'100%', height:'20%', marginTop:0.15 * windowHeight,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity 
                    style={{width:'50%',height:'30%',borderWidth:1,borderColor:'white',borderRadius:100,backgroundColor:'#1E90FF',justifyContent:'center',alignItems:'center'}}
                    onPress={()=>{
                        navigation.navigate('MyTabs'
                        )
                    }}
                    >
                        <Text style={{fontSize:15, fontWeight:'bold'}}>Đăng Nhập</Text>
                
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{marginTop:20,width:'50%',height:'30%',borderWidth:1,borderColor:'white',borderRadius:100,backgroundColor:'#6A5ACD',justifyContent:'center',alignItems:'center'}}
                    onPress={()=> {
                        navigation.navigate('Register')
                    }}
                    >
                    <Text style={{fontSize:15, fontWeight:'bold'}}>Đăng Ký</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    </ImageBackground>
    )
}