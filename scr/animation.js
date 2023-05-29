import React, { Component, useEffect, useState, useRef } from "react";
import {
    View,
    Image,
    Animated,
    SafeAreaView,
    Text,
    TouchableOpacity
} from 'react-native'
import { Easing } from "react-native-reanimated";
export default Animation = () => {
    const topMotion = useRef(new Animated.Value(0)).current
    const spinValue = useRef(new Animated.Value(0)).current
    const motion = useRef(new Animated.Value(-100)).current

    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
            Animated.parallel([
                Animated.timing(
                    motion, {
                    toValue: 200,
                    duration: 5000,
                    useNativeDriver: false
                }
                ),
                Animated.sequence([
                    Animated.timing(
                        spinValue, {
                        toValue: 1,
                        duration: 400,
                        useNativeDriver: false
                    }
                    ),
                    Animated.timing(
                        spinValue, {
                        toValue: -1,
                        duration: 400,
                        useNativeDriver: false
                    }
                    ),
                    Animated.timing(
                        spinValue, {
                        toValue: 0,
                        duration: 200,
                        useNativeDriver: false
                    }
                    ),

                ])
            ])
            ).start();
        }, 1000)
    }, []);

    const spin = spinValue.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ['-45deg', '0deg', '45deg']
    })
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, borderWidth: 5, borderColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                <Animated.View style={{ transform: [{ rotate: spin }], marginTop: topMotion, width: 150, height: 150 }}>
                    <Image source={require('./image/icons8-bell-48.png')} resizeMode="stretch" style={{ width: 150, height: 150 }}>

                    </Image>

                </Animated.View>
                <Animated.View style={{ alignSelf: 'center', position: 'absolute', bottom: motion, }}>
                    <TouchableOpacity
                        style={{
                            width: 300,
                            height: 50,
                            borderRadius: 25,
                            backgroundColor: 'pink',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() =>
                            Animated.timing(spinValue).stop()}
                    >
                        <Text style={{fontSize:25,fontWeight:'bold'}}>Stop</Text>
                    </TouchableOpacity>
                </Animated.View>

            </View>

        </SafeAreaView>
    )
}