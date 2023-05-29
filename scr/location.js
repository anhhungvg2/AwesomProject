import React, { Component, useState, useEffect, useRef } from 'react'
import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker, PROVIDER_GOOGLE, Callout, Polyline, Polygon } from 'react-native-maps';
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
    Platform,
    Alert,
    Linking,
    StyleSheet,
    Modal,
    Button
} from 'react-native'
import { openSettings } from 'react-native-permissions';

export default Location = ({ navigation }) => {
    const mapRef = useRef()
    const [position, setPosition] = useState({
        latitude: 21.028511,
        longitude: 105.804817,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    });

    const [coordsLocation, setCoordsLocation] = useState([

        {
            latitude: 20.918990117920043, 
            longitude: 105.95917504633098,
            description: 'Thôn Đa Ngưu',
            title: 'Nhà riêng',
        },
        {
            title: 'Nơi làm việc',
            latitude: 20.984646,
            longitude: 105.84618829404778,
            description: 'Trương Định Plaza'
        },
        {
            title: 'Lăng bác',
            latitude: 21.037027459355,
            longitude: 105.8346774247306,
            description: 'Lăng Chủ tịch Hồ Chí Minh'
        },
        {
            latitude: 20.980026779466378,
            longitude: 105.98132486705879,
            title: 'Trường học',
            description: 'Trường Đại học Tài chính - Quản trị kinh doanh'

        },
        {
            title: 'Trường học',
            latitude: 20.843702327694096,
            longitude: 106.00822599404474,
            description: 'Trường Đại học Sư phạm Kỹ thuật Hưng Yên'
        },

    ])

    async function fitMapToPolyline() {
        await mapRef.current.fitToCoordinates(coordsLocation, {
            edgePadding: {
                top: 10,
                right: 10,
                bottom: 10,
                left: 10,
            },
        });
    }
    const onRegionChange = (region) => {
        console.log(region)
    }
    useEffect(() => {
        const requestGeoLocation = async () => {
            if (Platform.OS === 'ios') {
                let grandted = await Geolocation.requestAuthorization('always')
                if (grandted == 'granted') {
                    Geolocation.getCurrentPosition((pos) => {
                        const crd = pos.coords;
                        console.log('vi tri hien tai', crd)
                        setPosition({
                            latitude: crd.latitude,
                            longitude: crd.longitude,
                            latitudeDelta: 0.0421,
                            longitudeDelta: 0.0421,
                        });
                    }).catch((err) => {
                        console.log(err);
                    });
                } else {
                    Alert.alert(
                        "Bạn chưa cho quyền",
                        "Vui lòng vào cài đặt",
                        [
                            { text: 'Để sau', onPress: () => { } },
                            { text: 'Vào cài đặt', onPress: openSettings }
                        ]
                    )
                }
            }
        }
        requestGeoLocation()
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Modal animationType={'slide'} visible={true}>
                <MapView
                    // provider={PROVIDER_GOOGLE}
                    ref={mapRef}
                    onRegionChange={onRegionChange}
                    initialRegion={position}
                    style={styles.map}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    followsUserLocation={true}
                    showsCompass={true}
                    scrollEnabled={true}
                    zoomEnabled={true}
                    pitchEnabled={true}
                    rotateEnabled={true}
                >
                    {coordsLocation.map((coordsLocation, index) => (
                        <View>
                            <Marker key={index} coordinate={coordsLocation} title={coordsLocation.title}
                                description={coordsLocation.description} image={require('./image/icons8-location-80.png')} />
                        </View>
                    ))}
                    <Polygon
                        coordinates={coordsLocation}
                        strokeColor={'#1E90FF'}
                        strokeWidth={6}
                    // fillColor='red'
                    />
                </MapView>
                <View style={styles.button}>
                    <TouchableOpacity onPress={fitMapToPolyline}>
                        <Image source={require('./image/icons8-my-location-100.png')} style={{ height: 30, width: 30 }}></Image>
                    </TouchableOpacity>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
        width: '100%',
        height: '100%'
    },
    button: {
        position: 'absolute',
        top: 50,
    },
})
