import React, { Component, useState, useEffect } from 'react'
import Post from './post'
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    Dimensions,
    TextInput,
    Image,
    ScrollView
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
export default Home = ({ route, navigation }) => {
    const [stories, setStories] = useState([
        {
            url: 'https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/340836206_1152255662098497_6551096042441677518_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=C1XarX0U-4gAX_buID3&_nc_ht=scontent.fhan19-1.fna&oh=00_AfAuetJDQM4po_IAsRb-sDonsbQfqoMo-1JObBhP4I8Rqg&oe=6446A64F',
            name: 'anhtu27'
        },
        {
            url: 'https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/279040178_1013004136277758_6320499932238977192_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=HB8DOhORs_gAX8f2hxz&_nc_ht=scontent.fhan19-1.fna&oh=00_AfDoxx6k3fqIvqejQDIjScCi2vwnyWit4o_avlOOi4IMVw&oe=644578A3',
            name: 'Noibuon_9x'
        },
        {
            url: 'https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/315408480_1326019908135215_6782294367977463198_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xn6XmJiXpZEAX9l1EHK&_nc_ht=scontent.fhan5-8.fna&oh=00_AfBvIO-gq3xMJkNDNpXeC5VUuudnGWYZiwQiebTkO6XKNQ&oe=64577D40',
            name: 'PhanThi9869'
        },
        {
            url: 'https://media.techz.vn/media2019/source/ABCTHAO/shin-but-chi-1.jpg',
            name: 'shinbutchi00'
        },
        {
            url: 'https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/259825855_4508678599250411_3679776031934190025_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Zi9Rxe1drToAX9dd9n6&_nc_ht=scontent.fhan19-1.fna&oh=00_AfAgQUVfv9jt4qrW57jY60WllsdhjXC97WllMhYK-m1R9A&oe=6445A7D4',
            name: 'Thaison_96'
        },
        {
            url: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
            name: 'taotao21'
        },
        {
            url: 'https://image.nhandan.vn/w800/Uploaded/2023/igpcvcvjntc8510/2022_07_17/1707-vietnam-3881.jpg',
            name: 'crush15'
        },
        {
            url: 'https://giadinh.mediacdn.vn/296230595582509056/2023/3/24/3314382869484437031940873795894745007214784n-16795780814191798512236-1679632191392-1679632191817114586435.jpeg',
            name: 'damviet03'
        }
    ])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: '8%', width: '100%', flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{ height: '100%', aspectRatio: 1.7, alignItems: 'center', flexDirection: 'row' }}
                    onPress={() => {
                        navigation.openDrawer();
                    }}
                >
                    <Image source={require('./image/Instagram_logo.svg.png')} style={{ width: 110, height: 50 }} resizeMode='stretch'></Image>
                    <Image source={require('./image/down.png')} resizeMode='stretch'></Image>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ height: '100%', aspectRatio: 1.7, alignItems: 'center', marginLeft: 210, justifyContent: 'center', flexDirection: 'row' }}
                    onPress={() => {
                        navigation.navigate('Setting')
                    }}
                >
                    <Image source={require('./image/icons8-favorite-24.png')} style={{ marginRight: 20, width: 25, height: 25 }} resizeMode='stretch'></Image>
                    <Image source={require('./image/send.png')} style={{ width: 22, height: 22 }} resizeMode='stretch'></Image>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{ width: '100%', marginTop: 2, borderBottomWidth: 0.25, borderBottomColor: '#A9A9A9', height: 100 }}>
                    <FlatList
                        style={{ flex: 1 }}
                        horizontal={true}
                        data={stories}
                        keyExtractor={item => item.name}
                        // renderHeaders ={() => {
                        //     return(
                        //         <FlatList
                        //             //  stories
                        //         ></FlatList>

                        //     )
                        // }}
                        renderItem={({ item }) => {
                            return <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: 63, height: 63, borderWidth: 1.5, borderColor: '#1E90FF', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginLeft: 11 }}>
                                    <Image
                                        style={{
                                            width: 58,
                                            height: 58,
                                            resizeMode: 'cover',
                                            borderRadius: 30,
                                        }} source={{ uri: item.url }}
                                    />

                                </View>
                                <Text style={{ fontSize: 10, color: 'black', marginTop: 5, marginLeft: 11 }}>{item.name}

                                </Text>
                            </TouchableOpacity>
                        }}
                    />


                </View>

                <View style={{ width: '100%' }}>
                    <Post />
                </View>


            </ScrollView>


        </SafeAreaView>
    )
}  
