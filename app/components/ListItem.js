import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import {GestureHandlerRootView} from 'react-native-gesture-handler'

import { Swipeable } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ListItem({
    title, 
    subTitle, 
    image, 
    IconComponent, 
    onPress, 
    renderRightActions
}) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight 
                underlayColor={colors.light}
                onPress={onPress}>
                    <View style = {styles.container}>
                        {IconComponent}
                        {image && <Image style = {styles.image} source={image}/>}
                        <View style = {styles.detailsContainer}>
                            <AppText style={styles.title} numberOfLines = {1}>{title}</AppText>
                            {subTitle && <AppText style={styles.subTitle} numberOfLines = {2}>{subTitle}</AppText>}
                        </View>
                        <MaterialCommunityIcons name='chevron-right' size={25} color={colors.medium}/>
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white,
        alignItems: 'center'
    },

    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: "bold",
    },

    subTitle: {
        color: colors.medium
    }
})

export default ListItem;