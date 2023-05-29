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
const Post = () => {
    const postInfor = [
        {
            postTitle:'PhanThi9869',
            postPersonImage: require('./image/15E14B87-DCC5-4FA8-8556-1C68011E615B_1_105_c.jpeg'),
            postImage:require('./image/z3742185797711_010e7d30a04c5cfc8a1ab3806a13bee2.jpg'),
            Likes:2002,
            isLiked:false,
            isSave:false,
        },
        {
            postTitle:'anhtu27',
            postPersonImage: require('./image/9F239E34-0878-4A18-B452-3E17B06A9155_1_105_c.jpeg'),
            postImage:require('./image/340836206_1152255662098497_6551096042441677518_n.jpg'),
            Likes:2712,
            isLiked:false,
            isSave:false,
        },
        {
            postTitle:'damviet03',
            postPersonImage: require('./image/DA6F1CAF-0D68-4838-8B29-7E4FD36555FD_1_105_c.jpeg'),
            postImage:require('./image/F4A475B3-E563-4484-8821-8AEE3E5DF5DF_1_105_c.jpeg'),
            Likes:765,
            isLiked:false,
            isSave:false,
        },
        {
            postTitle:'Thaison_96',
            postPersonImage: require('./image/ngoc-trinh-dien-bikini-sexy-so-2-thi-khong-ai-so-1-8.jpg'),
            postImage:require('./image/962BA568-3A40-4ED5-BB8D-A7C3D1604823_1_105_c.jpeg'),
            Likes:99,
            isLiked:false,
            isSave:false,
        },
        {
            postTitle:'Noibuon_9x',
            postPersonImage: require('./image/279040178_1013004136277758_6320499932238977192_n.jpg'),
            postImage:require('./image/93CDB4DE-DEB7-489B-9DC6-3DC3C98BE6AF_1_105_c.jpeg'),
            Likes:478,
            isLiked:false,
            isSave:false,
            
        },
        {
            postTitle:'Taotao21',
            postPersonImage: require('./image/337691879_665976598870459_5687207055699582151_n.jpg'),
            postImage:require('./image/0E375D0D-2623-42AB-94E4-D6885F3CE0A9_1_105_c.jpeg'),
            Likes:1734,
            isLiked:false,
            isSave:false,

            
        },
    ];

    return (
        <View>
            {
                postInfor.map((data,index)=>{
                    const[like,setLike] = useState(data.isLiked)
                    const[save,setSave] = useState(data.isSave)
                    return(
                        <View key={index} style={{
                            paddingBottom:10,
                            borderBottomColor:'gray',
                            borderBottomWidth:0.1

                        }}>
                            <View style={{
                                flexDirection:'row',
                                justifyContent:"space-between",
                                alignItems:'center',
                                padding:7
                                }}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image
                                  source={data.postPersonImage} 
                                  style={{width:38,height:38,borderRadius:100}}/>
                                  <View style={{paddingLeft:5}}>
                                    <Text style={{fontSize:13,fontWeight:'bold'}}>{data.postTitle}</Text>
                                  </View>
                            </View>
                            <TouchableOpacity>
                            <Image source={require('./image/icons8-more-24.png')}/>
                            </TouchableOpacity>
                            </View>
                            <View 
                            style={{
                                position:'relative',
                                justifyContent:'center',
                                alignItems:'center'
                                    }}>
                                <Image source={data.postImage} style={{width:'100%',height:310}}></Image>
                            </View>
                            <View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-between',paddingHorizontal:3,paddingVertical:5}}>
                                <View style={{flexDirection:"row",alignItems:'center',marginLeft:5}}>
                                    <TouchableOpacity 
                                    onPress={()=> {
                                        setLike(!like)
                                    }}
                                    style={{paddingRight:7,fontSize:24}}
                                    > 
                                    {like ? <Image source={require('./image/heart.png')}></Image>:<Image source={require('./image/icons8-favorite-24.png')}></Image> }
                                    
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{paddingRight:7,marginLeft:8}}>
                                        <Image source={require('./image/icons8-comments-24.png')}></Image>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{marginLeft:8}}>
                                        <Image source={require('./image/send.png')}></Image>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity 
                                onPress={()=>{
                                    setSave(!save)
                                }}>
                                {save ? <Image source={require('./image/bookmark.png')}></Image> :  <Image source={require('./image/save-instagram.png')}></Image>}
                                </TouchableOpacity>

                            </View>
                            <View style={{marginLeft:8}}>
                                <Text style={{fontSize:13,fontWeight:'bold'}}>{like ? data.Likes +1 : data.Likes} lượt thích</Text>
                                <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:13,fontWeight:'bold'}}>{data.postTitle}</Text>
                                <Text style={{fontSize:13,marginLeft:3}}>Love Yourself</Text>
                                </View>
                                <Text style={{opacity:0.2,paddingVertical:2,fontSize:13}}>Xem tất cả 1.607 bình luận</Text>
                                <Text style={{opacity:0.2,paddingVertical:2,fontSize:11}}>20 phút trước</Text>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Image source={data.postPersonImage} style={{width:23,height:23,borderRadius:100,backgroundColor:'orange'}}></Image>
                                    <TextInput placeholder='Thêm bình luận...' style={{opacity:0.5,marginLeft:10,fontSize:13,color:'black'}}></TextInput>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )

}
export default Post;