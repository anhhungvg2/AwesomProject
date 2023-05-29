import React, { Component, useState, useEffect, useRef } from 'react'
import ImagePicker from 'react-native-image-crop-picker';
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
    Button
} from 'react-native'
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { permissionsCamera } from './permission'
import { openCamera, openPicker } from 'react-native-image-crop-picker'

export default User = ({ navigation }) => {
    const camera = useRef(null)
    const devices = useCameraDevices()
    const device = devices.back
    const [showCamera, setShowCamera] = useState(false)
    const [imageSource, setImageSource] = useState('')


    useEffect(() => {
        async function getPermission() {
            const permission = await Camera.requestCameraPermission()
            console.log(`Camera Permission: ${permission}`)
            if (permission == 'denied') await Linking.openSettings()
            console.log(permission)
        }
        getPermission()

    }, [])

    const capturePhoto = async () => {
        if (camera.current !== null) {
            const photo = await camera.current.takePhoto({})
            setImageSource(photo.path)
            setShowCamera(false)
            console.log(photo.path)

        }
    }

    if (device == null) return <View />

    // const onSelectImage = async () => {
    //     const permissionStatus = await permissionsCamera()
    //     if (permissionStatus || Platform.OS == 'ios') {
    //         Alert.alert(
    //             'Profile Picture',
    //             'Choose an option',
    //             [
    //                 { text: 'Máy ảnh', onPress: onCamera },
    //                 { text: 'Chọn ảnh từ thư viện', onPress: onGallery },
    //                 { text: 'Huỷ', onPress: () => { } }
    //             ]
    //         )
    //     }
    // }
    // const [selecImage, setSelecImage] = useState('')
    // const [cameraImage, setCameraImage] = useState('')
    // const onCamera = () => {
    //     ImagePicker.openCamera({
    //         width: 300,
    //         height: 400,
    //         cropping: true,
    //     }).then(image => {
    //         console.log('anh chup tu camera', image);
    //         setCameraImage(image.path)
    //     });
    // }
    // const onGallery = () => {
    //     ImagePicker.openPicker({
    //         width: 300,
    //         height: 400,
    //         cropping: true
    //     }).then(image => {
    //         console.log(image);
    //         setSelecImage(image.path)
    //     });
    // }
    console.log('anh chup tu camera' + showCamera)
    if (showCamera) {
        return (<View style={{ flex: 1 }}>
            <Camera
                style={{
                    flex: 1, alignItems: 'center',
                    justifyContent: 'center',
                }}
                ref={camera}
                device={device}
                isActive={showCamera}
                photo={true}>
                <TouchableOpacity
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 40,
                        backgroundColor: '#DC143C',
                        position: 'absolute',
                        bottom: 50,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} onPress={() => {
                        capturePhoto()
                    }}>
                </TouchableOpacity>
            </Camera>
        </View>)
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: '6%', width: '100%', flexDirection: 'row', borderBottomWidth: 0.25, justifyContent: 'space-between', borderBottomColor: '#A9A9A9' }}>
                <TouchableOpacity
                    style={{ aspectRatio: 1.5, alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Text style={{ fontSize: 16 }}>Huỷ</Text>
                </TouchableOpacity>
                <View
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Chỉnh sửa trang cá nhân</Text>
                </View>
                <TouchableOpacity
                    style={{ aspectRatio: 1.5, alignItems: 'center', justifyContent: 'center' }}
                >
                    <Text style={{ fontSize: 16, color: '#1E90FF', fontWeight: '500' }}>Xong</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: '22%', justifyContent: 'center', alignItems: 'center', width: '100%', borderBottomWidth: 0.25, borderBottomColor: '#A9A9A9' }}>
                <View style={{ flexDirection: 'row', padding: 15 }}>
                    <TouchableOpacity >
                        <View style={{ width: 70, height: 70, borderRadius: 40, borderWidth: 1, marginRight: 10, justifyContent: "center", alignItems: 'center' }}>
                            <Image style={{ width: 69, height: 69, borderRadius: 40 }} source={{ uri: imageSource }}></Image>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={{ width: 70, height: 70, borderRadius: 40, borderWidth: 1, marginLeft: 15, borderColor: '#DCDCDC' }}>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ fontSize: 13.5, fontWeight: '500', color: '#1E90FF' }}>Chỉnh sửa ảnh hoặc avatar</Text>

                </TouchableOpacity>
            </View>
            <View style={{ height: '27%', width: '100%', borderBottomWidth: 0.25, borderBottomColor: '#A9A9A9', alignItems: 'stretch', marginTop: 25 }}>
                <View style={{ marginLeft: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16 }}>Tên</Text>
                    <TextInput style={{ width: '70%', borderBottomWidth: 0.25, borderBottomColor: '#A9A9A9', textAlign: 'left', color: 'black', fontSize: 16 }}
                        autoCapitaize='none'
                    ></TextInput>
                </View>
                <View style={{ marginLeft: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 25 }}>
                    <Text style={{ fontSize: 16 }}>Tên người dùng</Text>
                    <TextInput style={{ width: '70%', borderBottomWidth: 0.25, borderBottomColor: '#A9A9A9', textAlign: 'left', color: 'black', fontSize: 16 }}
                        autoCapitaize='none'
                    ></TextInput>
                </View>
                <View style={{ marginLeft: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 25 }}>
                    <Text style={{ fontSize: 16 }}>Tiểu sử</Text>
                    <TextInput style={{ width: '70%', borderBottomWidth: 0.25, borderBottomColor: '#A9A9A9', textAlign: 'left', color: 'black', fontSize: 16 }}
                        autoCapitaize='none'
                    ></TextInput>
                </View>
                <TouchableOpacity style={{ marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <Text style={{ fontSize: 16 }}>Liên kết</Text>
                    <View style={{ width: '50%' }}>
                        <Text style={{ fontSize: 16, opacity: 0.2, paddingVertical: 2 }}>Thêm liên kết</Text>
                    </View>
                    <Image source={require('./image/icons8-forward-24.png')} style={{ width: 24, height: 24 }}></Image>
                </TouchableOpacity>
            </View>
            <View style={{ height: '8%', width: '100%', borderBottomWidth: 0.25, borderBottomColor: '#A9A9A9', justifyContent: 'center' }}>
                <TouchableOpacity style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 16, color: '#1E90FF' }}>Chuyển sang tài khoản công việc</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: '8%', width: '100%', justifyContent: 'center' }}>
                <TouchableOpacity style={{ marginLeft: 10, alignItems: 'baseline' }}>
                    <Text style={{ fontSize: 16, color: '#1E90FF' }}>Cài đặt thông tin cá nhân</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: '8%', width: '100%', justifyContent: 'center' }}>
                <TouchableOpacity style={{ marginLeft: 10, alignItems: 'baseline' }} onPress={() => {
                    setShowCamera(true)
                }}>
                    <Text style={{ fontSize: 16, color: '#1E90FF' }}>Chup anh</Text>

                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}  