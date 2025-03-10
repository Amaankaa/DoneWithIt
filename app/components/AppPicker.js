import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import PickerItem from './PickerItem';

function AppPicker({icon, placeholder, items}) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style = {styles.container}> 
                    {icon && 
                    <MaterialCommunityIcons 
                    size={20} 
                    color={defaultStyles.colors.medium} 
                    style = {styles.icon} 
                    name={icon}/>
                    }
                    <AppText style={styles.text}>{placeholder}</AppText>
                    <MaterialCommunityIcons 
                        size={20} 
                        color={defaultStyles.colors.medium}
                        name= "chevron-down"
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible = {modalVisible} animationType='slide'>
                <Button title='Close' onPress={() => setModalVisible(false)}/>
                    <FlatList 
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({item}) => <PickerItem
                            label={item.label}
                            onPress={() => console.log(item)}
                        />}
                    />
            </Modal>
        </>
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
    },

    text: {
        flex: 1
    }
})

export default AppPicker;