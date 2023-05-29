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




<SafeAreaView style={backgroundStyle}>
<StatusBar
barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
<View style ={{ width:'100%', height:'100%'  }}>
<View style ={{width: '100%', height: '16,6666666666667%', flexDirection: 'row',borderWidth:1 }}>
  {/* Ô 1 */}
  <View style ={{justifyContent:'center',alignItems:'center', height:'100%', width:'33.3333333333333%'}}>
    <View style={{height:'80%', width:'80%', backgroundColor:'red', borderRadius: 15 }}>
    </View>

  </View>
  <View style={{ height:'100%',flex:1, borderLeftWidth:1}}>
    <Text style={{marginTop:15, marginLeft:15, fontSize:20}}>Tú Đẹp Trai Nhất Phòng</Text>
  </View>
</View>


<View style={{ width: '100%', height: '16,6666666666667%', flexDirection: 'row', borderWidth:1, borderTopWidth:0}}>
<View style={{ justifyContent:'center',alignItems:'center', height:'100%', width:'66.6666666666667%', borderRightWidth:1}}>
  <Text style={{fontSize:17, fontWeight:'700'}}>Rõ Ràng Là Như Vậy Luôn</Text>
</View>
<View style={{width:'33.3333333333333%', height:'100%'}}>
  <View style={{height:'50%', width:'100%', backgroundColor:'green'}}></View>
  <View style={{height:'50%', width:'100%', backgroundColor:'blue'}}></View>
</View>
</View> 
<View style={{ width: '100%', height: '16,6666666666667%', flexDirection: 'row', borderWidth:1, borderTopWidth:0}}>
<View style={{height:'100%', width:'33.3333333333333%', backgroundColor:'yellow', borderRightWidth:1}}>
</View>
<View style={{height:'100%', width:'33.3333333333333%', backgroundColor:'#039cad', borderRightWidth:1}}>
</View>
<View style={{height:'100%', flex:1, backgroundColor:'#53f5e7', borderRightWidth:1}}>
</View>
</View>
<View style={{justifyContent:'center',alignItems:'center', width: '100%', height: '33,3333333333333%', flexDirection: 'row', borderTopWidth:0}}>
<View style={{width:'50%', height:'60%', backgroundColor:'#2d025c'}}>
  <View style={{aspectRatio:1, height:'50%',backgroundColor:'#FFA500', position:'absolute', right:-20, top:-20}}>
  </View>
</View>

</View>
<View style={{width:'100%',flex:1,justifyContent:'center',alignItems:'center'}}>
<View style={{width:'80%', height:'50%',flexDirection: 'row',justifyContent:'space-between'}}>
  <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:'40%', height:'100%', borderWidth:2, borderRadius:50, borderColor:'red',backgroundColor:'#FFE4E1'}}>
    <Text style={{fontSize:20, fontWeight:'700',}}>Save</Text>
  </TouchableOpacity>
  <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:'40%', height:'100%', borderWidth:2,borderRadius:50,backgroundColor:'#2F4F4F'}}>
  <Text style={{fontSize:20, fontWeight:'700',color:'white'}}>Close</Text>
  </TouchableOpacity>
</View>

</View>

</View>
</SafeAreaView>




