import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import defaultStyles from '../config/styles';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style = {styles.container}> 
            {icon && <MaterialCommunityIcons size={20} color={defaultStyles.colors.medium} style = {styles.icon} name={icon}/>}
            <TextInput style = {defaultStyles.text} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        marginVertical: 10,
        alignItems: 'center' 
    },

    icon: {
        marginRight: 10
    }
})

export default AppTextInput;