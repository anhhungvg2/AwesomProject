import { PermissionsAndroid, Platform } from "react-native";
import React, { Component, useState } from 'react'
 

export const permissionsCamera = () => new Promise(async(resolve, reject) => {
    try {
        if (Platform.OS === 'android' && Platform.Version > 22) {
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
            ])
            console.log(granted, 'grandted response')
            if (
                granted['android.permission.CAMERA'] !== 'granted' ||
                granted['android.permission.WRITE_EXTERNAL_STORAGE'] !== 'granted' ||
                granted['android.permission.READ_EXTERNAL_STORAGE'] !== 'granted'
            ) {
                showError("Don't no")
                return resolve(false)
            }
            return resolve(true)
        }
        return resolve(true)

    } catch (error) {
        return resolve(false)
    }
})

