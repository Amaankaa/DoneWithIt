import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import { StyleSheet, View, FlatList } from 'react-native';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: "Messages"
    }
]

function AccountScreen({ navigation }) {
    return (
        <Screen style = {styles.screen}>
            <View style = {styles.infoContainer}>
                <ListItem 
                    title= "Amanuel Merara"
                    subTitle= "amaanumararaa@gmail.com"
                    image={require('../assets/pp.jpg')}
                />
            </View>

            <View style = {styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({item}) => 
                        <ListItem 
                            title={item.title}
                            IconComponent={
                                <Icon 
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    }
                />
            </View>
            <ListItem 
                title={"Log Out"}
                IconComponent={<Icon name="logout" backgroundColor='#ffe66d'/>}
            />

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    infoContainer: {
        height: 50,
        marginBottom: 40,
    },

    screen: {
        backgroundColor: colors.light
    }
})

export default AccountScreen;