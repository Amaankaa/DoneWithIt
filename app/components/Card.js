import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function Card({title, subTitle, image, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>    
            <View style = {styles.card}>
                <Image style = {styles.image} source={image}/>
                <View style = {styles.detailsContainer}>
                    <AppText style = {styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden'
    },

    detailsContainer: {
        padding: 20
    },

    image: {
        width: '100%',
        height: 200
    },

    title: {
        marginBottom: 7,
        color: 'black'
    },

    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    }
})

export default Card;