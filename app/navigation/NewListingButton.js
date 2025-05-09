import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style = {styles.container}>
                <MaterialCommunityIcons name='plus-circle' color={colors.white} size={30}/>
            </View>
        </TouchableOpacity>
   );
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderWidth: 10,
        height: 80,
        width: 80,
        borderRadius: 40,
        bottom: 40,
        left: 25
    }
})
export default NewListingButton;