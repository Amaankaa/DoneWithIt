import React from 'react';
import { Image, StyleSheet, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import {GestureHandlerRootView} from 'react-native-gesture-handler'

import { Swipeable } from 'react-native-gesture-handler'

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
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
                            <AppText style={styles.title}>{title}</AppText>
                            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                        </View>
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
        backgroundColor: colors.white
    },

    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center'
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