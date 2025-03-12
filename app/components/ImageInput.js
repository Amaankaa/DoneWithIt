import React, { useEffect } from 'react';
import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../config/colors';
import * as ImagePicker from 'expo-image-picker'
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ImageInput({ imageUri, onChangeImage }) {

    useEffect(() => {
        requestPermission();
    }, [])

    const requestPermission = async () => {
        
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if(!granted) alert('You need to enable permission to access the library!')
    
      }

    const handlePress = () => {
        if (!imageUri) selectImage();
        else Alert.alert('Delete', 'Are you sure nigga?', [
            { text: 'Yes', onPress: () => onChangeImage(null) },
            { text: 'No' }
        ])
        
        }
    
    const selectImage = async () => {
        try {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            quality: 0.5
        });
        if(!result.canceled)
            onChangeImage(result.assets[0].uri)
    
        } catch (error) {
        console.log('Error!')
        }
    }
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style = {styles.container}>
                {!imageUri && <MaterialCommunityIcons name='camera' size={40} color={colors.medium}/>}
                {imageUri && <Image source={{ uri: imageUri }} style = {styles.image}/>}
            </View>
        </TouchableWithoutFeedback>
   );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        height: 100,
        width: 100
    },
    image: {
        height: '100%',
        width: '100%'
    }
})
export default ImageInput;