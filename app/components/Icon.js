import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

function Icon({
    name,
    size = 40,
    backgroundColor = 'black',
    iconColor = 'white'
}) {
    return (
        <View style = {{
            width: size,
            height: size,
            borderRadius: size/2,
            backgroundColor,
            justifyContent: 'center',
            alignItems: 'center'
        }}> 
            <MaterialCommunityIcons 
                name={name}
                color={iconColor}
                size={size * 0.5}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    
})

export default Icon;