import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import PickerItem from './PickerItem';

function AppPicker({
    icon, 
    PickerItemComponent = PickerItem,
    placeholder, 
    items, 
    numberOfColumns,
    onSelectedItem, 
    selectedItem,
    width = "100%"
}) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style = {[styles.container, {width}]}> 
                    {icon && 
                    <MaterialCommunityIcons 
                    size={20} 
                    color={defaultStyles.colors.medium} 
                    style = {styles.icon} 
                    name={icon}/>
                    }

                    {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}

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
                        numColumns={numberOfColumns}
                        renderItem={({item}) => (
                        <PickerItemComponent
                            item = {item}
                            label={item.label}
                            onPress={() => 
                                {
                                    setModalVisible(false)
                                    onSelectedItem(item)
                                }
                            }
                        />)}
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
        padding: 10,
        marginVertical: 10,
        alignItems: 'center' 
    },

    icon: {
        marginRight: 10
    },

    text: {
        flex: 1
    },

    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1
    }
})

export default AppPicker;